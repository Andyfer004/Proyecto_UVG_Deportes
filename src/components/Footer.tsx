function Footer() {
    return (
        <footer
          style={{
            width: "100%",
            backgroundColor: "#1a1a1a", 
            color: "#ffffff", 
            padding: "2rem 0",
            boxSizing: "border-box"
          }}
        >
          {/* Contenedor centrado */}
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto", 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "flex-start", 
              flexWrap: "wrap", 
              gap: "1rem", 
              padding: "0 1rem",
            }}
          >
            {/* Sección Izquierda: Logo e Información */}
            <div style={{ flex: "1" }}>
            <img
                src="/logo-uvg-1.png"
                alt="Logo"
                style={{ height: "30px", cursor: "pointer" }}
                />
              <p style={{ margin: "3.0 rem 0", fontSize: 10}}>
                Copyright © 2025 UVG deportes. <br />
                All rights reserved.
              </p>
              <a
                href="https://www.instagram.com/deportesuvg/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px", 
                    height: "30px",
                    borderRadius: "50%", 
                    backgroundColor: "rgba(255, 255, 255, 0.1)", 
                    textDecoration: "none",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", 
                    transition: "transform 0.2s ease", 
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)"; 
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                }}
                >
                <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
                    alt="Instagram"
                    style={{
                    width: "15px", 
                    height: "15px",
                    filter: "invert(100%)", 
                    }}
                />
                </a>
            </div>
    
            {/* Sección Central: Enlaces */}
            <div style={{ flex: "1" }}>
              <h4 style={{ marginBottom: "1rem" }}>Organización</h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  lineHeight: "1.8",
                }}
              >
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                    }}
                  >
                    Contáctanos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                    }}
                  >
                    About us
                  </a>
                </li>
              </ul>
            </div>
    
            {/* Sección Derecha: Mantente al Día */}
            <div style={{ flex: "1" }}>
              <h4 style={{ marginBottom: "1rem" }}>Mantente al día</h4>
              <form
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    flex: "1",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#4caf50", // Verde UVG
                    color: "#ffffff",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  ➤
                </button>
              </form>
            </div>
          </div>
        </footer>
      );
    };
export default Footer;