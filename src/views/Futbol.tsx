import "./Futbol.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GroupTable from "../components/GroupTable";
import TournamentBracket from "../components/TournamentBracket";
function Futbol() {

    return(
        <div className="futbol-page">
            <Header />
            <main className="main-content">
                <h1>Fase de Grupos</h1>
                <GroupTable />
                
                <h1>Fase Final</h1>
                <TournamentBracket />
            
            </main>
            <Footer/>
        </div>
    );
}

export default Futbol;