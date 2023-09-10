import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">VG</div>
        <nav className="space-x-4">
          <a href="/" className="hover:text-blue-200">
            Home
          </a>
          <a href="/about" className="hover:text-blue-200">
            About
          </a>
          <a href="/contact" className="hover:text-blue-200">
            Contact
          </a>
          <a href="/login" className="hover:text-blue-200">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
