import React from "react";
import Footer from "../components/Footer";
import FetchTeams from "../components/Teams/FetchTeams";


class Teams extends React.Component {
    render() {
        return (
            <div className="container fadein">
                <div id="ellipses">
                    <div id="ellipse_10"/>
                    <div id="ellipse_11"/>
                    <div id="ellipse_12"/>
                    <div id="ellipse_13"/>
                    <div id="ellipse_14"/>
                    <div id="ellipse_15"/>
                    <div id="ellipse_16"/>
                </div>

                <div className="teams-body">
                    <div className="page-title-wrap">
                        <div className="title-sub">WAKTAVERSE MUSIC</div>
                        <div className="title white">TEAMS</div>
                    </div>
                    <div className="teams-line"/>
                    <div id="teams-wrap">
                        <FetchTeams/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Teams;