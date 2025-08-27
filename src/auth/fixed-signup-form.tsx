import { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  MapPin,
  School,
  Lock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../graphql/mutations"; // update path if needed

type FormData = {
  firstName: string;
  lastName: string;
  class: string;
  rollNumber: string;
  school: string;
  city: string;
  sparkCity: string;
  email: string;
  mobile: string;
  heardSpark: string;
  password: string;
  confirmPassword: string;
};

type Errors = {
  firstName?: string;
  lastName?: string;
  class?: string;
  rollNumber?: string;
  school?: string;
  city?: string;
  sparkCity?: string;
  email?: string;
  mobile?: string;
  heardSpark?: string;
  password?: string;
  confirmPassword?: string;
};

// Move InputField component outside of the main component
const InputField = ({
  icon: Icon,
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  children,
  value,
  onChange,
  error,
  hasTriedSubmit,
}: {
  icon?: any;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  error?: string;
  hasTriedSubmit?: boolean;
}) => (
  <div className="space-y-1">
    <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
      {Icon && <Icon className="w-3 h-3 text-blue-500" />}
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    {children || (
      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
            error && hasTriedSubmit
              ? "border-red-500 bg-red-50"
              : "border-gray-300 hover:border-gray-400"
          } ${Icon ? "pl-8" : ""}`}
        />
        {Icon && (
          <Icon className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        )}
      </div>
    )}
    {error && hasTriedSubmit && (
      <div className="flex items-center gap-1 text-red-500 text-xs">
        <AlertCircle className="w-3 h-3" />
        {error}
      </div>
    )}
  </div>
);

const Signup = () => {
  useEffect(() => {
    document.title = "Signup | Spark";
  }, []);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    class: "",
    rollNumber: "",
    school: "",
    city: "",
    sparkCity: "",
    email: "",
    mobile: "",
    heardSpark: "",
    password: "",
    confirmPassword: "",
  });

  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [registerUser, _] = useMutation(REGISTER_USER, {
    context: { fetchOptions: { credentials: "include" } }, // ✅ include cookie
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateFields = () => {
    const newErrors: Errors = {};
    const namePattern = /^[a-zA-Z\s]+$/;
    const mobilePattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName) newErrors.firstName = "First name is required";
    else if (!namePattern.test(formData.firstName))
      newErrors.firstName = "First name must contain only letters and spaces";

    if (!formData.lastName) newErrors.lastName = "Last name is required";
    else if (!namePattern.test(formData.lastName))
      newErrors.lastName = "Last name must contain only letters and spaces";

    if (!formData.class) newErrors.class = "Class is required";
    if (!formData.rollNumber) newErrors.rollNumber = "Roll number is required";

    if (!formData.school) newErrors.school = "School is required";

    if (!formData.city) newErrors.city = "City is required";

    if (!formData.sparkCity) newErrors.sparkCity = "Spark City is required";

    if (!formData.heardSpark)
      newErrors.heardSpark = "Please answer this question";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!mobilePattern.test(formData.mobile))
      newErrors.mobile = "Mobile number should be 10 digits";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password should be at least 8 characters";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const getPasswordStrength = (password: string) => {
    if (password.length < 4)
      return { strength: 0, text: "Too weak", color: "bg-red-500" };
    if (password.length < 6)
      return { strength: 1, text: "Weak", color: "bg-orange-500" };
    if (password.length < 8)
      return { strength: 2, text: "Fair", color: "bg-yellow-500" };
    if (
      password.length >= 8 &&
      /[A-Za-z]/.test(password) &&
      /\d/.test(password)
    )
      return { strength: 3, text: "Strong", color: "bg-green-500" };
    return { strength: 2, text: "Fair", color: "bg-yellow-500" };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasTriedSubmit(true);
    const newErrors = validateFields();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const {
          firstName,
          lastName,
          class: _class,
          rollNumber,
          school,
          city,
          sparkCity,
          email,
          mobile,
          heardSpark,
          password,
        } = formData;

        await registerUser({
          variables: {
            data: {
              firstName,
              lastName,
              class: _class,
              rollNumber,
              school,
              city,
              sparkCity,
              email,
              mobile,
              heardSpark,
              password,
            },
          },
        });

        toast.success("Account created successfully! Redirecting...");
        navigate("/dashboard");

      } catch (err: any) {
        console.error("Signup error:", err);
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  const sparkCities = [
    "Alappuzha",
    "Bangalore",
    "Chennai",
    "Coimbatore",
    "Guntur",
    "Hyderabad",
    "Kanchipuram",
    "Kochi",
    "Madurai",
    "Mangalore",
    "Mysore",
    "Nellore",
    "Pondicherry",
    "Salem",
    "Thanjavur",
    "Tirunelveli",
    "Tirupati",
    "Tiruppur",
    "Trivandrum",
    "Vellore",
    "Warangal",
  ];

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-8">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Form */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-2">
              <User className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Create Your Account
            </h1>
            <p className="text-gray-400 text-sm">
              Join Spark and unlock your potential
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Personal Information */}
              <InputField
                icon={User}
                label="First Name"
                name="firstName"
                placeholder="John"
                required
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                hasTriedSubmit={hasTriedSubmit}
              />

              <InputField
                icon={User}
                label="Last Name"
                name="lastName"
                placeholder="Doe"
                required
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                hasTriedSubmit={hasTriedSubmit}
              />

              <InputField
                icon={School}
                label="Class"
                name="class"
                required
                error={errors.class}
                hasTriedSubmit={hasTriedSubmit}
              >
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.class && hasTriedSubmit
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <option value="" disabled>
                    Select your Class
                  </option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </InputField>

              <InputField
                label="Roll Number"
                name="rollNumber"
                placeholder="Enter your roll number"
                required
                value={formData.rollNumber}
                onChange={handleChange}
                error={errors.rollNumber}
                hasTriedSubmit={hasTriedSubmit}
              />

              <InputField
                icon={School}
                label="School"
                name="school"
                placeholder="Enter your school name"
                required
                value={formData.school}
                onChange={handleChange}
                error={errors.school}
                hasTriedSubmit={hasTriedSubmit}
              />

              <InputField
                icon={MapPin}
                label="City"
                name="city"
                placeholder="Enter your city"
                required
                value={formData.city}
                onChange={handleChange}
                error={errors.city}
                hasTriedSubmit={hasTriedSubmit}
              />

              <InputField
                icon={MapPin}
                label="Spark City"
                name="sparkCity"
                required
                error={errors.sparkCity}
                hasTriedSubmit={hasTriedSubmit}
              >
                <select
                  name="sparkCity"
                  value={formData.sparkCity}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.sparkCity && hasTriedSubmit
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <option value="" disabled>
                    Select Spark City
                  </option>
                  {sparkCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </InputField>

              <InputField
                icon={Mail}
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                hasTriedSubmit={hasTriedSubmit}
              />

              <InputField
                icon={Phone}
                label="Mobile Number"
                name="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                required
                value={formData.mobile}
                onChange={handleChange}
                error={errors.mobile}
                hasTriedSubmit={hasTriedSubmit}
              />

              {/* Have you heard of Spark */}
              <div className="space-y-1 md:col-span-3">
                <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                  Have you heard of Spark or Shaastra before?
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-6 p-2 bg-gray-50 rounded-md">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="heardSpark"
                      value="yes"
                      checked={formData.heardSpark === "yes"}
                      onChange={handleChange}
                      className="w-3 h-3 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-medium">Yes</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="heardSpark"
                      value="no"
                      checked={formData.heardSpark === "no"}
                      onChange={handleChange}
                      className="w-3 h-3 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-medium">No</span>
                  </label>
                </div>
                {errors.heardSpark && hasTriedSubmit && (
                  <div className="flex items-center gap-1 text-red-500 text-xs">
                    <AlertCircle className="w-3 h-3" />
                    {errors.heardSpark}
                  </div>
                )}
              </div>

              {/* Password Fields */}
              <div className="space-y-1">
                <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                  <Lock className="w-3 h-3 text-blue-500" />
                  Create Password
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 pl-8 pr-8 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                      errors.password && hasTriedSubmit
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  />
                  <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {formData.password && (
                  <div className="space-y-1">
                    <div className="flex gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-0.5 w-full rounded ${
                            i <= passwordStrength.strength
                              ? passwordStrength.color
                              : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <p
                      className={`text-xs ${passwordStrength.color.replace(
                        "bg-",
                        "text-"
                      )}`}
                    >
                      {passwordStrength.text}
                    </p>
                  </div>
                )}
                {errors.password && hasTriedSubmit && (
                  <div className="flex items-center gap-1 text-red-500 text-xs">
                    <AlertCircle className="w-3 h-3" />
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                  <Lock className="w-3 h-3 text-blue-500" />
                  Confirm Password
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 pl-8 pr-8 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                      errors.confirmPassword && hasTriedSubmit
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  />
                  <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword &&
                  formData.password === formData.confirmPassword && (
                    <div className="flex items-center gap-1 text-green-500 text-xs">
                      <CheckCircle2 className="w-3 h-3" />
                      Passwords match
                    </div>
                  )}
                {errors.confirmPassword && hasTriedSubmit && (
                  <div className="flex items-center gap-1 text-red-500 text-xs">
                    <AlertCircle className="w-3 h-3" />
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 flex justify-center">
              <button
                type="button"
                disabled={loading}
                onClick={handleSubmit}
                className={`w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-300 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="text-center pt-4 border-t">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Log in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
