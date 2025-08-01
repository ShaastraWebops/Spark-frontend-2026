import { useState, useEffect } from "react";
import Navbar from '../Components/navbar/navbar'
import Footer from '../Components/footer/footer';
import './login-signup.css';

// Error types
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

// Signup component
const Signup = () => {

  useEffect(() => {
    document.title = "Signup | Spark";
  }, []);

  const [formData, setFormData] = useState({
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

  // Validation of each field and setting errors accordingly
  const validateFields = () => {
    const newErrors: Errors = {};

    const firstNamePattern = /^[a-zA-Z\s]+$/;
    const mobilePattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const pincodePattern = /^\d{6}$/;

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

    if (!formData.rollNumber) newErrors.rollNumber = "Roll number is required";

    if (!formData.heardSpark) newErrors.heardSpark = "Please answer this question";

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

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasTriedSubmit(true);
    const newErrors = validateFields();
    setErrors(newErrors);
    console.log(newErrors, formData);
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
    }
  };

  return (
    <>
      <Navbar showNavbar={true} scrollToSection={() => { }} />

      <div className="loginSignupParent mt-10">
        <div className="formContainer">
          <h2 className="pageHeading">Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10">
              <div className="fieldsCont">
                <label htmlFor="firstName">
                  First Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="inputs"
                />
                {errors.firstName && hasTriedSubmit && (
                  <span className="errors-text">{errors.firstName}</span>
                )}
              </div>

              <div className="fieldsCont">
                <label htmlFor="lastName">
                  Last Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="inputs"
                />
                {errors.lastName && hasTriedSubmit && (
                  <span className="errors-text">{errors.lastName}</span>
                )}
              </div>

              <div className="fieldsCont">
                <label htmlFor="class">
                  Class <span className='text-red-500'>*</span>
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  className="inputs"
                >
                  <option value="" selected disabled hidden>Select your Class</option>
                  <option className="none" value=""></option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                {errors.class && hasTriedSubmit && (
                  <span className="errors-text">{errors.class}</span>
                )}
              </div>

              <div className="fieldsCont">
                <label htmlFor="rollNumber">
                  Roll Number <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="rollNumber"
                  placeholder="Enter your roll number"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  required
                  className="inputs"
                />
                {errors.rollNumber && hasTriedSubmit && (
                  <span className="errors-text">{errors.rollNumber}</span>
                )}
              </div>

              <div className="fieldsCont">
                <label htmlFor="school">
                  School <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="school"
                  placeholder="Enter your school name"
                  value={formData.school}
                  onChange={handleChange}
                  required
                  className="inputs"
                />
                {errors.school && hasTriedSubmit && (
                  <span className="errors-text">{errors.school}</span>
                )}
              </div>

              <div className="fieldsCont">
                <label htmlFor="city">
                  City <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="inputs"
                />
                {errors.city && hasTriedSubmit && (
                  <span className="errors-text">{errors.city}</span>
                )}
              </div>

              <div className="fieldsCont">
                <label htmlFor="sparkCity">
                  Spark City <span className='text-red-500'>*</span>
                </label>
                <select
                  name="sparkCity"
                  value={formData.sparkCity}
                  onChange={handleChange}
                  required
                  className="inputs"
                >
                  <option value="" selected disabled hidden>Select Spark City</option>
                  <option className="none" value=""></option>
                  <option value="Alappuzha">Alappuzha</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Guntur">Guntur</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Kanchipuram">Kanchipuram</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Mangalore">Mangalore</option>
                  <option value="Mysore">Mysore</option>
                  <option value="Nellore">Nellore</option>
                  <option value="Pondicherry">Pondicherry</option>
                  <option value="Salem">Salem</option>
                  <option value="Thanjavur">Thanjavur</option>
                  <option value="Tirunelveli">Tirunelveli</option>
                  <option value="Tirupati">Tirupati</option>
                  <option value="Tiruppur">Tiruppur</option>
                  <option value="Trivandrum">Trivandrum</option>
                  <option value="Vellore">Vellore</option>
                  <option value="Warangal">Warangal</option>
                </select>
                {errors.sparkCity && hasTriedSubmit && (
                  <span className="errors-text">{errors.sparkCity}</span>
                )}
              </div>

              <div className="fieldsCont">
                <label htmlFor="email">
                  Email <span className='text-red-500'>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="inputs"
                />
                {errors.email && hasTriedSubmit && (
                  <span className="errors-text">{errors.email}</span>
                )}
              </div>

              <div className="fieldsCont">
                <label htmlFor="mobile">
                  Mobile Number <span className='text-red-500'>*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="inputs"
                />
                {errors.mobile && hasTriedSubmit && (
                  <span className="errors-text">{errors.mobile}</span>
                )}
              </div>

              <div className="fieldsCont">
                <label htmlFor="heardSpark">
                  Have you heard of <br />Spark or Shaastra before? <span className='text-red-500'>*</span>
                </label>
                <div className="flex items-center justify-evenly">
                  <div className="flex gap-2">
                    <input type="radio" name="heardSpark" id="yes" value={"yes"} onChange={handleChange} className="hover:cursor-pointer" />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="heardSpark" id="no" value={"no"} onChange={handleChange} className="hover:cursor-pointer" />
                    <label htmlFor="no">No</label>
                  </div>
                </div>
                {errors.heardSpark && hasTriedSubmit && (
                  <span className="errors-text">{errors.heardSpark}</span>
                )}
              </div>


              <div className="fieldsCont">
                <label htmlFor="password">
                  Create Password <span className='text-red-500'>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="inputs"
                />
                {errors.password && hasTriedSubmit && (
                  <span className="errors-text">{errors.password}</span>
                )}
              </div>

              <div className="fieldsCont">
                <label htmlFor="confirmPassword">
                  Confirm Password <span className='text-red-500'>*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="inputs"
                />
                {errors.confirmPassword && hasTriedSubmit && (
                  <span className="errors-text">{errors.confirmPassword}</span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="formButton"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>

      {/* Footer component */}
      <footer className="w-full flex items-center justify-center h-auto  bg-gray-800 text-white">
        <Footer />
      </footer>
    </>
  );
};

export default Signup;
