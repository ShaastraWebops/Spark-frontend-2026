import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations"; // update path if needed
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/navbar/navbar";
import "./login-signup.css";
import toast from "react-hot-toast";
import { Mail, Lock, LogIn, AlertCircle } from "lucide-react";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Spark";
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

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
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const { data } = await loginUser({
        variables: {
          data: {
            email: formData.email,
            password: formData.password,
          },
        },
      });

      if (data?.loginUser) {
        const { role } = data.loginUser;
        console.log("Login successful, role:", role);
        

        toast.success("Login successful!");
        setTimeout(() => {
          if (role === "ADMIN") {
            navigate("/admin");
          } else {
            navigate("/dashboard");
          }
        }, 1000);
      }
    } catch (err: any) {
      console.error("Login failed:", err.message);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <Navbar showNavbar={false} scrollToSection={() => {}} />
      <div className="min-h-screen bg-slate-900 flex items-center justify-center py-8">
        <div className="max-w-md w-full bg-white rounded-xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-2">
              <LogIn className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Log in to Spark
            </h1>
            <p className="text-gray-400 text-sm">
              Welcome back! Please sign in to continue.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 pl-8 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.email && hasTriedSubmit
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  autoComplete="email"
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
            {/* Password */}
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                <Lock className="w-3 h-3 text-blue-500" />
                Password
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 pl-8 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.password && hasTriedSubmit
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  autoComplete="current-password"
                />
                <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              {errors.password && hasTriedSubmit && (
                <div className="flex items-center gap-1 text-red-500 text-xs">
                  <AlertCircle className="w-3 h-3" />
                  {errors.password}
                </div>
              )}
            </div>
            {/* Forgot password */}
            <div className="flex justify-end">
              <Link
                to="/otp-verification"
                className="text-xs text-blue-600 hover:text-blue-700 underline"
              >
                Forgot Password?
              </Link>
            </div>
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
                    Logging in...
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            {/* Signup link */}
            <div className="text-center pt-2">
              <span className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                  Create One
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
