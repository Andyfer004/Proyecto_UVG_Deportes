import "./MatchCard.css";

function MatchCard({ team1, team2, score1, score2, status }) {
  return (
    <div className="match-card">
      {/* Encabezado */}
      <div className="match-header">
        <span>BO3</span>
        <span className={`match-status ${status.toLowerCase()}`}>
          {status === "En progreso" ? "NOW PLAYING" : status}
        </span>
      </div>

      {/* Equipos */}
      <div className="teams">
        <div className={`team ${score1 > score2 ? "winner" : ""}`}>
          <span className="team-name">{team1}</span>
          <span className="score">{score1}</span>
        </div>
        <div className="vs">VS</div>
        <div className={`team ${score2 > score1 ? "winner" : ""}`}>
          <span className="team-name">{team2}</span>
          <span className="score">{score2}</span>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;

