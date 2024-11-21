import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
     <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Flash Sale</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/products" className="hover:underline hover:text-gray-300">Products</a>
          </li>
          <li>
            <a href="/flash-sale" className="hover:underline hover:text-gray-300">Flash Sale</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
