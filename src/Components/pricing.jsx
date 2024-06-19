import React, { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="bg-gradient-to-t from-gray-300 to-white text-black min-h-screen">
      <nav className="py-10 px-4">
        <div
          className="max-w-3xl mx-auto px-9 py-3 flex items-center justify-between rounded-3xl shadow-md"
          style={{
            background: "linear-gradient(to right, #d3d3d3, #ffffff)",
          }}
        >
          <div className="flex items-around">
            <img
              src="/src/assets/logo1.png"
              alt="Employia Logo"
              className="h-10"
            />
          </div>
          <div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full">
              Log in
            </button>
          </div>
        </div>
      </nav>
      <div className="py-10">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <h1 className="text-5xl font-extrabold mb-2">
            Pay only for what you need!
          </h1>
          <p className="text-gray-800 mb-10">
            Join dozens of high growth people
          </p>
          <div className="flex justify-center mb-10">
            <div className="inline-flex border-2 border-black rounded-full overflow-hidden">
              <button
                className={`px-12 py-1 font-bold focus:outline-none ${
                  billingCycle === "monthly"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-12 py-1 font-bold focus:outline-none ${
                  billingCycle === "yearly"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>
          <div className="flex justify-around items-start relative space-x-4">
            <div className="border-2 border-purple-600 rounded-xl shadow-purple-lg p-6 bg-white w-96 text-left">
              <div className="bg-purple-600 text-white font-bold rounded-full px-4 py-1 inline-block mb-4">
                Starter
              </div>
              <p className="text-lg mb-4">
                For teams that require collaborative recruitment solutions.
              </p>
              <h2 className="text-4xl font-bold">₹3000</h2>
              <p className="text-gray-600 mb-4">Per user/month</p>
              <ul className="mb-4">
                <li className="flex items-center mb-2">
                  <span className="text-purple-600 mr-2">✔</span> Onboarding
                  support
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-purple-600 mr-2">✔</span> Custom
                  integrations
                </li>
                <li className="flex items-center mb-20">
                  <span className="text-purple-600 mr-2">✔</span> Priority
                  support
                </li>
              </ul>
              <button className="bg-purple-600 text-white font-bold px-6 py-2 rounded-full w-full">
                Start a free trial
              </button>
              <p className="text-gray-500 mt-1">Terms & Conditions Apply</p>
            </div>
            <div className="border-2 border-purple-600 rounded-xl shadow-md p-6 bg-white w-80 mt-10 text-left">
              <div className="bg-purple-600 text-white font-bold rounded-full px-4 py-1 inline-block mb-2">
                Custom
              </div>
              <p className="text-sm">
                For teams that require collaborative recruitment solutions.
              </p>
              <h2 className="text-2xl font-bold">Let’s Talk</h2>
              <p className="text-gray-600 text-xs mb-2">Per user/month</p>
              <ul className="mb-4">
                <li className="flex items-center mb-2">
                  <span className="text-purple-600 text-xs mr-2 mb-1">✔</span>{" "}
                  For family who live together
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-purple-600 text-xs mr-2 mb-1">✔</span>{" "}
                  Block explicit music
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-purple-600 text-xs mr-2 mb-1">✔</span>{" "}
                  Ad-free music listening
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-purple-600 text-xs mr-2 mb-1">✔</span>{" "}
                  Download 10k songs/device on 5 devices
                </li>
              </ul>
              <button className="bg-gray-600 text-white px-3 py-1 rounded-full w-full">
                Talk to sales
              </button>
              <p className="text-gray-500">Terms & Conditions Apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
