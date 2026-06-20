import "./Discography.css";

type Release = {
  id: string;
  title: string;
  coverArt: string;
  releaseDate: string;
  type: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
};

type Props = {
  releases: Release[];
};

const Discography = ({ releases }: Props) => {
  return (
    <section
      id="music"
      style={{
        padding: "clamp(60px, 10vh, 120px) clamp(20px, 5vw, 56px)",
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
          02
        </span>
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#6a6a72",
          }}
        >
          Discography
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "clamp(16px, 2vw, 28px)",
        }}
      >
        {releases.map((release) => (
          <div key={release.id} className="release-card">
            <img
              src={release.coverArt}
              alt={release.title}
              className="release-cover"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "10px",
              }}
            >
              <span
                style={{ fontSize: "15px", fontWeight: 600, color: "#e8e8ea" }}
              >
                {release.title}
              </span>
              <span
                style={{ fontSize: "13px", color: "#6a6a72", flexShrink: 0 }}
              >
                {release.releaseDate}
              </span>
            </div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#54545c",
                marginTop: "3px",
              }}
            >
              {release.type}
            </div>
            <div className="release-links">
              {release.spotifyUrl && (
                <a
                  href={release.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="release-link"
                >
                  Spotify
                </a>
              )}
              {release.appleMusicUrl && (
                <a
                  href={release.appleMusicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="release-link"
                >
                  Apple Music
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discography;
