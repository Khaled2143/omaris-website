import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 56px",
        background:
          "linear-gradient(to bottom, rgba(10,10,11,.85), rgba(10,10,11,0))",
        backdropFilter: "blur(6px)",
      }}
    >
      <p
        style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "20px",
          letterSpacing: "0.05em",
          color: "#e8e8ea",
        }}
      >
        Omari Brown
      </p>
      <div style={{ display: "flex", gap: "34px", alignItems: "center" }}>
        <a className="navbarOne">Latest</a>
        <a className="navbarOne">Music</a>
        <a className="navbarOne">About</a>
        <a className="navBarTwo">Notify Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
