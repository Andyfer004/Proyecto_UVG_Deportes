import "./GroupTable.css";
import MatchCard from "./MatchCard";
import { useState } from "react";

type GroupKey = "A" | "B" | "C" | "D";

function GroupStage() {
  const [activeGroup, setActiveGroup] = useState<GroupKey>("A");
  const [activeTab, setActiveTab] = useState<"positions" | "matches">("positions");

  // Datos de posiciones por grupo
  const groupStandings: Record<GroupKey, { name: string; played: number; won: number; lost: number; points: number }[]> = {
    A: [
      { name: "Equipo A", played: 3, won: 2, lost: 1, points: 6 },
      { name: "Equipo B", played: 3, won: 1, lost: 2, points: 3 },
      { name: "Equipo C", played: 3, won: 0, lost: 3, points: 0 },
    ],
    B: [
      { name: "Equipo X", played: 3, won: 3, lost: 0, points: 9 },
      { name: "Equipo Y", played: 3, won: 2, lost: 1, points: 6 },
      { name: "Equipo Z", played: 3, won: 1, lost: 2, points: 3 },
    ],
    C: [],
    D: [],
  };

  // Datos de partidos por grupo
  // Datos de partidos por grupo ajustados para incluir "status"
const groupMatches: Record<GroupKey, { team1: string; team2: string; score1: number; score2: number; status: string }[]> = {
  A: [
    { team1: "Equipo A", team2: "Equipo B", score1: 2, score2: 1, status: "Finalizado" },
    { team1: "Equipo B", team2: "Equipo C", score1: 3, score2: 1, status: "En progreso" },
    { team1: "Equipo A", team2: "Equipo C", score1: 1, score2: 0, status: "Finalizado" },
  ],
  B: [
    { team1: "Equipo X", team2: "Equipo Y", score1: 3, score2: 2, status: "Finalizado" },
    { team1: "Equipo Y", team2: "Equipo Z", score1: 2, score2: 2, status: "En progreso" },
    { team1: "Equipo X", team2: "Equipo Z", score1: 4, score2: 0, status: "Finalizado" },
  ],
  C: [],
  D: [],
};

  const handleGroupChange = (group: GroupKey) => {
    setActiveGroup(group);
    setActiveTab("positions"); 
  };

  const renderPositions = () => (
    <table className="group-table">
      <thead>
        <tr>
          <th>Equipo</th>
          <th>PJ</th>
          <th>G</th>
          <th>P</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
        {groupStandings[activeGroup].map((team, index) => (
          <tr key={index}>
            <td>{team.name}</td>
            <td>{team.played}</td>
            <td>{team.won}</td>
            <td>{team.lost}</td>
            <td>{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderMatches = () => (
    <div className="match-list">
      {groupMatches[activeGroup]?.map((match, index) => (
        <MatchCard
          key={index}
          team1={match.team1}
          team2={match.team2}
          score1={match.score1}
          score2={match.score2}
          status={match.status}
        />
      ))}
    </div>
  );  

  return (
    <div className="tournament-container">

      {/* Botones de grupos */}
      <div className="group-buttons">
        {(["A", "B", "C", "D"] as GroupKey[]).map((group) => (
          <button
            key={group}
            onClick={() => handleGroupChange(group)}
            className={`group-button ${activeGroup === group ? "active" : ""}`}
          >
            Grupo {group}
          </button>
        ))}
      </div>

      {/* Pestañas para "Posiciones" y "Partidos" */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === "positions" ? "active" : ""}`}
          onClick={() => setActiveTab("positions")}
        >
          Posiciones
        </button>
        <button
          className={`tab ${activeTab === "matches" ? "active" : ""}`}
          onClick={() => setActiveTab("matches")}
        >
          Partidos
        </button>
      </div>

      {/* Contenido dinámico */}
      <div className="table-container">
        {activeTab === "positions" ? renderPositions() : renderMatches()}
      </div>
    </div>
  );
}

export default GroupStage;