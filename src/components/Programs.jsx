import React from "react";
import { programs } from "../data";
import ProgramCard from "./ProgramCard.jsx";

export default function Programs() {
return (
<section id="programs" className="container-px py-16 bg-white">
<div className="text-center mb-12">
<div className="inline-flex items-center rounded-full bg-red-100 text-red-700 px-4 py-2 text-sm font-semibold mb-4">
UPCOMING DATAPLAY COHORTS
</div>
<h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
DATAPLAY <span className="block">Fellowship Programs</span>
</h2>
</div>
<div className="grid gap-8 md:grid-cols-3">
{programs.map((p) => (
<ProgramCard key={p.id} p={p} />
))}
</div>
<div className="text-center mt-12">
<button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
View More
</button>
</div>
</section>
);
}
