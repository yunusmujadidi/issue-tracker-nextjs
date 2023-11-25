"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  DropdownMenuLabel,
  Flex,
  Text,
} from "@radix-ui/themes";

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
    <Container>
      <nav className=" space-x-5 border-b mb-5 py-3 mx-3">
        <Flex justify="between">
          <Flex align="center" gap="3">
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
          </Flex>
          <Box>
            {status === "loading" ? (
              <Text>Loading...</Text>
            ) : status === "authenticated" ? (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user!.image!}
                    fallback="?"
                    radius="full"
                    size="2"
                    className="cursor-pointer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="end">
                  <DropdownMenuLabel>
                    <Text size="2"> {session.user!.email}</Text>
                  </DropdownMenuLabel>
                  <Link href="/api/auth/signout">
                    <DropdownMenu.Item>Sign out</DropdownMenu.Item>
                  </Link>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              <Link href="/api/auth/signin">
                <Text>Sign in</Text>
              </Link>
            )}
          </Box>
        </Flex>
      </nav>
    </Container>
  );
};

export default NavBar;
