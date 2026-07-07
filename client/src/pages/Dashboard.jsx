import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [temples, setTemples] = useState([]);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetchTemples();
    fetchSlots();
  }, []);

  const fetchTemples = async () => {
    try {
      const res = await API.get("/temples");
      setTemples(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSlots = async () => {
    try {
      const res = await API.get("/slots");
      setSlots(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBooking = async (slotId, price) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await API.post("/bookings", {
        user: user._id,
        slot: slotId,
        totalAmount: price,
      });

      alert("🎉 Booking Successful");
    } catch (err) {
      alert(err.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>DarshanEase Dashboard</h1>

      {temples.map((temple) => (
        <div
          key={temple._id}
          style={{
            border: "1px solid white",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>{temple.name}</h2>

          <p>📍 {temple.location}</p>
          <p>🙏 {temple.deity}</p>
          <p>🕒 {temple.timings}</p>

          <h3>Available Slots</h3>

          {slots
            .filter((slot) => slot.temple._id === temple._id)
            .map((slot) => (
              <div
                key={slot._id}
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <p>📅 {slot.date}</p>
                <p>
                  ⏰ {slot.startTime} - {slot.endTime}
                </p>
                <p>💺 Seats : {slot.availableSeats}</p>
                <p>💰 ₹{slot.price}</p>

                <button
                  onClick={() =>
                    handleBooking(slot._id, slot.price)
                  }
                >
                  Book Now
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;