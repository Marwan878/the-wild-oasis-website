import Link from "next/link";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col sm:flex-row border border-primary-800">
      <div className="relative h-48 sm:h-32 sm:aspect-square w-full sm:w-auto">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover sm:border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-4 sm:px-6 py-3 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
          <h3 className="text-lg sm:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-6 sm:h-7 px-2 sm:px-3 uppercase text-xs font-bold flex items-center rounded-sm self-start sm:self-auto">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-6 sm:h-7 px-2 sm:px-3 uppercase text-xs font-bold flex items-center rounded-sm self-start sm:self-auto">
              upcoming
            </span>
          )}
        </div>

        <p className="text-sm sm:text-lg text-primary-300 mb-2 sm:mb-0">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-auto">
          <div className="flex gap-3 sm:gap-5 items-baseline">
            <p className="text-lg sm:text-xl font-semibold text-accent-400">
              ${totalPrice}
            </p>
            <p className="text-primary-300 hidden sm:inline">&bull;</p>
            <p className="text-base sm:text-lg text-primary-300">
              {numGuests} guest{numGuests > 1 && "s"}
            </p>
          </div>
          <p className="text-xs sm:text-sm text-primary-400 sm:ml-auto">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {!isPast(startDate) ? (
        <div className="flex sm:flex-col border-t sm:border-t-0 sm:border-l border-primary-800 w-full sm:w-[100px]">
          <Link
            href={`/account/reservations/edit/${id}`}
            className="group flex items-center justify-center sm:justify-start gap-2 uppercase text-xs font-bold text-primary-300 border-r sm:border-r-0 sm:border-b border-primary-800 flex-grow px-3 py-2 sm:py-0 hover:bg-accent-600 transition-colors hover:text-primary-900"
          >
            <PencilSquareIcon className="h-4 sm:h-5 w-4 sm:w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="mt-0 sm:mt-1">Edit</span>
          </Link>
          <div className="flex-grow">
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ReservationCard;
