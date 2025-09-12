import React from "react";
import { Users, Timer } from "lucide-react";


export default function ProgramCard({ p }) {
const full = p.status.toLowerCase() === "full";
return (
<div className="card group border-indigo-200 hover:shadow-md transition overflow-hidden">
<div className="p-4 pb-0">
<div className="font-semibold">{p.title}</div>
</div>
<img src={p.image} alt="course" className="h-36 w-full object-cover" />
<div className="p-4 space-y-3">
<div className="flex items-center gap-4 text-sm text-gray-600">
<span className="inline-flex items-center gap-1"><Users className="h-4 w-4"/> {p.seats}</span>
<span className="inline-flex items-center gap-1"><Timer className="h-4 w-4"/> {p.duration}</span>
</div>
<div className="flex items-center justify-between">
<span className={`badge ${full ? "border-red-200 text-red-600 bg-red-50" : "border-emerald-200 text-emerald-700 bg-emerald-50"}`}>{p.status}</span>
<button disabled={full} className={`btn ${full ? "bg-gray-200 text-gray-500" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}>{full ? "FULL" : p.cta}</button>
</div>
</div>
</div>
);
}
