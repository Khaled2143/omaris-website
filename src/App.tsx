import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import LatestRelease from "./components/LatestRelease";
import Discography from "./components/Discography";
import fast_life from "./assets/fast_life.png";
import release2 from "./assets/Hiatus.png";
import release3 from "./assets/Serenity.png";
import release4 from "./assets/Wake_Up.webp";
import release5 from "./assets/The_Veil.webp";
import MailingList from "./components/MailingList";
import Footer from "./components/Footer";

const releases = [
  {
    id: "fast-life",
    title: "Fast Life",
    coverArt: fast_life,
    releaseDate: "June 2026",
    type: "Single",
    spotifyUrl:
      "https://open.spotify.com/track/1HHHBxcvTYvf7w7qyxvkQn?si=c6d5e2479f124a39",
  },
  {
    id: "hiatus",
    title: "Hiatus",
    coverArt: release2,
    releaseDate: "May 2026",
    type: "Single",
    spotifyUrl:
      "https://open.spotify.com/track/13xz87Tp8r5XZ3PHSkjKkp?si=2b97476e29944c3f",
  },
  {
    id: "serenity",
    title: "Serenity",
    coverArt: release3,
    releaseDate: "January 2026",
    type: "Single",
    spotifyUrl:
      "https://open.spotify.com/track/40P5ipdWVlS6YVtRDO1dOH?si=64105689661141a6",
  },
  {
    id: "wake-up",
    title: "Wake Up",
    coverArt: release4,
    releaseDate: "May 2025",
    type: "Single",
    appleMusicUrl: "https://music.apple.com/us/song/wake-up/1813209250",
  },
  {
    id: "the-veil",
    title: "The Veil",
    coverArt: release5,
    releaseDate: "October 2024",
    type: "Single",
    appleMusicUrl: "https://music.apple.com/us/song/the-veil/1776282770",
  },
];

function App() {
  const latestRelease = {
    id: "fast-life-2026",
    title: "Fast Life",
    coverArt: fast_life,
    releaseDate: "June 2026",
    type: "Single",
    description:
      "Fast Life leans into the noise; fast money, fast love, faster days - and asks what's left when you finally slow down.",
    spotifyUrl:
      "https://open.spotify.com/track/1HHHBxcvTYvf7w7qyxvkQn?si=c6d5e2479f124a39",
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <LatestRelease release={latestRelease} />
      <Discography releases={releases} />
      <MailingList />
      <Footer />
    </div>
  );
}

export default App;
