import { useEffect } from 'react';

{/*Ejemplo del set de datos que se deben de enviar al componente por medio de la API*/}
const data = 
  {
    "participant": [
        {
            "id": 0,
            "tournament_id": 0,
            "name": "Team A"
        },
        {
            "id": 1,
            "tournament_id": 0,
            "name": "Team B"
        },
        {
            "id": 2,
            "tournament_id": 0,
            "name": "Team C"
        },
        {
            "id": 3,
            "tournament_id": 0,
            "name": "Team D"
        },
        {
            "id": 4,
            "tournament_id": 0,
            "name": "Team E"
        },
        {
            "id": 5,
            "tournament_id": 0,
            "name": "Team F"
        },
        {
            "id": 6,
            "tournament_id": 0,
            "name": "Team G"
        },
        {
            "id": 7,
            "tournament_id": 0,
            "name": "Team H"
        }
    ],
    "stage": [
        {
            "id": 0,
            "tournament_id": 0,
            "name": "Single Elimination - Quarter Finals",
            "type": "single_elimination",
            "number": 1,
            "settings": {
                "size": 8,
                "seedOrdering": ["natural"],
                "grandFinal": "none",
                "matchesChildCount": 0
            }
        }
    ],
    "group": [
        {
            "id": 0,
            "stage_id": 0,
            "number": 1
        }
    ],
    "round": [
        {
            "id": 0,
            "number": 1,
            "stage_id": 0,
            "group_id": 0
        },
        {
            "id": 1,
            "number": 2,
            "stage_id": 0,
            "group_id": 0
        },
        {
            "id": 2,
            "number": 3,
            "stage_id": 0,
            "group_id": 0
        }
    ],
    "match": [
        {
            "id": 0,
            "number": 1,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 0,
            "child_count": 0,
            "status": 0,
            "opponent1": {
                "id": 0,
                "position": 1
            },
            "opponent2": {
                "id": 1,
                "position": 2
            }
        },
        {
            "id": 1,
            "number": 2,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 0,
            "child_count": 0,
            "status": 0,
            "opponent1": {
                "id": 2,
                "position": 3
            },
            "opponent2": {
                "id": 3,
                "position": 4
            }
        },
        {
            "id": 2,
            "number": 3,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 0,
            "child_count": 0,
            "status": 0,
            "opponent1": {
                "id": 4,
                "position": 5
            },
            "opponent2": {
                "id": 5,
                "position": 6
            }
        },
        {
            "id": 3,
            "number": 4,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 0,
            "child_count": 0,
            "status": 0,
            "opponent1": {
                "id": 6,
                "position": 7
            },
            "opponent2": {
                "id": 7,
                "position": 8
            }
        },
        {
            "id": 4,
            "number": 5,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 1,
            "child_count": 0,
            "status": 0,
            "opponent1": {
                "id": null
            },
            "opponent2": {
                "id": null
            }
        },
        {
            "id": 5,
            "number": 6,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 1,
            "child_count": 0,
            "status": 0,
            "opponent1": {
                "id": null
            },
            "opponent2": {
                "id": null
            }
        },
        {
            "id": 6,
            "number": 7,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 2,
            "child_count": 0,
            "status": 0,
            "opponent1": {
                "id": null
            },
            "opponent2": {
                "id": null
            }
        }
    ],
    "match_game": []
  }

  declare global {
    interface Window {
        bracketsViewer: any;
    }
  }

async function render() {
    const container = document.querySelector(".brackets-viewer");
    if (!container) {
      console.error("Container not found");
      return;
    }
    
    container.innerHTML = "";
  
    window.bracketsViewer.render({
    stages: data.stage,
    matches: data.match,
    matchGames: data.match_game,
    participants: data.participant,
    });
}

function MyBracket() {
    useEffect(() => {
        console.log("Render Brackets")
        render();
    }, []);
  
  return <div className="brackets-viewer"></div>
}

export default MyBracket;