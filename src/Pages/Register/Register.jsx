import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="bg-white lg:w-4/12 md:6/12 pt-20 w-10/12 m-auto  ">
        <div className="py-8 px-8 rounded-xl shadow-2xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Sign Up</h1>
          <form action="" className="mt-6">
            <div className="my-5 text-sm">
              <label htmlFor="username" className="block text-black">
                Username
              </label>
              <input
                type="text"
                autofocus=""
                id="username"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Username"
              />
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="password" className="block text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
              <div className="flex justify-end mt-2 text-xs text-gray-600">
                <p>Show Password</p>
              </div>
            </div>
            <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
              Sign Up
            </button>
          </form>
          <div className="flex md:justify-between justify-center items-center mt-10">
            <div
              style={{ height: 1 }}
              className="bg-gray-300 md:block hidden w-4/12"
            />
            <p className="md:mx-2 text-sm font-light text-gray-400">
              {" "}
              Login With Social{" "}
            </p>
            <div
              style={{ height: 1 }}
              className="bg-gray-300 md:block hidden w-4/12"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-2 mt-7">
            <div>
              <button className="text-center w-full text-white bg-orange-700 p-3 duration-300 rounded-sm hover:bg-blue-700">
                Google
              </button>
            </div>
            <div>
              <button className="text-center w-full text-white bg-slate-600 p-3 duration-300 rounded-sm hover:bg-blue-500">
                GitHub
              </button>
            </div>
          </div>
          <p className="mt-12 text-xs text-center font-light text-gray-400">
            Don't have an account?
            <Link to="/register" className="text-black font-medium">
              Create One
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;