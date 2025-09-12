import React from "react";
import { features } from "../data";
import FeatureCard from "./FeatureCard.jsx";


export default function Features() {
return (
<section className="container-px pb-10">
<div className="grid gap-4 md:grid-cols-4">
{features.map((f) => (
<FeatureCard key={f.title} feature={f} />
))}
</div>
</section>
);
}
