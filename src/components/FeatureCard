import React from "react";
import { Search, Layers, GraduationCap, MessagesSquare } from "lucide-react";


const ICONS = { search: Search, layers: Layers, graduation: GraduationCap, messages: MessagesSquare };


export default function FeatureCard({ feature }) {
const Icon = ICONS[feature.icon] || Search;
return (
<div className="card p-6 text-center border-indigo-100">
<div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
<Icon className="h-5 w-5 text-indigo-700" />
</div>
<div className="font-semibold mb-1">{feature.title}</div>
<p className="sub">{feature.desc}</p>
</div>
);
}
