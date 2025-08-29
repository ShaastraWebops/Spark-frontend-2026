import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { REQUEST_OTP, VERIFY_OTP } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Mail, KeyRound, AlertCircle, LogIn } from "lucide-react";
import Navbar from "../Components/navbar/navbar";

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
  const [errors, setErrors] = useState<{ email?: string; otp?: string }>({});
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

  useEffect(() => {
    document.title = "OTP Verification | Spark";
  }, []);

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
    // <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
    //   <div className="bg-white/10 text-white p-8 rounded-2xl w-full max-w-md">
    //     <h1 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-green-400">
    //       OTP Verification
    //     </h1>

    //     <input
    //       type="email"
    //       placeholder="Enter your email"
    //       className="w-full px-4 py-2 mb-4 rounded-md text-blue-200 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    //       value={email}
    //       onChange={handleEmailChange}
    //       disabled={otpSent}
    //     />

    //     {!otpSent ? (
    //       <button
    //         onClick={sendOtp}
    //         className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mb-4 transition"
    //         disabled={loading}
    //       >
    //         {loading ? "Sending..." : "Send OTP"}
    //       </button>
    //     ) : (
    //       <form onSubmit={verifyOtp} className="flex flex-col items-center">
    //         <div className="flex gap-2 mb-4">
    //           {otp.map((digit, index) => (
    //             <input
    //               key={index}
    //               type="text"
    //               maxLength={1}
    //               inputMode="numeric"
    //               className="w-10 h-10 sm:w-12 sm:h-12 text-2xl text-center border-b-2 border-white bg-transparent text-white outline-none"
    //               value={digit}
    //               onChange={(e) => handleOtpChange(index, e.target.value)}
    //               onKeyDown={(e) => handleKeyDown(index, e)}
    //               ref={(el) => (inputsRef.current[index] = el)}
    //             />
    //           ))}
    //         </div>
    //         {resendTimer > 0 ? (
    //           <p className="mt-4 text-gray-400 text-sm">
    //             You can resend OTP in {resendTimer}s
    //           </p>
    //         ) : (
    //           <button
    //             type="button"
    //             onClick={sendOtp}
    //             className="underline text-white hover:text-blue-300 transition-colors"
    //           >
    //             Resend OTP
    //           </button>
    //         )}
    //         <button
    //           type="submit"
    //           className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition"
    //         >
    //           Verify OTP
    //         </button>
    //       </form>
    //     )}
    //   </div>
    // </div>

    <>
      <Navbar showNavbar={false} scrollToSection={() => {}} />
      <div className="min-h-screen bg-slate-900 flex items-center justify-center py-8">
        <div className="max-w-md w-full bg-white rounded-xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-2">
              <KeyRound className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              OTP Verification
            </h1>
            <p className="text-gray-400 text-sm">
              Enter your email to receive an OTP.
            </p>
          </div>
          <form
            onSubmit={
              otpSent
                ? verifyOtp
                : (e) => {
                    e.preventDefault();
                    sendOtp();
                  }
            }
            className="space-y-5"
          >
            {/* Email */}
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                <Mail className="w-3 h-3 text-blue-500" />
                Email
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full px-3 py-2 pl-8 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.email && hasTriedSubmit
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  autoComplete="email"
                  disabled={otpSent}
                />
                <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              {errors.email && hasTriedSubmit && (
                <div className="flex items-center gap-1 text-red-500 text-xs">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </div>
              )}
            </div>
            {/* OTP */}
            {otpSent && (
              <div className="space-y-1">
                <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                  <KeyRound className="w-3 h-3 text-blue-500" />
                  Enter OTP
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 justify-center mb-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      inputMode="numeric"
                      className={`w-10 h-10 sm:w-12 sm:h-12 text-2xl text-center border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white ${
                        errors.otp && hasTriedSubmit
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      ref={(el) => (inputsRef.current[index] = el)}
                    />
                  ))}
                </div>
                {errors.otp && hasTriedSubmit && (
                  <div className="flex items-center gap-1 text-red-500 text-xs justify-center">
                    <AlertCircle className="w-3 h-3" />
                    {errors.otp}
                  </div>
                )}
                {resendTimer > 0 ? (
                  <p className="mt-2 text-gray-400 text-xs text-center">
                    You can resend OTP in {resendTimer}s
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={sendOtp}
                    className="block mx-auto text-xs text-blue-600 hover:text-blue-700 underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            )}
            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-300 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {otpSent ? "Verifying..." : "Sending..."}
                  </div>
                ) : otpSent ? (
                  "Verify OTP"
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>
            {/* Back to login */}
            <div className="text-center pt-2">
              <span className="text-gray-600 text-sm">
                Remembered your password?{" "}
                <a
                  href="/login"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                  Log in
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
