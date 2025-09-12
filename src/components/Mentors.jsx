import React from "react";
import { mentors } from "../data";
import MentorCard from "./MentorCard.jsx";

export default function Mentors() {
return (
<section className="container-px py-16">
<div className="text-center mb-12">
<div className="inline-flex items-center rounded-full bg-purple-100 text-purple-700 px-4 py-2 text-sm font-semibold mb-4">
MENTORS
</div>
<h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Our Mentors</h2>
<p className="text-gray-600">Guiding minds towards brilliance and success.</p>
</div>
<div className="grid gap-8 md:grid-cols-2">
{mentors.map((m) => (
<MentorCard key={m.name} m={m} />
))}
</div>
<div className="text-center mt-12">
<button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
View More →
</button>
</div>
</section>
);
}
