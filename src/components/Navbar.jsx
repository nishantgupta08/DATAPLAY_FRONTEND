import React from "react";


export default function Navbar() {
return (
<header className="sticky top-0 z-40 bg-[#241a49] text-white">
<div className="container-px flex h-14 items-center justify-between">
<div className="flex items-center gap-8">
<a href="#" className="flex items-center gap-2 font-bold text-xl">
<img src="https://dummyimage.com/28x28/ffffff/241a49.png&text=DP" alt="logo" className="h-7 w-7 rounded" />
DATAPLAY
</a>
<nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
<a href="#" className="hover:opacity-100">Home</a>
<a href="#about" className="hover:opacity-100">About us</a>
<a href="#courses" className="hover:opacity-100">Courses</a>
<a href="#contact" className="hover:opacity-100">Contact Us</a>
<a href="#corporate" className="hover:opacity-100">Corporate Training</a>
</nav>
</div>
<button className="btn bg-white text-[#241a49] hover:bg-gray-100">Log In / Sign Up</button>
</div>
</header>
);
}
