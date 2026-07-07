import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🛕 DarshanEase</h1>

      <h3>Temple Darshan Booking System</h3>

      <br />

      <Link to="/login">
        <button>Login</button>
      </Link>

      <br />
      <br />

      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Home;