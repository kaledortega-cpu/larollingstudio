import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3>LA ROLLING STUDIO</h3>

        <p>
          Grabación · Mezcla · Mastering
        </p>

        <a
          href="https://instagram.com/Krow_fs"
          target="_blank"
          rel="noreferrer"
        >
          @Krow_fs
        </a>

        <span>
          © {new Date().getFullYear()} La Rolling Studio. Todos los derechos reservados.
        </span>

      </div>
    </footer>
  );
}

export default Footer;