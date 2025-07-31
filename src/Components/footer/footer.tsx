// footer.tsx - AFTER
import SocialIcons from "../../ui-elements/social-icons/socialIcons"
export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center h-24 bg-gray-800 text-white ">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Spark Shaastra . All rights reserved.
      </p>
       
      {/* Add the SocialIcons component here */}
      <SocialIcons />
    
    </footer>
  );
}