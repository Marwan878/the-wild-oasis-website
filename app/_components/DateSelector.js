"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-8 sm:pt-12 place-self-center px-4 sm:px-0"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={1}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-8 bg-accent-500 text-primary-800 py-4 sm:h-[72px] gap-4 sm:gap-0 mt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-4 sm:gap-6 w-full sm:w-auto">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl sm:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700 text-sm sm:text-base">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl sm:text-2xl">${regularPrice}</span>
            )}
            <span className="text-sm sm:text-base">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-2 sm:px-3 py-1 sm:py-2 text-lg sm:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-sm sm:text-lg font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-lg sm:text-2xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold self-end sm:self-auto"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
