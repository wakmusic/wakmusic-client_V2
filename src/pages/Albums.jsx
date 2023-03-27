import React from "react";
import Footer from "../components/Footer";
import FetchAlbums from "../components/Albums/FetchAlbums";


class Albums extends React.Component {
    render() {
        return (
            <div className="container fadein" id="dark-container">
                <div className="page-title-wrap">
                    <div className="title-sub">WAKTAVERSE MUSIC</div>
                    <div className="title">ALBUMS</div>
                </div>
                <div className="title-line"/>
                <FetchAlbums/>
                <Footer/>
            </div>
        );
    }
}

export default Albums;