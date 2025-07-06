import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8 lg:gap-x-24 gap-y-16 lg:gap-y-32 text-base lg:text-lg items-center">
      <div className="lg:col-span-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-6 lg:space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="lg:col-span-2 order-first lg:order-none">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
