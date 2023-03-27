import React, { useState, useEffect } from "react";
import { getTeam } from "../../apis/team";

const FetchTeams = () => {
  const [teamList, setTeam] = useState([]);

  useEffect(() => {
    getTeam().then((item) => {
      setTeam(item.data);
    });
  }, []);

  const getMemberElement = (g, item, index) => {
    return (
      <div className="team-item" key={index}>
        <div className={g.includes("special") ? `${g} team-name` : "team-name"}>
          {item.name}
        </div>
        {item.role && (
          <div
            className="team-role"
            id={item.role === "팀장" ? "team-manager" : null}
          >
            {item.role}
          </div>
        )}
      </div>
    );
  };

  const getTeamMember = (g) => {
    let team = [];

    teamList.forEach((item, index) => {
      if (item.team === g) {
        if (g.includes("special")) {
          const newItems = item.name.split(", ");
          newItems.forEach((it, idx) => {
            let newItem = {
              name: it,
              role: null,
            };
            team.push(getMemberElement(g, newItem, idx));
          });
        } else {
          team.push(getMemberElement(g, item, index));
        }
      }
    });
    return team;
  };

  const getTeams = () => {
    let teams = [];
    let group = {
      website: "웹사이트",
      weekly: "주간 왁뮤차트",
      app: "앱",
      special: "Special Thanks",
    };
    let previous;

    teamList.forEach((item, index) => {
      if (previous !== item.team) {
        teams.push(
          <div className="teams fadein" key={index}>
            <div className="h2">{group[item.team]}</div>
            <div className="team-members">{getTeamMember(item.team)}</div>
          </div>
        );
        previous = item.team;
      }
    });
    return teams;
  };

  if (!teamList) return <div className="loading-dark" />;
  return getTeams();
};

export default FetchTeams;
