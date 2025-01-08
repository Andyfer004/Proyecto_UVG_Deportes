import React from "react";
import { Bracket, RoundProps } from "@g-loot/react-tournament-brackets";

function TournamentBracket() {
  // Datos del bracket
  const rounds: RoundProps[] = [
    {
      title: "Quarter Finals",
      seeds: [
        {
          id: 1,
          teams: [
            { id: 1, name: "Equipo A" },
            { id: 2, name: "Equipo B" },
          ],
          scores: [
            { score: 3, teamId: 1 },
            { score: 1, teamId: 2 },
          ],
          date: new Date().toString(),
        },
        {
          id: 2,
          teams: [
            { id: 3, name: "Equipo C" },
            { id: 4, name: "Equipo D" },
          ],
          scores: [
            { score: 2, teamId: 3 },
            { score: 4, teamId: 4 },
          ],
          date: new Date().toString(),
        },
      ],
    },
    {
      title: "Semi Finals",
      seeds: [
        {
          id: 3,
          teams: [
            { id: 1, name: "Equipo A" },
            { id: 4, name: "Equipo D" },
          ],
          scores: [
            { score: 3, teamId: 1 },
            { score: 2, teamId: 4 },
          ],
          date: new Date().toString(),
        },
      ],
    },
    {
      title: "Final",
      seeds: [
        {
          id: 4,
          teams: [
            { id: 1, name: "Equipo A" },
            { id: null, name: "Por decidir" },
          ],
          scores: [
            { score: 0, teamId: 1 },
            { score: 0, teamId: null },
          ],
          date: new Date().toString(),
        },
      ],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Bracket rounds={rounds} />
    </div>
  );
}

export default TournamentBracket;