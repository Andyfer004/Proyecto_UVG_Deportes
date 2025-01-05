import "./Futbol.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GroupTable from "../components/GroupTable";

function Futbol() {
      
    return(
        <div className="futbol-page">
            <Header />
            <main className="main-content">
                <h1>Fase de Grupos</h1>
                <GroupTable />
            </main>
            <Footer/>
        </div>
    );
}

export default Futbol;