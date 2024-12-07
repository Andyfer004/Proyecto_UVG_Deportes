function Header() {
  return (
    <header
      style={{
        width: "80%",  
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem 2rem",
        backgroundColor: "#ffffff",
        position: "sticky",
        top: 10,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/logo-uvg-1.png"
          alt="Logo"
          style={{ height: "40px", cursor: "pointer" }}
        />
      </div>

      {/* Navegación */}
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <a
          href="#"
          style={{
            color: "#333",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Home
        </a>
        <a
          href="#"
          style={{
            color: "#333",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Services
        </a>
        <a
          href="#"
          style={{
            color: "#333",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Contact
        </a>
      </nav>

      {/* Botones */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{
            backgroundColor: "transparent",
            color: "#018E38",
            border: "2px solid #018E38",
            padding: "0.5rem 1.5rem",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: 500,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#018E38") &&
            ((e.target as HTMLButtonElement).style.color = "#ffffff")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "transparent") &&
            ((e.target as HTMLButtonElement).style.color = "#018E38")
          }
        >
          Login
        </button>
        <button
          style={{
            backgroundColor: "#018E38",
            color: "#ffffff",
            border: "none",
            padding: "0.5rem 1.5rem",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: 500,
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#018E38")
          }
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
