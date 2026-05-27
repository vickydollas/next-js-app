import ReservationCard from "@/app/_components/ReservationCard";
interface ReservationCardProps {
  id: string;
  guestId: string;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string;
  created_at: string;
  cabins: {
    name: string;
    image: string;
  };
}
export default function Page() {
  // CHANGE
  const bookings: ReservationCardProps[] = [
    // {
    //   id: "3",
    //   guestId: "3",
    //   startDate: "11/22/3333",
    //   endDate: "22/22/3333",
    //   numNights: 22,
    //   totalPrice: 333,
    //   numGuests: 555,
    //   status: "asdcaw",
    //   created_at: "ececaec",
    //   cabins: {
    //     name: "wcwacwc",
    //     image: "dearfweewc",
    //   },
    // },
  ];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
