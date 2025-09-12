import React from "react";
import { Linkedin } from "lucide-react";

export default function MentorCard({ m }) {
return (
<div className="bg-pink-50 rounded-2xl border border-pink-200 shadow-sm overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-5">
<img src={m.image} alt={m.name} className="md:col-span-2 h-64 w-full object-cover" />
<div className="p-6 md:col-span-3">
<h3 className="text-xl font-bold text-gray-900 mb-2">{m.name}</h3>
<div className="text-sm text-gray-600 mb-3">{m.role}</div>
<p className="text-sm text-gray-700 mb-6 leading-relaxed">{m.bio}</p>
<button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition flex items-center gap-2">
<Linkedin className="h-4 w-4" />
View Profile
</button>
</div>
</div>
</div>
);
}
