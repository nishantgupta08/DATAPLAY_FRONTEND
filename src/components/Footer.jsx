import React from "react";


export default function Footer() {
return (
<footer id="contact" className="mt-16 border-t bg-white">
<div className="container-px py-10 grid gap-8 md:grid-cols-4">
<div>
<div className="font-extrabold text-xl mb-2">DATAPLAY</div>
<p className="sub">Upskilling for the next generation of data professionals.</p>
</div>
<div>
<div className="font-semibold mb-2">Programs</div>
<ul className="space-y-2 sub">
<li>Beginner Fellowship</li>
<li>Pro Fellowship</li>
<li>ML & MLOps</li>
</ul>
</div>
<div>
<div className="font-semibold mb-2">Company</div>
<ul className="space-y-2 sub">
<li>About</li>
<li>Careers</li>
<li>Contact</li>
</ul>
</div>
<div>
<div className="font-semibold mb-2">Get in touch</div>
<div className="sub space-y-1">
<div>+91 90000 00000</div>
<div>hello@dataplay.academy</div>
</div>
<a className="btn-primary mt-3 inline-block" href="#apply">Apply Now</a>
</div>
</div>
<div className="text-center sub pb-6">© {new Date().getFullYear()} DATAPLAY. All rights reserved.</div>
</footer>
);
}
