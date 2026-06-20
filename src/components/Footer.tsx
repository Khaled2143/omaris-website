import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-logo">Omari Brown</p>

      <a
        href="https://instagram.com/YOUR_HANDLE"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        Instagram
      </a>

      <p className="footer-copyright">
        © {year} Omari Brown. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
