import './login-signup.css';
import { useEffect } from 'react';

const Login = () => {

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <div className='loginSignupParent'>
        <div className='formContainer'>
          <h1 className='text-4xl font-bold'>Log in</h1>
          <div>
            <form>
              <div className="fieldsCont my-5">
                <label htmlFor="email">Email <span className='text-red-500'>*</span></label>
                <input
                  type="email"
                  id="email"
                  className="inputs"
                  placeholder="Enter email"
                />
              </div>
              <div className="fieldsCont my-5">
                <label htmlFor="password">Password <span className='text-red-500'>*</span></label>
                <input
                  type="password"
                  id="password"
                  className="inputs"
                  placeholder="Enter password"
                />
              </div>
              <div className='my-2'>
                <a>
                  <button className="underline" type="button">
                    Forgot Password
                  </button>
                </a>
              </div>
              <div className='my-2'>
                <span className='text-gray-500'>Don't have an account? </span>
                <a href='/signup'>
                  <button className="underline" type="button">
                    Create One
                  </button>
                </a>
              </div>
              <button
                type="submit"
                className="bg-amber-600 px-6 hover:scale-105 duration-150 ease-in-out py-2 my-4 rounded-lg drop-shadow-2xl text-2xl text-white"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;