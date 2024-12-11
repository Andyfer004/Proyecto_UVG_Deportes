import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <img src="/logo-uvg-1.png" alt="Logo" className="logo" />
      </div>

      {/* Navegación */}
      <nav className="header-nav">
        <a href="#" className="nav-link nav-link-bold">
          Inicio
        </a>
        <a href="#" className="nav-link">
          Deportes
        </a>
        <a href="#" className="nav-link">
          Preguntas
        </a>
      </nav>

      {/* Botones */}
      <div className="header-buttons">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-primary">Sign up</button>
      </div>
    </header>
  );
}

export default Header;