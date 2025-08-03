import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations"; // update path if needed
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/navbar/navbar";
import "./login-signup.css";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Spark";
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await loginUser({
        variables: {
          data: {
            email: formData.email,
            password: formData.password,
          },
        },
      });

      const token = res.data.loginUser;
      // console.log("Login successful, token:", token);

      // optionally: save token to localStorage or cookie
      localStorage.setItem("token", token);

      alert("Login successful!");
      navigate("/dashboard"); // or wherever you want

    } catch (err: any) {
      console.error("Login failed:", err.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <Navbar showNavbar={false} scrollToSection={() => {}} />

      <div className="loginSignupParent">
        <div className="formContainer">
          <h1 className="pageHeading text-center">Log in</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="fieldsCont my-5">
                <label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="inputs"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="fieldsCont my-5">
                <label htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="inputs"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
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
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
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
