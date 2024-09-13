import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

type PropsType = {
  containerStyle: string;
};

const socialLinks = [
  { href: "/", icon: <FaYoutube /> },
  { href: "/", icon: <FaFacebook /> },
  { href: "/", icon: <FaTwitter /> },
  { href: "/", icon: <FaInstagram /> },
];

const Socials = ({ containerStyle }: PropsType) => {
  return (
    <ul className={`${containerStyle}`}>
      {socialLinks.map((social, index) => (
        <li key={index}>
          <Link href={social.href}>{social.icon}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
