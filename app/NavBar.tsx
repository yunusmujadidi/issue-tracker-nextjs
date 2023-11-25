"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const { status, data: session } = useSession();
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
          <li key={link.href}>
            <Link
              className={classNames({
                "text-zinc-900": currentPath === link.href,
                "text-zinc-500": currentPath !== link.href,
                "hover:text-zinc-800": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" ? (
          <Link href="/api/auth/signout">Sign out</Link>
        ) : (
          <Link href="/api/auth/signin">Sign in</Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
