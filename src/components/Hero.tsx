import Omari_Home from "../assets/Omari_Home.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-container"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div
        className="hero-image-wrapper"
        style={{ flex: 1, alignSelf: "stretch", overflow: "hidden" }}
      >
        <img
          src={Omari_Home}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="hero-text"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "center",
          minHeight: "100vh",
          padding: "110px 72px 40px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: ".32em",
            textTransform: "uppercase",
            color: "#4f80ff",
            marginBottom: "clamp(16px, 3vh, 26px)",
          }}
        >
          Brooklyn · Producer / Artist
        </p>
        <h1
          style={{
            fontFamily: "Anton, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(56px, 9vw, 128px)",
            lineHeight: 0.84,
            letterSpacing: "-0.02em",
            color: "#f2f2f4",
            textTransform: "uppercase",
            margin: "0",
          }}
        >
          Omari
          <br /> Brown
        </h1>
        <p
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(22px, 3.4vw, 42px)",
            lineHeight: 1,
            letterSpacing: "-0.01em",
            color: "#e8e8ea",
            margin: "clamp(12px, 2vh, 18px) 0 0",
          }}
        >
          a.k.a. <span style={{ color: "#4f80ff" }}>Changa</span>
        </p>
        <div
          style={{
            height: "3px",
            width: "54px",
            margin: "clamp(26px, 4vh, 38px) 0",
            backgroundColor: "#4f80ff",
          }}
        />
        <p
          style={{
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.7,
            color: "#b0b0b8",
            maxWidth: "46ch",
            margin: "0 0 16px",
          }}
        >
          I've been writing for a while now, putting in the work because I
          genuinely believe in what I'm building. Every track is a piece of me,
          and I don't half-step any of it.
        </p>
        <p
          style={{
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.7,
            color: "#b0b0b8",
            maxWidth: "46ch",
            margin: "0 0 clamp(30px, 5vh, 40px)",
          }}
        >
          I want to put something positive into the world; vibes that move you,
          words that mean something, and energy that sticks with you long after
          the song ends.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            marginTop: "10px",
          }}
        >
          <a href="#latest" className="cta-primary">
            Hear the latest
          </a>

          <a href="#music" className="cta-ghost">
            Discography
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
