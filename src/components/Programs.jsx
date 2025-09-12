import React from "react";
import { programs } from "../data";
import ProgramCard from "./ProgramCard.jsx";


export default function Programs() {
return (
<section id="programs" className="container-px py-12">
<div className="text-center mb-8">
<div className="inline-flex badge border-0 bg-red-100 text-red-700 mb-2">UPCOMING DATAPLAY COHORTS</div>
<h2 className="text-2xl md:text-3xl font-extrabold">DATAPLAY <span className="block">Fellowship Programs</span></h2>
</div>
<div className="grid gap-6 md:grid-cols-3">
{programs.map((p) => (
<ProgramCard key={p.id} p={p} />
))}
</div>
<div className="text-center mt-8">
<a className="btn-primary" href="#more">View More</a>
</div>
</section>
);
}
