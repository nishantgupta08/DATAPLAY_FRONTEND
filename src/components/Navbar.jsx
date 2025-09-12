import React from "react";

export default function Navbar() {
return (
<header className="sticky top-0 z-40 bg-white border-b border-gray-200">
<div className="container-px flex h-16 items-center justify-between">
<div className="flex items-center gap-8">
<a href="#" className="flex items-center gap-3 font-bold text-xl text-gray-900">
<div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
<span className="text-white font-bold text-lg">D</span>
</div>
DATAPLAY
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
<a href="#" className="hover:text-blue-600 transition">Home</a>
<a href="#about" className="hover:text-blue-600 transition">About us</a>
<a href="#courses" className="hover:text-blue-600 transition">Courses</a>
<a href="#contact" className="hover:text-blue-600 transition">Contact Us</a>
<a href="#corporate" className="hover:text-blue-600 transition">Corporate Training</a>
</nav>
</div>
<button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
Log In / Sign Up
</button>
</div>
</header>
);
}
