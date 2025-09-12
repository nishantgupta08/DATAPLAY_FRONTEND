import React from "react";
import { ArrowUp, MapPin, Linkedin } from "lucide-react";

export default function Hero() {
return (
<section className="bg-white">
<div className="container-px grid gap-10 py-10 md:grid-cols-2 md:py-14">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
Never Stop <span className="bg-white rounded-full px-3 py-1 border border-purple-200">Learning</span>
</div>
<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
Empowering Data Science Careers at <span className="block">All Levels</span>
</h1>
<p className="text-lg text-gray-700 max-w-xl">
Let's Sculpt <span className="font-bold">YOUR</span> Path To Success, <span className="font-bold">YOUR</span> Way !
</p>
<div className="flex gap-4">
<button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
View Curriculum
</button>
<button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
Join Upcoming Cohort
</button>
</div>
<div className="flex gap-8 pt-6">
<div className="flex items-center gap-2">
<ArrowUp className="h-6 w-6 text-blue-600" />
<div>
<div className="text-xl font-bold text-gray-900">3K+</div>
<div className="text-sm text-gray-600">Upskilled</div>
</div>
</div>
<div className="flex items-center gap-2">
<MapPin className="h-6 w-6 text-blue-600" />
<div>
<div className="text-xl font-bold text-gray-900">4.9</div>
<div className="text-sm text-gray-600">Google Rating</div>
</div>
</div>
<div className="flex items-center gap-2">
<Linkedin className="h-6 w-6 text-blue-600" />
<div>
<div className="text-xl font-bold text-gray-900">9K+</div>
<div className="text-sm text-gray-600">Community</div>
</div>
</div>
</div>
</div>
<div className="relative">
<img
src="https://images.unsplash.com/photo-1606761568499-6d2451b23c36?q=80&w=1400&auto=format&fit=crop"
alt="hero"
className="h-[400px] w-full rounded-3xl object-cover shadow-xl"
/>
<div className="absolute -top-4 right-6 rounded-2xl bg-white shadow-lg px-4 py-2 text-sm font-medium border border-purple-200">
100% Satisfied Students
</div>
<div className="absolute bottom-4 right-4 rounded-full bg-green-500 p-3 shadow-lg">
<svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
</svg>
</div>
</div>
</div>
</section>
);
}
