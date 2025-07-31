// src/Components/schedule/Schedule.tsx

import React, { useState } from 'react';
import { useScrollTriggerAnimation } from "../../useScrollTriggerAnimation";

// --- SVG Icons for visual clarity ---
const LocationPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);


// --- Schedule Data Array ---
const scheduleData = [
    { city: "Chennai", venue: "", address: "", date: "", contactName: "Naghul", contactPhone: "+917010722384" },
    { city: "Kanchipuram", venue: "", address: "", date: "", contactName: "Varsithaa", contactPhone: "+919443889361" },
    { city: "Vellore", venue: "", address: "", date: "", contactName: "Lavlin", contactPhone: "+919787043005" },
    { city: "Thanjavur", venue: "", address: "", date: "", contactName: "Abishnavi", contactPhone: "+919994308511" },
    { city: "Salem", venue: "", address: "", date: "", contactName: "Lasya", contactPhone: "+919494628574" },
    { city: "Tiruppur", venue: "CS Academy", address: "", date: "2nd Aug 2025", contactName: "Veera Vardhan", contactPhone: "+918319737345" },
    { city: "Madurai", venue: "", address: "", date: "", contactName: "Sanjesh", contactPhone: "+917483125099" },
    { city: "Tirunelvelli", venue: "", address: "", date: "", contactName: "Rakesh", contactPhone: "+919490405511" },
    { city: "Coimbatore", venue: "NGP School", address: "", date: "16th July 2025", contactName: "Karnika", contactPhone: "+919345567136" },
    { city: "Tirupati", venue: "", address: "", date: "", contactName: "Rishik", contactPhone: "+919391229057" },
    { city: "Nellore", venue: "", address: "", date: "", contactName: "Aman", contactPhone: "+917416847055" },
    { city: "Guntur", venue: "Viva The School", address: "", date: "2nd Aug 2025", contactName: "Rasagna", contactPhone: "+919381578451" },
    { city: "Kochi", venue: "", address: "", date: "", contactName: "Ravichandra", contactPhone: "+919019050171" },
    { city: "Alappuzha", venue: "", address: "", date: "", contactName: "Azil", contactPhone: "+919778402195" },
    { city: "Trivandrum", venue: "", address: "", date: "", contactName: "Jagadeesh", contactPhone: "+918310855802" },
    { city: "Hyderabad", venue: "Sri Bhavishyaa International School", address: "ZP Rd, Devakammathota, Sriramana Colony, Hastinapuram, Hyderabad, Telangana 500079", date: "18th July 2025", contactName: "Ritkriti", contactPhone: "+917330888273" },
    { city: "Warangal", venue: "", address: "", date: "", contactName: "Tejashwini", contactPhone: "+918466866026" },
    { city: "Pondicherry", venue: "", address: "", date: "", contactName: "Mohit", contactPhone: "+919770770772" },
    { city: "Bangalore", venue: "", address: "", date: "", contactName: "Amber", contactPhone: "+919559972981" },
    { city: "Mangalore", venue: "", address: "", date: "", contactName: "Shervan", contactPhone: "+916302032737" },
    { city: "Mysore", venue: "", address: "", date: "", contactName: "Ashish", contactPhone: "+919182013579" },
];

const Schedule: React.FC = () => {
    const elementRefs = useScrollTriggerAnimation();
    // State to hold the user's search query
    const [searchQuery, setSearchQuery] = useState('');

    // Filter the schedule data based on the search query
    const filteredSchedule = scheduleData.filter(item =>
        item.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-slate-900 text-white font-sans">
            <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                        Event Schedule
                    </h1>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
                        Find the SPARK event details for a city near you. Dates and venues are updated regularly.
                    </p>
                </div>

                {/* --- Search Bar --- */}
                <div className="relative mb-12 md:mb-16 max-w-lg mx-auto">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <SearchIcon />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by city (e.g., Hyderabad)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                </div>

                {/* --- Responsive Grid for Schedule Cards --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSchedule.length > 0 ? (
                        filteredSchedule.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}
                                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col space-y-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/30"
                            >
                                <h2 className="text-2xl font-bold text-white">{item.city}</h2>
                                
                                {item.venue && (
                                    <div className="flex text-slate-300">
                                        <LocationPinIcon />
                                        <div>
                                            <p className="font-semibold">{item.venue}</p>
                                            {item.address && <p className="text-sm text-slate-400">{item.address}</p>}
                                        </div>
                                    </div>
                                )}

                                {item.date ? (
                                    <p className="text-teal-300 font-medium flex items-center"><CalendarIcon /> {item.date}</p>
                                ) : (
                                    <p className="text-yellow-400 font-medium flex items-center"><CalendarIcon /> TBD</p>
                                )}
                                
                                <div className="border-t border-slate-700 pt-4">
                                    <p className="flex items-center text-slate-300">
                                        <UserIcon />
                                        <span className="font-semibold mr-2">{item.contactName}:</span>
                                        <a href={`tel:${item.contactPhone}`} className="text-blue-300 hover:text-blue-200 transition-colors">
                                            {item.contactPhone}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Message to show when no results are found
                        <p className="text-center text-slate-400 col-span-full">
                            No cities found matching your search.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
