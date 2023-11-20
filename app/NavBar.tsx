import { link } from "fs";
import Link from "next/link";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/Issues",
      label: "Issues",
    },
  ];

  return (
    <nav className="flex px-5 space-x-5 h-14 items-center border-b mb-5">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
