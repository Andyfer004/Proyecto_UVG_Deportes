import "./Footer.css"; // Importamos los estilos CSS

function Footer() {
  return (
    <footer className="footer">
      {/* Contenedor centrado */}
      <div className="footer-container">
        {/* Sección Izquierda: Logo e Información */}
        <div className="footer-left">
          <img src="/logo-uvg-1.png" alt="Logo" className="footer-logo" />
          <p className="footer-copyright">
            Copyright © 2025 UVG deportes. <br />
            All rights reserved.
          </p>
          <a
            href="https://www.instagram.com/deportesuvg/"
            className="footer-instagram"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
              alt="Instagram"
              className="instagram-icon"
            />
          </a>
        </div>

        {/* Sección Central: Enlaces */}
        <div className="footer-center">
          <h4>Organización</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Contáctanos</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>

        {/* Sección Derecha: Mantente al Día */}
        <div className="footer-right">
          <h4>Mantente al día</h4>
          <form
            className="footer-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="footer-input"
            />
            <button type="submit" className="footer-submit">
              ➤
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;