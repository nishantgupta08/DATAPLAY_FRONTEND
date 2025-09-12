import React from "react";
import { features } from "../data";
import FeatureCard from "./FeatureCard.jsx";

export default function Features() {
return (
<section className="container-px py-16">
<div className="grid gap-6 md:grid-cols-4">
{features.map((f) => (
<FeatureCard key={f.title} feature={f} />
))}
</div>
</section>
);
}
