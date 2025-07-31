// src/pages/SchedulePage.tsx (New File)

import React from 'react';
import Navbar from '../Components/navbar/navbar'; // Adjust path
import Schedule from '../Components/schedule/schedule'; // Adjust path
import Footer from '../Components/footer/footer'; // Adjust path

const SchedulePage: React.FC = () => {
  // A simple dummy function since this page doesn't scroll to sections
  const handleNoScroll = () => {
    window.location.href = '/#home'; // Or redirect to homepage
  };

  return (
    <div className="bg-slate-900">
      {/* We show the Navbar but the scroll function is a dummy */}
      <Navbar showNavbar={true} scrollToSection={handleNoScroll} />
      <main>
        <Schedule />
      </main>
      <footer className="w-full flex items-center justify-center h-auto py-4 bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default SchedulePage;