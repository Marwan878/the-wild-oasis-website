import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 z-10">
      <Image
        src={logo}
        height="60"
        quality={100}
        width="60"
        alt="The Wild Oasis logo"
        className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-15 lg:w-15"
      />
      <span className="text-sm sm:text-lg md:text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
