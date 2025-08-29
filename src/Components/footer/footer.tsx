// footer.tsx - AFTER
import SocialIcons from "../../ui-elements/social-icons/socialIcons";
export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center h-24 bg-gray-800 text-white ">
      <p className="text-sm">
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/aditya-r-holla/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Aditya
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/bikram-das-675896310"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Bikram
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/vinay-lonpande/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Vinay
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/nsrakshna/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Rakshana
        </a>
        &copy; {new Date().getFullYear()} Spark Shaastra . All rights reserved.
      </p>

      {/* Add the SocialIcons component here */}
      <SocialIcons />
    </footer>
  );
}
