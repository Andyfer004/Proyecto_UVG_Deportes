import "./Futbol.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GroupTable from "../components/GroupTable";
import MyBracket from "../components/MyBracket";
import MVP from "../components/MVP";

function Futbol() {     

    return(
        <div className="futbol-page">
            <Header />
            <main className="main-content">
                <h1>Fase de Grupos</h1>
                <GroupTable />

                <h1>Fase Final</h1>
                <MyBracket/>

                <h1>Mejores del torneo</h1>
                <MVP />

            </main>
            <Footer/>


        </div>
    );
}

export default Futbol;