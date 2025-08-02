import "./login-signup.css";
import { useEffect } from "react";
import Navbar from "../Components/navbar/navbar";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Spark";
  }, []);

  return (
    <>
      <Navbar showNavbar={false} scrollToSection={() => {}} />

      {/* Login Form */}
      <div className="loginSignupParent">
        <div className="formContainer">
          <h1 className="pageHeading text-center">Log in</h1>
          <div>
            <form>
              <div className="fieldsCont my-5">
                <label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="inputs"
                  placeholder="Enter email"
                />
              </div>
              <div className="fieldsCont my-5">
                <label htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  className="inputs"
                  placeholder="Enter password"
                />
              </div>

              <div className="my-2 flex justify-center">
                <span className="text-gray-500 ">Don't have an account? </span>
                <button className="underline" type="button">
                  <Link to="/signup">Create One</Link>
                </button>
              </div>
              <div className="my-2 flex justify-center">
                <button className="underline" type="button">
                  <Link to="/otp-verification">Forgot Password</Link>
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="formButton flex justify-center"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
