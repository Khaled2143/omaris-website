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
        padding: "clamp(72px, 9vw, 110px) clamp(24px, 5vw, 72px)",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "#9a9aa2",
          marginBottom: "40px",
        }}
      >
        <span style={{ color: "#4f80ff" }}>02</span> Discography
      </p>

      <div className="discography-grid">
        {releases.map((release) => (
          <div key={release.id} className="release-card">
            <img
              src={release.coverArt}
              alt={release.title}
              className="release-cover"
            />
            <div className="release-info">
              <p className="release-meta">
                {release.type} · {release.releaseDate}
              </p>
              <h3 className="release-title">{release.title}</h3>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discography;
