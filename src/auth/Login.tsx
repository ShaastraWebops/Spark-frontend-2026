import './login.css';
const Login = () => {
  return (
    <div className="bg-blue-900 w-screen font-serif h-screen flex items-center justify-center flex-col">
      <div className="bg-blue-600 animate w-1/2 min-w-80 p-10 text-center text-white rounded-lg">
        <h1 className=" text-center text-3xl p-2 font-bold font-serif">
          Login to your account
        </h1>

        <div className="mt-8">
          <form>
            <div className="flex flex-col text-start text-xl">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                className="h-12 rounded-2xl p-4 my-4 text-black outline-none"
                placeholder="Enter email"
              />
            </div>
            <div className="flex flex-col text-start text-xl">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                className="h-12 rounded-2xl p-4 my-4 text-black outline-none"
                placeholder="Enter password"
              />
            </div>
            <div>
              <a>
                <button className="underline " type="button">
                  Forgot Password
                </button>
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-950 px-6 hover:scale-105 py-2 my-4 rounded-lg drop-shadow-2xl text-2xl"
            >
              Login
            </button>
          </form>
          <p>
            New here? <a className="underline text-lg">Create Account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;