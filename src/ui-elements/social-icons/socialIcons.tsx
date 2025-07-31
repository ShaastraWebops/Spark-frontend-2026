// src/components/SocialIcons.tsx

import React from 'react';

// It's recommended to place your assets in the public folder
// and reference them like this, or ensure your bundler (like Vite) handles the paths correctly.
import instagramIcon from '/src/assets/icons/ins.svg';
import facebookIcon from '/src/assets/icons/ff.svg';
import linkedinIcon from '/src/assets/icons/lnk.svg';
import youtubeIcon from '/src/assets/icons/yt copy.svg';

// An array to hold the social media links and their specific styles.
// This makes the component cleaner and easier to update.
const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/shaastra_iitm/',
    icon: instagramIcon,
    hoverClass: 'hover:bg-pink-500/10 hover:text-pink-400',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Shaastra/',
    icon: facebookIcon,
    hoverClass: 'hover:bg-blue-600/10 hover:text-blue-400',
  },
  {
    name: 'LinkedIn',
    href: 'https://in.linkedin.com/company/shaastra-iit-madras',
    icon: linkedinIcon,
    hoverClass: 'hover:bg-sky-500/10 hover:text-sky-400',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCgY2ugmW-BV2nMRFu-0qPZA',
    icon: youtubeIcon,
    hoverClass: 'hover:bg-red-600/10 hover:text-red-400',
  },
];

const SocialIcons: React.FC = () => {
  return (
    // Main container for the icons
    <div className="flex items-center space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${social.name}`}
          // Base styling for each icon link
          className={`group p-2 rounded-full text-slate-400 transition-all duration-300 ease-in-out ${social.hoverClass}`}
        >
          <img
            src={social.icon}
            alt={`${social.name} logo`}
            // Styling for the SVG icon itself
            className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;