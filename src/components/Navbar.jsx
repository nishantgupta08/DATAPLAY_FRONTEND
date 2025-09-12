import React from "react";

export default function Navbar() {
return (
<header className="sticky top-0 z-40 bg-blue-900">
<div className="container-px flex h-16 items-center justify-between">
<div className="flex items-center gap-8">
<a href="#" className="flex items-center gap-3 font-bold text-xl">
<div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
<span className="text-blue-900 font-bold text-lg">DP</span>
</div>
<span className="text-red-500">DATA</span><span className="text-white">PLAY</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a href="#" className="text-red-500 hover:text-red-400 transition">Home</a>
<a href="#about" className="text-white hover:text-gray-300 transition">About us</a>
<a href="#courses" className="text-white hover:text-gray-300 transition">Courses</a>
<a href="#contact" className="text-white hover:text-gray-300 transition">Contact Us</a>
<a href="#corporate" className="text-white hover:text-gray-300 transition">Corporate Training</a>
</nav>
</div>
<button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
Log In / Sign Up
</button>
</div>
</header>
);
}
