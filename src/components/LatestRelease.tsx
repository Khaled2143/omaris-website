import "./LatestRelease.css";

type Release = {
  id: string;
  title: string;
  coverArt: string;
  releaseDate: string;
  type: string;
  description: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
};

type Props = {
  release: Release;
};

const LatestRelease = ({ release }: Props) => {
  return (
    <section
      id="latest"
      style={{
        padding: "clamp(60px, 12vh, 140px) clamp(20px, 5vw, 56px)",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "16px",
          marginBottom: "clamp(28px, 5vh, 52px)",
        }}
      >
        <span
          style={{ fontSize: "12px", letterSpacing: "0.3em", color: "#4f80ff" }}
        >
          01
        </span>
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#6a6a72",
          }}
        >
          Latest Release
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(28px, 5vw, 64px)",
          alignItems: "center",
        }}
      >
        <img src={release.coverArt} className="cover-art" />

        <div>
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#4f80ff",
              marginBottom: "14px",
            }}
          >
            {release.type} · {release.releaseDate}
          </p>
          <h2
            style={{
              fontFamily: "Anton, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(48px, 9vw, 104px)",
              lineHeight: 0.86,
              letterSpacing: "-0.01em",
              margin: "0 0 22px",
              color: "#f2f2f4",
              textTransform: "uppercase",
            }}
          >
            {release.title}
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.6,
              color: "#a4a4ac",
              maxWidth: "46ch",
              margin: "0 0 32px",
            }}
          >
            {release.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {release.spotifyUrl && (
              <a href={release.spotifyUrl} className="cta-spotify">
                Spotify
              </a>
            )}
            {release.appleMusicUrl && (
              <a href={release.appleMusicUrl} className="cta-apple">
                Apple Music
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestRelease;
