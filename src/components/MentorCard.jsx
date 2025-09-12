import React from "react";


export default function MentorCard({ m }) {
return (
<div className="card grid grid-cols-1 md:grid-cols-5 overflow-hidden">
<img src={m.image} alt={m.name} className="md:col-span-2 h-64 w-full object-cover" />
<div className="p-6 md:col-span-3">
<h3 className="text-xl font-semibold">{m.name}</h3>
<div className="sub mb-3">{m.role}</div>
<p className="text-sm text-gray-700 mb-4">{m.bio}</p>
<a className="btn-outline" href="#profile">View Profile</a>
</div>
</div>
);
}
