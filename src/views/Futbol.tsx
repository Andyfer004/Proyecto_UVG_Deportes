import "./Futbol.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GroupTable from "../components/GroupTable";
import Bracket from "../components/Brackets";

function Futbol() {
    const tournamentData = {
        rounds: [
          {
            matches: [
              { team1: "Equipo A", team2: "Equipo B", score1: 3, score2: 1, winner: "Equipo A" },
              { team1: "Equipo C", team2: "Equipo D", score1: 2, score2: 2, winner: null },
            ],
          },
          {
            matches: [
              { team1: "Equipo A", team2: "Equipo C", score1: 0, score2: 0, winner: null },
            ],
          },
        ],
      };        

    return(
        <div className="futbol-page">
            <Header />
            <main className="main-content">
                <h1>Fase de Grupos</h1>
                <GroupTable />

                <h1>Fase final</h1>
                <Bracket bracketData={tournamentData}/>
            </main>
            <Footer/>
        </div>
    );
}

export default Futbol;