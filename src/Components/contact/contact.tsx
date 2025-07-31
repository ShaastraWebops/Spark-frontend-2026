// src/Components/Contact/Contact.tsx

import React from 'react';
import { useScrollTriggerAnimation } from "../../useScrollTriggerAnimation"; // Assuming you have this hook for animations

// SVG Icons for a clean look
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Contact: React.FC = () => {
    // This custom hook will apply the fade-in animation to the elements.
    const elementRefs = useScrollTriggerAnimation();

    const contactDetails = [
        {
            name: "General Inquiries",
            role: "E-mail",
            contact: "outreach@shaastra.org",
            href: "mailto:outreach@shaastra.org",
            icon: <MailIcon />,
        },
        {
            name: "Soumil BM",
            role: "Outreach Head, Shaastra",
            contact: "+91 63603 47261",
            href: "tel:+916360347261",
            icon: <PhoneIcon />,
        },
        {
            name: "Jagadeesh Reddy",
            role: "Publicity Coordinator, Shaastra",
            contact: "+91 83108 55802",
            href: "tel:+918310855802",
            icon: <PhoneIcon />,
        },
        {
            name: "Amber Srivastava",
            role: "Publicity Coordinator, Shaastra",
            contact: "+91 95599 72981",
            href: "tel:+919559972981",
            icon: <PhoneIcon />,
        },
    ];

    return (
        <div className="bg-slate-900 font-sans" id="contact">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                        Contact Us
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 md:mb-16">
                        Have questions? We'd love to hear from you. Reach out to our team for any inquiries.
                    </p>
                </div>

                {/* Grid for Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactDetails.map((person, index) => (
                        <div
                            key={index}
                            // Add the ref to each card for the animation hook
                            ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}
                            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/30"
                        >
                            <div className="mb-4">
                                {person.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                            <p className="text-sm text-slate-400 mb-4">{person.role}</p>
                            <a
                                href={person.href}
                                className="text-base font-medium text-blue-300 hover:text-blue-200 transition-colors"
                            >
                                {person.contact}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;