import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-sm sm:text-base md:text-xl">
      <ul className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-1 sm:gap-2 md:gap-4"
            >
              <img
                className="h-6 sm:h-7 md:h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span className="hidden sm:inline">Guest area</span>
              <span className="sm:hidden">Account</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              <span className="hidden sm:inline">Guest area</span>
              <span className="sm:hidden">Account</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
