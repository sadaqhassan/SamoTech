import React, { useState } from "react";
import { Check } from "lucide-react";
import Nav from "../../Components/Nav";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      monthly: 10,
      yearly: 100,
      users: "Up to 100 Students",
      features: [
        "Student Management",
        "Attendance System",
        "Basic Reports",
        "Parent Dashboard",
        "Email Support",
      ],
    },
    {
      name: "Standard",
      monthly: 25,
      yearly: 250,
      users: "Up to 500 Students",
      features: [
        "All Basic Features",
        "Online Exams",
        "Teacher Dashboard",
        "Result Management",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Premium",
      monthly: 50,
      yearly: 500,
      users: "Unlimited Students",
      features: [
        "All Standard Features",
        "AI Analytics",
        "Finance Management",
        "SMS Notifications",
        "24/7 Support",
      ],
    },
  ];

  return (
    
    <div className="min-h-screen bg-gray-50 py-20 px-10">
        <div className="bg-gray-900 px-2 w-full ">
            <Nav/>
        </div>
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="text-purple-600 font-semibold text-2xl">Pricing</p>

          <h1 className="text-5xl font-bold mt-3">
            School Management System Pricing
          </h1>

          <p className="text-gray-500 mt-4">
            Flexible pricing plans for schools and universities.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-white shadow-md rounded-full p-1 flex">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  billing === "monthly"
                    ? "bg-purple-600 text-white"
                    : "text-gray-600"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  billing === "yearly"
                    ? "bg-purple-600 text-white"
                    : "text-gray-600"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-lg p-8 border relative ${
                plan.popular
                  ? "border-purple-600 scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <h2 className="text-2xl font-bold">{plan.name}</h2>

              <div className="mt-6">
                <span className="text-5xl font-bold">
                  $
                  {billing === "monthly"
                    ? plan.monthly
                    : plan.yearly}
                </span>

                <span className="text-gray-500 text-lg">
                  /{billing === "monthly" ? "month" : "year"}
                </span>
              </div>

              <p className="text-gray-500 mt-3">{plan.users}</p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <Check className="text-purple-600 w-5 h-5" />

                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full mt-10 bg-purple-600 hover:bg-purple-700 transition text-white py-3 rounded-xl font-semibold">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;