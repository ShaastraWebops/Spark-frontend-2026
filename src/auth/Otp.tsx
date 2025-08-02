import './login-signup.css';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/navbar/navbar';

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
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

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    console.log('Submitted OTP:', enteredOtp);
    // Handle OTP verification here
  };

  return (
    <>
      <Navbar showNavbar={true} scrollToSection={() => { }} />
      <div className='loginSignupParent'>
        <div className='formContainer'>
          <h1 className='pageHeading'>Verify OTP</h1>
          <p className='text-white text-center mb-6'>Please enter the 6-digit OTP sent to your email</p>
          <form onSubmit={handleSubmit} className='flex flex-col items-center'>
            <div className='flex gap-2 mb-6'>
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
                  className="inputs text-center text-2xl w-12 h-12 rounded-md"
                />
              ))}
            </div>
            <button type="submit" className="formButton">Verify</button>
            <p className='mt-4 text-gray-400 text-sm'>
              Didn’t receive the OTP? <button type="button" className="underline text-white">Resend</button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
