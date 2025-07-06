import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="border border-primary-800 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12 lg:mb-24">
      {/* Mobile and tablet: stacked layout, Desktop: side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-6 sm:gap-8 lg:gap-20">
        {/* Image container */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg lg:scale-[1.15] lg:-translate-x-3">
          <Image
            src={image}
            fill
            className="object-cover"
            alt={`Cabin ${name}`}
          />
        </div>

        {/* Content container */}
        <div className="relative">
          {/* Responsive heading */}
          <h3 className="text-accent-100 font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-5 bg-primary-950 p-3 sm:p-4 lg:p-6 lg:pb-1 text-center lg:text-left lg:translate-x-[-254px] lg:w-[150%]">
            Cabin {name}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-primary-300 mb-6 sm:mb-8 lg:mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          {/* Features list */}
          <ul className="flex flex-col gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cabin;
