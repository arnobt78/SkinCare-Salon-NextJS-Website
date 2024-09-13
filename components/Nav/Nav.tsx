import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`${
              pathname === link.href && "border-b-2 border-accent"
            } uppercase`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
