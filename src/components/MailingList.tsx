import { useState } from "react";
import "./MailingList.css";

const MailingList = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Subscribed!");
        setEmail("");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section
      id="notify"
      style={{
        padding: "clamp(72px, 9vw, 110px) clamp(24px, 5vw, 72px)",
        maxWidth: "640px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "54px",
          height: "1px",
          backgroundColor: "#4f80ff",
          margin: "20px auto",
        }}
      />
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "#9a9aa2",
          marginBottom: "20px",
        }}
      >
        <span style={{ color: "#4f80ff" }}>03</span> Stay Updated
      </p>
      <h1
        style={{
          fontFamily: "Anton, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(32px, 4vw, 56px)",
          lineHeight: 1,
          letterSpacing: "-0.01em",
          color: "#f2f2f4",
          textTransform: "uppercase",
          margin: "0 0 16px",
        }}
      >
        Be the first to hear it drop
      </h1>
      <p
        style={{
          fontSize: "clamp(15px, 1.2vw, 17px)",
          lineHeight: 1.7,
          color: "#b0b0b8",
          margin: "0 0 10px 0",
        }}
      >
        Get an email the moment new music goes live.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="your@email.com"
          style={{
            fontSize: "15px",
            padding: "14px 20px",
            backgroundColor: "transparent",
            border: "1px solid #2a2a30",
            color: "#f2f2f4",
            minWidth: "280px",
            outline: "none",
          }}
        />

        <button type="submit" className="notify-button">
          Notify Me
        </button>
      </form>
    </section>
  );
};

export default MailingList;
