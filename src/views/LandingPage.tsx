import Header from "../components/Header";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        maxWidth: "1200", 
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
          flex: 1, // Hace que el contenido principal ocupe el espacio restante
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <h1>Welcome to Our Platform</h1>
        <p>We provide top-notch solutions to boost your productivity.</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
  
  export default LandingPage;
  