import React from "react";
import { mentors } from "../data";
import MentorCard from "./MentorCard";


export default function Mentors() {
return (
<section className="container-px py-12">
<div className="text-center mb-6">
<span className="badge border-0 bg-indigo-100 text-indigo-700">MENTORS</span>
<h2 className="heading mt-2">Our Mentors</h2>
<p className="sub mt-1">Guiding minds towards brilliance and success.</p>
</div>
<div className="grid gap-6 md:grid-cols-2">
{mentors.map((m) => (
<MentorCard key={m.name} m={m} />
))}
</div>
<div className="text-center mt-8">
<a className="btn-primary" href="#more-mentors">View More</a>
</div>
</section>
);
}
