import { FaEye } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="h-auto w-90 rounded-3xl border-black p-6 flex flex-col shadow-2xl shadow-black bg-gray-700">
        <div className="w-full">
          <h1 className="text-2xl text-center font-bold mb-4 text-white">Login</h1>
          <hr className="w-10 mt-2 mx-auto border-t-2 border-black" />

          <form className="flex flex-col items-center justify-center mt-5 text-xl space-y-4">
            <div className="w-full">
              <label className="text-white">Username</label>
              <br />
              <input type="text" placeholder="Enter your Name" required className="w-full p-3 outline-none rounded-md mt-1" />
            </div>

            <div className="w-full">
              <label className="text-white">Email</label>
              <input type="email" name="email" id="email" placeholder="user@gmail.com" required className="w-full p-3 outline-none rounded-md mt-1" />
            </div>

            <div className="w-full relative">
              <label className="text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter Your Password" required className="w-full p-3 outline-none rounded-md mt-1 pr-10" />
              <FaEye className="absolute right-3 top-1/2  text-gray-500 cursor-pointer" />
            </div>
          </form>

          <h2 className="text-white mt-4 text-center">You donot have an account? <span className="underline cursor-pointer text-white">Register</span></h2>
        
        <div>
            <button className="">Login</button>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
