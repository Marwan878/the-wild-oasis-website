import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-12 md:mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-50 mb-6 sm:mb-8 md:mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-primary-800 text-sm sm:text-base md:text-lg font-semibold hover:bg-accent-600 transition-all inline-block"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
