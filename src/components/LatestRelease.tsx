import "./LatestRelease.css";

type Release = {
  id: string;
  title: string;
  coverArt: string;
  releaseDate: string;
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
        display: "flex",
        padding: "clamp(72px, 9vw, 110px) clamp(24px, 5vw, 72px)",
        flexDirection: "row",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#9a9aa2",
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "#4f80ff" }}>01</span> Latest Release
        </p>
        <img src={release.coverArt} className="cover-art" />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#4f80ff",
            margin: 0,
          }}
        >
          Single · {release.releaseDate}
        </p>
        <h1
          style={{
            fontFamily: "Anton, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "#f2f2f4",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {release.title}
        </h1>
        <p
          style={{
            fontSize: "clamp(15px, 1.2vw, 17px)",
            lineHeight: 1.7,
            color: "#b0b0b8",
            maxWidth: "46ch",
            margin: 0,
          }}
        >
          {release.description}
        </p>

        <div style={{ display: "flex", gap: "14px", marginTop: "10px" }}>
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
    </section>
  );
};

export default LatestRelease;
