import React from "react";
import { Users, Timer } from "lucide-react";

export default function ProgramCard({ p }) {
const full = p.status.toLowerCase() === "full";
return (
<div className="bg-white rounded-2xl border border-purple-200 shadow-sm hover:shadow-md transition overflow-hidden">
<img src={p.image} alt="course" className="h-48 w-full object-cover" />
<div className="p-6 space-y-4">
<div className="font-semibold text-lg text-gray-900">{p.title}</div>
<div className="flex items-center gap-6 text-sm text-gray-600">
<span className="inline-flex items-center gap-2">
<Users className="h-4 w-4"/> {p.seats}
</span>
<span className="inline-flex items-center gap-2">
<Timer className="h-4 w-4"/> {p.duration}
</span>
</div>
<div className="flex items-center justify-between">
<span className={`px-3 py-1 rounded-full text-sm font-medium ${
full ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
}`}>
{p.status}
</span>
{!full && (
<button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
{p.cta}
</button>
)}
</div>
</div>
</div>
);
}
