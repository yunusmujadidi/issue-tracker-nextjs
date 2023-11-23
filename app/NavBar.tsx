"use client";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";

const NavBar = () => {
  const links = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/issues",
      label: "Issues",
    },
  ];

  const currentPath = usePathname();
  return (
    <nav className="flex px-5 space-x-5 h-14 items-center border-b mb-5">
      <Link href="/">
        <FaBug size={24} />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <Link
            className={classNames({
              "text-zinc-900": currentPath === link.href,
              "text-zinc-500": currentPath !== link.href,
              "hover:text-zinc-800": true,
            })}
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
