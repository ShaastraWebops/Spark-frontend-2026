import './login-signup.css';
import { useEffect } from 'react';
import Navbar from '../Components/navbar/navbar'
import { Link } from 'react-router-dom';


const Login = () => {

  useEffect(() => {
    document.title = "Login | Spark";
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
                  <Link to='/forgot-password'>
                    Forgot Password
                  </Link>
                </button>
              </div>
              <div className='my-2'>
                <span className='text-gray-500'>Don't have an account? </span>
                <button className="underline" type="button">
                  <Link to='/signup'>
                    Create One
                  </Link>
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
    </>
  );
};

export default Login;