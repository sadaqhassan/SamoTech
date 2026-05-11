import React from "react";
import Auth from "./Auth";

const Landing = () => {
  return (
    <div className="min-h-screen flex">
      
      {/* Left Side */}
      <div className="w-1/2 bg-from-cyan-800 text-black flex flex-col justify-center px-16 relative overflow-hidden">
        
        {/* Background Blur */}
        <div className="absolute w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl top-10 -left-20"></div>
        <div className="absolute w-72 h-72 bg-blue-500/30 rounded-full blur-3xl bottom-10 right-0"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold tracking-wide">
          Samo<span className="text-cyan-400">Tech</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-900 max-w-xl">
            Waxaan sameynaa <span className="font-semibold text-cyan-300">UI/UX</span> 
            iyo Frontend casri ah oo professional ah.
            Waxaan dhisnaa websites fast ah, responsive ah,
            kana shaqeeya dhammaan devices-ka.
          </p>

          <p className="mt-4 text-gray-900 max-w-lg">
            Ku dhis brand-kaaga adigoo isticmaalaya
            <span className="text-cyan-300 font-semibold"> React</span> iyo
            <span className="text-cyan-300 font-semibold"> Next.js</span> casri ah.
          </p>

          <button className="mt-8 px-6 py-3 bg-white text-blue-900 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-gray-800 flex items-center justify-center">
        <div className="w-full max-w-md bg-gray-700 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/10">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default Landing;