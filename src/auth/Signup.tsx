import { useState } from "react";
import './signup.css';

type Errors = {
  firstName?: string;
  lastName?: string;
  class?: string;
  school?: string;
  city?: string;
  sparkCity?: string;
  pinCode?: string;
  schoolAddress?: string;
  email?: string;
  mobile?: string;
  password?: string;
  confirmPassword?: string;
};

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    class: "",
    school: "",
    city: "",
    sparkCity: "",
    pinCode: "",
    schoolAddress: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

  const [errors, setErrors] = useState<Errors>({});

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
  };

  const validateFields = () => {
    const newErrors: Errors = {};

    const firstNamePattern = /^[a-zA-Z\s]+$/;
    const mobilePattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pincodePattern = /^\d{6}$/;

    if (!formData.firstName) newErrors.firstName = "First name is required";
    else if (!firstNamePattern.test(formData.firstName))
      newErrors.firstName = "First name must contain only letters and spaces";

    if (!formData.lastName) newErrors.lastName = "Last name is required";
    else if (!firstNamePattern.test(formData.lastName))
      newErrors.lastName = "Last name must contain only letters and spaces";

    if (!formData.class) newErrors.class = "Class is required";

    if (!formData.school) newErrors.school = "School is required";
    else if (!firstNamePattern.test(formData.school))
      newErrors.school = "School name must contain only letters and spaces";

    if (!formData.city) newErrors.city = "City is required";
    else if (!firstNamePattern.test(formData.city))
      newErrors.city = "City name must contain only letters and spaces";

    if (!formData.sparkCity) newErrors.sparkCity = "Spark City is required";

    if (!formData.pinCode) newErrors.pinCode = "Pin code is required";
    else if (!pincodePattern.test(formData.pinCode))
      newErrors.pinCode = "Pin code should contain only digits";

    if (!formData.schoolAddress)
      newErrors.schoolAddress = "School address is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email))
      newErrors.email = "Email must be a valid email address";

    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!mobilePattern.test(formData.mobile))
      newErrors.mobile = "Mobile number should be 10 digits";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password should be at least 8 characters long";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasTriedSubmit(true);
    const newErrors = validateFields();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
    }
  };

  return (
    <div className="bg-blue-950 w-screen h-full font-serif text-white flex flex-col items-center">
      <form className="w-2/5" onSubmit={handleSubmit}>
        <h2 className="text-center font-bold text-2xl mt-8">Signup</h2>
        <div className="flex flex-row bg-blue-800 m-8 p-2 w-[650px] rounded-3xl">
          <div>
            <label className="label" htmlFor="firstName">
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && hasTriedSubmit && (
                <span className="errors-text">{errors.firstName}</span>
              )}
            </label>

            <label className="label" htmlFor="lastName">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && hasTriedSubmit && (
                <span className="errors-text">{errors.lastName}</span>
              )}
            </label>

            <label className="label" htmlFor="class">
              Class:
              <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                required
              >
                <option className="none" value=""></option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              {errors.class && hasTriedSubmit && (
                <span className="errors-text">{errors.class}</span>
              )}
            </label>

            <label className="label" htmlFor="school">
              School:
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                required
              />
              {errors.school && hasTriedSubmit && (
                <span className="errors-text">{errors.school}</span>
              )}
            </label>

            <label className="label" htmlFor="city">
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
              {errors.city && hasTriedSubmit && (
                <span className="errors-text">{errors.city}</span>
              )}
            </label>
            <label className="label" htmlFor="sparkCity">
              Spark City:
              <select
                name="sparkCity"
                value={formData.sparkCity}
                onChange={handleChange}
                required
              >
                <option className="none" value=""></option>
                <option value="Alappuzha">Alappuzha</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Erode">Erode</option>
                <option value="Guntur">Guntur</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kanchipuram">Kanchipuram</option>
                <option value="Karur">Karur</option>
                <option value="Kochi">Kochi</option>
                <option value="Madurai">Madurai</option>
                <option value="Nellore">Nellore</option>
                <option value="Pondicherry">Pondicherry</option>
                <option value="Salem">Salem</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tirupati">Tirupati</option>
                <option value="Trivandrum">Trivandrum</option>
                <option value="Vellore">Vellore</option>
              </select>
              {errors.sparkCity && hasTriedSubmit && (
                <span className="errors-text">{errors.sparkCity}</span>
              )}
            </label>
          </div>
          <div>
            <label className="label" htmlFor="pinCode">
              Pin Code:
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                required
              />
              {errors.pinCode && hasTriedSubmit && (
                <span className="errors-text">{errors.pinCode}</span>
              )}
            </label>

            <label className="label" htmlFor="schoolAddress">
              School Address:
              <input
                type="text"
                name="schoolAddress"
                value={formData.schoolAddress}
                onChange={handleChange}
              />
              {errors.schoolAddress && hasTriedSubmit && (
                <span className="errors-text">{errors.schoolAddress}</span>
              )}
            </label>

            <label className="label" htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && hasTriedSubmit && (
                <span className="errors-text">{errors.email}</span>
              )}
            </label>

            <label className="label" htmlFor="mobile">
              Mobile Number:
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {errors.mobile && hasTriedSubmit && (
                <span className="errors-text">{errors.mobile}</span>
              )}
            </label>

            <label className="label" htmlFor="password">
              Create Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && hasTriedSubmit && (
                <span className="errors-text">{errors.password}</span>
              )}
            </label>

            <label className="label" htmlFor="confirmPassword">
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && hasTriedSubmit && (
                <span className="errors-text">{errors.confirmPassword}</span>
              )}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-950 my-5 h-10 rounded-md text-lg font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
