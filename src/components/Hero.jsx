import React from "react";
import { stats } from "../data";


export default function Hero() {
return (
<section className="bg-gradient-to-r from-purple-50 to-indigo-50">
<div className="container-px grid gap-10 py-10 md:grid-cols-2 md:py-14">
<div className="space-y-5">
<div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">Never Stop <span className="bg-white rounded-full px-2 py-0.5 border">Learning</span></div>
<h1 className="heading">
Empowering Data Science Careers at <span className="underline decoration-8 decoration-pink-300">All Levels</span>
</h1>
<p className="text-gray-600 max-w-xl">Let's sculpt your path to success, your way! Flexible curriculum, live mentorship and real projects.</p>
<div className="flex gap-3">
<a className="btn-primary" href="#curriculum">View Curriculum</a>
<a className="btn-outline" href="#programs">Join Upcoming Cohort</a>
</div>
<div className="flex gap-6 pt-4">
{stats.map((s) => (
<div key={s.label} className="text-sm">
<div className="text-xl font-bold">{s.value}</div>
<div className="sub">{s.label}</div>
</div>
))}
</div>
</div>
<div className="relative">
<img
src="https://images.unsplash.com/photo-1606761568499-6d2451b23c36?q=80&w=1400&auto=format&fit=crop"
alt="hero"
className="h-[340px] w-full rounded-3xl object-cover shadow-xl md:h-[420px]"
/>
<div className="absolute -top-4 right-6 rounded-2xl bg-white shadow-lg px-4 py-2 text-xs font-medium">100% Satisfied Students</div>
<a href="#whatsapp" className="absolute bottom-4 right-4 rounded-full bg-green-500 px-4 py-2 text-white text-xs shadow">WhatsApp</a>
</div>
</div>
</section>
);
}
