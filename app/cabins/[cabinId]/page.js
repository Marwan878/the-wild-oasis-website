import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-4 sm:mt-6 lg:mt-8 px-4 sm:px-6 lg:px-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 sm:mb-8 lg:mb-10 text-accent-400 px-2">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
