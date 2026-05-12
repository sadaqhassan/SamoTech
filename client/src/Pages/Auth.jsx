import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext";

const Auth = () => {
  const [state, setState] = useState("login");
  const {user,setUser}= useAuth();
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(state === "login") {
      const res = await fetch(`http://localhost:4000/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      const data = await res.json();
      if(data.success){
        toast.success(data.message);
        setUser(data.userData);
      }else{
        return toast.error(data.message);
      }
      console.log(data);
    } else {
      const res = await fetch(`http://localhost:4000/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      const data = await res.json();
      if(data.success){
        toast.success(data.message);
        
      }else{
        return toast.error(data.message);
      }
      console.log(data);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        
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