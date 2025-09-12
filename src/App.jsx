import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Programs from "./components/Programs.jsx";
import Features from "./components/Features.jsx";
import Mentors from "./components/Mentors.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1">
<Hero />
<Programs />
<Features />
<Mentors />
</main>
<Footer />
</div>
);
}
