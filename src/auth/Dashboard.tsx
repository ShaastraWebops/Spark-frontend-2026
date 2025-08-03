import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/navbar/navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ME);
//   console.log(data);
  useEffect(() => {
    document.title = "Dashboard | Spark";

    if (!loading && !data?.getMe) {
      navigate("/login");
    }
  }, [loading, data, navigate]);

//   console.log("Dashboard loaded");

  const handleLogout = () => {
    // localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        Couldn’t load profile. Try logging in again.
      </p>
    );

  const user = data?.getMe;

  return (
    <div className="loginSignupParent flex justify-center items-start py-12 px-4 min-h-screen bg-white">
      <Navbar showNavbar={true} scrollToSection={() => {}} />
      <div className="formContainer w-full max-w-2xl">
        <h1 className="pageHeading text-center mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 text-lg">
          <div>
            <strong>First Name:</strong> {user.firstName}
          </div>
          <div>
            <strong>Last Name:</strong> {user.lastName}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>Mobile:</strong> {user.mobile}
          </div>
          <div>
            <strong>Class:</strong> {user.class}
          </div>
          <div>
            <strong>School:</strong> {user.school}
          </div>
          <div>
            <strong>City:</strong> {user.city}
          </div>
          <div>
            <strong>Spark City:</strong> {user.sparkCity}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleLogout}
            className="formButton px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
