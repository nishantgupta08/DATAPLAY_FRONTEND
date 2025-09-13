import React from "react";
import { GraduationCap, Star, Linkedin } from "lucide-react";

export default function Hero() {
return (
<section className="bg-gradient-to-r from-purple-50 to-purple-100 relative overflow-hidden">
<div className="container-px grid gap-10 py-10 md:grid-cols-2 md:py-14">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800">
Never Stop <span className="relative bg-purple-200 rounded-lg px-3 py-1 border border-white">
Learning
<div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
<div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
<div className="absolute -top-2 -right-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
<div className="absolute -bottom-2 -left-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
</span>
</div>
<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
Empowering Data Science Careers at <span className="block relative">
All Levels
<div className="absolute bottom-0 left-0 w-full h-4 bg-red-500 opacity-40 transform -skew-x-12 rounded"></div>
</span>
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
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
<GraduationCap className="h-6 w-6 text-blue-600" />
</div>
<div>
<div className="text-xl font-bold text-gray-900">3K+</div>
<div className="text-sm text-gray-600">Upskilled</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
<Star className="h-6 w-6 text-red-500" />
</div>
<div>
<div className="text-xl font-bold text-gray-900">4.9</div>
<div className="text-sm text-gray-600">Google Rating</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
<Linkedin className="h-6 w-6 text-blue-600" />
</div>
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
<div className="absolute -top-4 right-6 rounded-2xl bg-white shadow-lg px-4 py-3 text-sm font-medium border border-purple-200">
<div className="font-bold text-gray-900">100% Satisfied Students</div>
<div className="flex gap-1 mt-2">
<div className="w-6 h-6 bg-blue-500 rounded-full"></div>
<div className="w-6 h-6 bg-green-500 rounded-full"></div>
<div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
<div className="w-6 h-6 bg-red-500 rounded-full"></div>
<div className="w-6 h-6 bg-purple-500 rounded-full"></div>
</div>
</div>
<div className="absolute bottom-4 right-4 rounded-full bg-green-500 p-3 shadow-lg">
<svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
</svg>
</div>
<div className="absolute top-10 left-10 w-16 h-16 bg-blue-600 transform rotate-45 opacity-20"></div>
<div className="absolute top-20 right-20 w-8 h-8 bg-purple-400 rounded-full opacity-30"></div>
<div className="absolute bottom-20 left-20 w-6 h-6 bg-purple-400 rounded-full opacity-30"></div>
<div className="absolute top-32 right-32 w-4 h-4 bg-purple-400 rounded-full opacity-30"></div>
<div className="absolute top-16 left-16 text-gray-400 text-2xl">+</div>
<div className="absolute top-24 right-16 text-gray-400 text-xl">+</div>
<div className="absolute bottom-16 left-16 text-gray-400 text-lg">+</div>
<div className="absolute top-40 right-40 text-gray-400 text-sm">+</div>
</div>
</div>
</section>
);
}
