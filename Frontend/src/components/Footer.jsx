import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const navigate = [
    { name: "Home", path: "/" },
    { name: "Create Note", path: "/create-note" },
  ];
  return (
    <footer className="bg-[#000022] text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white">QuickNote</h2>
            <p className="text-gray-400 text-sm mt-2">
              Capture your thoughts. Organize your ideas.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {navigate.map((item) => (
              <Link
                to={item.path}
                className="hover:text-[#ff4848] transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} QuickNote. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
