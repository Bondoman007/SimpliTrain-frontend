import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmail } from "../store/loginInfoSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-4 py-2 mr-2 ${
            isLogin ? "font-bold border-b-2 border-gray-800" : "text-gray-500"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-4 py-2 ${
            !isLogin ? "font-bold border-b-2 border-gray-800" : "text-gray-500"
          }`}
        >
          Sign Up
        </button>

        <div className="mt-6">{isLogin ? <LoginForm /> : <SignupForm />}</div>

        <div className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={toggleForm}
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={toggleForm}
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const email = useRef("");
  const dispatch = useDispatch();
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <div>
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          required
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          required
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-gray-800 focus:ring-0"
          />
          <span className="ml-2">Remember me</span>
        </label>
        <a href="#" className="text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>

      <button
        onClick={dispatch(addEmail())}
        type="submit"
        className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition duration-200"
      >
        LOGIN
      </button>
    </form>
  );
};

const SignupForm = () => {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            required
          />
        </div>
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          required
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          required
        />
      </div>

      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          required
        />
      </div>

      <div>
        <select
          className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-gray-500"
          required
        >
          <option value="" disabled selected>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition duration-200"
      >
        ADD
      </button>
    </form>
  );
};

export default Login;
