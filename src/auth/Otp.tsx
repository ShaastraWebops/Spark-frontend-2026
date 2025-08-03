import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { REQUEST_OTP, VERIFY_OTP } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const OtpVerification: React.FC = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [requestOtpMutation] = useMutation(REQUEST_OTP);
  const [verifyOtpMutation] = useMutation(VERIFY_OTP);
  const navigate = useNavigate();
  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    if (otpSent && resendTimer > 0) {
      const interval = setTimeout(
        () => setResendTimer((prev) => prev - 1),
        1000
      );
      return () => clearTimeout(interval);
    }
  }, [otpSent, resendTimer]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendOtp = async () => {
    if (!email) return toast.error("Please enter your email");

    setLoading(true);
    try {
      await requestOtpMutation({ variables: { email } });
      toast.success("OTP sent!");
      setOtpSent(true);
      setResendTimer(30);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const verifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) return toast.error("Enter full 6-digit OTP");

    try {
      await verifyOtpMutation({ variables: { email, otp: enteredOtp } });
      toast.success("OTP verified!");
      navigate("/set-password", { state: { email } });
    } catch (err: any) {
      toast.error(err.message || "Verification failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="bg-white/10 text-white p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-green-400">
          OTP Verification
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 rounded-md text-blue-200 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={email}
          onChange={handleEmailChange}
          disabled={otpSent}
        />

        {!otpSent ? (
          <button
            onClick={sendOtp}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mb-4 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        ) : (
          <form onSubmit={verifyOtp} className="flex flex-col items-center">
            <div className="flex gap-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  inputMode="numeric"
                  className="w-10 h-10 sm:w-12 sm:h-12 text-2xl text-center border-b-2 border-white bg-transparent text-white outline-none"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputsRef.current[index] = el)}
                />
              ))}
            </div>
            {resendTimer > 0 ? (
              <p className="mt-4 text-gray-400 text-sm">
                You can resend OTP in {resendTimer}s
              </p>
            ) : (
              <button
                type="button"
                onClick={sendOtp}
                className="underline text-white hover:text-blue-300 transition-colors"
              >
                Resend OTP
              </button>
            )}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OtpVerification;
