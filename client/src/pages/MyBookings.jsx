import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Bookings</h1>

      {bookings.map((booking) => (
        <div
          key={booking._id}
          style={{
            border: "1px solid white",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h2>{booking.slot?.temple?.name}</h2>

          <p>📅 {booking.slot?.date}</p>

          <p>
            ⏰ {booking.slot?.startTime} - {booking.slot?.endTime}
          </p>

          <p>💰 ₹{booking.totalAmount}</p>

          <p>✅ {booking.status}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;