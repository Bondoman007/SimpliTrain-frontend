import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../store/loginInfoSlice"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true);
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
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          emailId: emailRef.current.value,
          password: passwordRef.current.value,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(setUser(response.data.user)); // Save user data to Redux store
      alert("Login successful!");
      navigate("/profile");
    } catch (error) {
      alert("Failed to login");
      console.error(error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <div>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          required
        />
      </div>

      <div>
        <input
          ref={passwordRef}
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
        type="submit"
        className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition duration-200"
      >
        LOGIN
      </button>
    </form>
  );
};

const SignupForm = () => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const phoneRef = useRef("");
  const genderRef = useRef("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          emailId: emailRef.current.value,
          password: passwordRef.current.value,
          phone: phoneRef.current.value,
          gender: genderRef.current.value,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(setUser(response.data.user)); // Save user data to Redux store
      alert("Signup successful!");
    } catch (error) {
      alert("Failed to signup");
      console.error(error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            ref={firstNameRef}
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            required
          />
        </div>
        <div>
          <input
            ref={lastNameRef}
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            required
          />
        </div>
      </div>

      <div>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          required
        />
      </div>

      <div>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          required
        />
      </div>

      <div>
        <input
          ref={phoneRef}
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          required
        />
      </div>

      <div>
        <select
          ref={genderRef}
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
        SIGN UP
      </button>
    </form>
  );
};

export default Login;
