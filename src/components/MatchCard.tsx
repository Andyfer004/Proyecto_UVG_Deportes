import "./MatchCard.css";


type MatchCardProps = {
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  status: string;
  onClick: () => void; // Agregamos onClick
};

function MatchCard({ team1, team2, score1, score2, status, onClick }: MatchCardProps) {
  return (
    <div className="match-card" onClick={onClick}>
      {/* Encabezado */}
      <div className="match-header">
        <span>BO1</span>
        <span className={`match-status ${status.toLowerCase()}`}>
          {status === "En progreso" ? "En Progreso" : status}
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