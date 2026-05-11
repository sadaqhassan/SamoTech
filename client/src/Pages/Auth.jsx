import React, { useState } from "react";

const Auth = () => {
  const [state, setState] = useState("login");
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full">
      <form className="flex flex-col space-y-5">
        
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            {state === "login" ? "Welcome Back " : "Create Account "}
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            {state === "login"
              ? "Login to continue to SamoTech"
              : "Register your account to get started"}
          </p>
        </div>

        {/* Name */}
        {state === "register" && (
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={inputData.name}
            onChange={handleChange}
            className="bg-white/10 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-cyan-400 transition"
          />
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={inputData.email}
          onChange={handleChange}
          className="bg-white/10 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-cyan-400 transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={inputData.password}
          onChange={handleChange}
          className="bg-white/10 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-cyan-400 transition"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          {state === "login" ? "Login" : "Register"}
        </button>

        {/* Switch */}
        <p className="text-gray-400 text-sm text-center">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() =>
              setState(state === "login" ? "register" : "login")
            }
            className="text-cyan-400 cursor-pointer ml-2 hover:underline"
          >
            {state === "login" ? "Register" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;