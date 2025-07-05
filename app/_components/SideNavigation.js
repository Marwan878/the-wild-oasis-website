"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: (
      <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
    ),
  },
  {
    name: "Profile",
    href: "/account/profile",
    icon: <UserIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b lg:border-b-0 lg:border-r border-primary-900">
      <ul className="flex flex-row lg:flex-col gap-1 lg:gap-2 h-auto lg:h-full text-sm lg:text-lg overflow-x-auto lg:overflow-x-visible">
        {navLinks.map((link) => (
          <li key={link.name} className="flex-shrink-0 lg:flex-shrink">
            <Link
              className={`py-2 lg:py-3 px-3 lg:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-2 lg:gap-4 font-semibold text-primary-200 whitespace-nowrap ${
                pathname === link.href ? "bg-primary-900" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="lg:mt-auto flex-shrink-0 lg:flex-shrink">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
