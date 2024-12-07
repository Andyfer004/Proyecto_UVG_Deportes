import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import SportsIcons from "../components/Sports";

function LandingPage() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        width: "100%", 
        margin: "0 auto", 
        backgroundColor: "#ffffff", 
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", 
        alignItems: "center",
      }}
    >
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main
        style={{
          flex: 1, 
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <Carousel />

        <div
          style={{
            maxWidth: "1200px",
            padding: "4rem 2rem", 
            textAlign: "left", 
            backgroundColor: "#fff",
          }}
        >
          {/* Título principal */}
          <h1
            style={{
              fontSize: "4.0rem",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem", 
            }}
          >
            Compite, Gana, y Haz Historia en la{" "}
            <span style={{ color: "#018E38" }}>Dragon's league</span>
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              marginBottom: "2rem", // Espaciado entre subtítulo y botón
            }}
          >
            Registra tu equipo en cualquiera de nuestros torneos
          </p>

          {/* Botón */}
          <button
            style={{
              padding: "0.8rem 2rem",
              backgroundColor: "#018E38",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#016A2B";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#018E38";
            }}
          >
            Register
          </button>
        </div>
        
        {/* Titulo de deportes */}
        <div
          style={{
            maxWidth: "1200px",
            padding: "4rem 2rem", 
            textAlign: "center", 
            backgroundColor: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            Nuestros deportes
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              marginBottom: "0rem",
            }}
          >
            Diversion para Todos: Explora Nuestros Deportes
          </p>

          {/* Seccion de deportes */}
          <SportsIcons />
          
        </div>
      
      </main>
        
      {/* Footer */}
      <Footer />
    </div>
  );
}
  
  export default LandingPage;
  