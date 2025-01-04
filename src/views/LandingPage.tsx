import "./LandingPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import SportsIcons from "../components/Sports";

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="main-content">
        <Carousel />

        {/* Sección de Introducción */}  
        <div className="intro-section">
          <h1>
            Compite, Gana, y Haz Historia en la{" "}
            <span className="highlight">Dragon's league</span>
          </h1>
          <p>Registra tu equipo en cualquiera de nuestros torneos</p>
          <button className="btn-register">Register</button>
        </div>

        {/* Sección de Deportes */}
        <div className="sports-section">
          <h1>Nuestros deportes</h1>
          <p>Diversión para Todos: Explora Nuestros Deportes</p>
          <SportsIcons />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;