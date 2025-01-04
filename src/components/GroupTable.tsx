import "./GroupTable.css";
import { useState } from "react";

type Equipo = {
  id: number;
  nombre: string;
  pj: number; // Partidos Jugados
  g: number;  // Ganados
  e: number;  // Empatados
  p: number;  // Perdidos
  pts: number; // Puntos
};

// Props iniciales (para los grupos)
const grupos = ["Grupo A", "Grupo B", "Grupo C", "Grupo D"];

function GroupStage() {
  const [grupoSeleccionado, setGrupoSeleccionado] = useState("Grupo A");
  const [vistaActual, setVistaActual] = useState("Posiciones"); // Posiciones o Partidos

  // Datos simulados
  const equipos: Equipo[] = [
    { id: 1, nombre: "Equipo 1", pj: 3, g: 2, e: 0, p: 1, pts: 6 },
    { id: 2, nombre: "Equipo 2", pj: 3, g: 1, e: 1, p: 1, pts: 4 },
    { id: 3, nombre: "Equipo 3", pj: 3, g: 0, e: 2, p: 1, pts: 2 },
  ];

  return (
    <div className="group-stage-container">
      {/* Pestañas de Grupos */}
      <div className="tabs">
        {grupos.map((grupo) => (
          <button
            key={grupo}
            className={`tab-button ${
              grupoSeleccionado === grupo ? "active" : ""
            }`}
            onClick={() => setGrupoSeleccionado(grupo)}
          >
            {grupo}
          </button>
        ))}
      </div>

      {/* Botones de Alternar Vista */}
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${
            vistaActual === "Posiciones" ? "active" : ""
          }`}
          onClick={() => setVistaActual("Posiciones")}
        >
          Posiciones
        </button>
        <button
          className={`toggle-button ${
            vistaActual === "Partidos" ? "active" : ""
          }`}
          onClick={() => setVistaActual("Partidos")}
        >
          Partidos
        </button>
      </div>

      {/* Contenido */}
      <div className="content">
        {vistaActual === "Posiciones" ? (
          <table className="group-table">
            <thead>
              <tr>
                <th>Equipo</th>
                <th>PJ</th>
                <th>G</th>
                <th>E</th>
                <th>P</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              {equipos.map((equipo) => (
                <tr key={equipo.id}>
                  <td>{equipo.nombre}</td>
                  <td>{equipo.pj}</td>
                  <td>{equipo.g}</td>
                  <td>{equipo.e}</td>
                  <td>{equipo.p}</td>
                  <td>{equipo.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="partidos">
            {/* Aquí puedes agregar la lógica para mostrar partidos */}
            <p>Aquí aparecerán los partidos del {grupoSeleccionado}.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GroupStage;