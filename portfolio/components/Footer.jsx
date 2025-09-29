import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 border-t border-gray-200 relative z-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Made with ❤️ and ☕ */}
        <p className="text-sm text-center sm:text-left">
          Made with <span className="text-red-500">❤️</span> and <span>☕</span> in India
        </p>

        {/* Copyright */}
        <p className="text-xs text-center sm:text-left text-gray-500">
          © {new Date().getFullYear()} Kundan Kumar Dubey. All rights reserved.
        </p>

        {/* Social Links */}
        <ul className="flex gap-6 text-sm">
          <li>
            <a
              href="https://github.com/kundan-kumar07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kundan-kumar-dubey-3121b1229/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
