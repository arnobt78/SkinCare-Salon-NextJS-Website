"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import { links } from "@/utils/links";
import Socials from "../Socials";

type PropsType = {
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ setMobileNav }: PropsType) => {
  const pathname = usePathname();

  return (
    <nav className="relative flex flex-col justify-between h-full p-8">
      <div className="cursor-pointer text-accent" onClick={() => setMobileNav(false)}>
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-10 text-white text-xl">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`${
              pathname === link.href && "border-b-2 border-accent-100"
            } uppercase max-w-max mx-auto`}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <Socials containerStyle="text-white text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
