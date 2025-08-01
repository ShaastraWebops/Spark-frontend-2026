import './login-signup.css';
import { useEffect } from 'react';
import Navbar from '../Components/navbar/navbar'
import Footer from '../Components/footer/footer';

const Login = () => {

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <Navbar showNavbar={true} scrollToSection={() => { }} />

      {/* Login Form */}
      <div className='loginSignupParent'>
        <div className='formContainer'>
          <h1 className='pageHeading'>Log in</h1>
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
                <button className="underline" type="button">
                  <a href='#'>
                    Forgot Password
                  </a>
                </button>
              </div>
              <div className='my-2'>
                <span className='text-gray-500'>Don't have an account? </span>
                <button className="underline" type="button">
                  <a href='/signup'>
                    Create One
                  </a>
                </button>
              </div>
              <button
                type="submit"
                className="formButton"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <footer className="w-full flex items-center justify-center h-auto  bg-gray-800 text-white">
        <Footer />
      </footer>
    </>
  );
};

export default Login;