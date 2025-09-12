import React from "react";
import { Search, Layers, GraduationCap, MessagesSquare } from "lucide-react";

const ICONS = { search: Search, layers: Layers, graduation: GraduationCap, messages: MessagesSquare };

export default function FeatureCard({ feature }) {
const Icon = ICONS[feature.icon] || Search;
return (
<div className="bg-purple-50 rounded-2xl border border-purple-200 p-6 text-center shadow-sm">
<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-purple-200">
<Icon className="h-6 w-6 text-purple-700" />
</div>
<div className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</div>
<p className="text-sm text-gray-600">{feature.desc}</p>
</div>
);
}
