import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto">
        <div className="flex justify-between space-x-8">
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Product</h4>
            <ul className="list-none">
              <li className="mb-1">
                <span className="text-gray-400">Features</span>
              </li>
              <li className="mb-1">
                <span className="text-gray-400">Integration</span>
              </li>
              <li className="mb-1">
                <span className="text-gray-400">Pricing</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Resources</h4>
            <ul className="list-none">
              <li className="mb-1">
                <span className="text-gray-400">Content Hub</span>
              </li>
              <li className="mb-1">
                <span className="text-gray-400">API documentation</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Company</h4>
            <ul className="list-none">
              <li className="mb-1">
                <span className="text-gray-400">About us</span>
              </li>
              <li className="mb-1">
                <span className="text-gray-400">Contact us</span>
              </li>
              <li className="mb-1">
                <span className="text-gray-400">Partnerships</span>
              </li>
              <li className="mb-1">
                <span className="text-gray-400">Careers</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Legal</h4>
            <ul className="list-none">
              <li className="mb-1">
                <span className="text-gray-400">Terms & Conditions</span>
              </li>
              <li className="mb-1">
                <span className="text-gray-400">Privacy Policy</span>
              </li>
              <li className="mb-1">
                <span className="text-gray-400">Refund policy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6">
        <div className="flex justify-around items-center">
          <p className="mb-2 text-lg">
            Made with <span className="text-red-600">❤️</span> from India for
            the World 🇮🇳
          </p>
          <img
            src="/src/assets/logo.png"
            alt="employia Logo"
            className="h-10 mt-4"
          />
        </div>

        <p className="mb-2 text-center text-sm">
          Copyright &copy; 2024 employia.ltd All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
