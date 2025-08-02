import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/navbar/navbar";

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    document.title = "OTP Verification | Spark";
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Submitted OTP:", enteredOtp);
    // OTP submission logic here
  };

  return (
    <>
      {/* <Navbar showNavbar={true} scrollToSection={() => { }} /> */}
      <div className="min-h-screen bg-slate-900 flex items-center justify-center flex-col px-4">
        <div className="bg-white/10 text-white p-10 rounded-3xl w-fit h-fit my-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-green-400">
            Verify OTP
          </h1>
          <p className="text-center mb-6 text-gray-300">
            Enter the 6-digit OTP sent to your email
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex gap-3 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputsRef.current[index] = el)}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-b-2 border-white bg-transparent text-white text-2xl text-center outline-none focus:border-blue-300 transition-all duration-300 rounded-md"
                />
              ))}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-medium transition-transform hover:scale-105"
            >
              Verify
            </button>
            <p className="mt-4 text-gray-400 text-sm">
              Didn't receive the OTP?{" "}
              <button
                type="button"
                className="underline text-white hover:text-blue-300 transition-colors"
              >
                Resend
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
