import React from "react";
import Footer from "../components/Footer";
import FetchArtists from "../components/Artists/FetchArtists";


class Artists extends React.Component {
    state = {
        x: 0
    }

    callbackFunc = (e) => {
        let x = e.target.scrollLeft;
        this.setState({x: x});
        let currentWidth = e.target.clientWidth;
        let width = e.target.scrollWidth;
        const arrowLeft = document.getElementById('arrow-left');
        const arrowRight = document.getElementById('arrow-right');

        if (x > 0) arrowLeft.className = "arrow-active";
        if (x <= 0) arrowLeft.className = "arrow-inactive";
        if (x + currentWidth >= width) arrowRight.className = "arrow-inactive";
        if (x + currentWidth < width) arrowRight.className = "arrow-active";
    }

    scroll = (t) => {
        const section = document.getElementById('select-bar');
        if (section) {
            let currentWidth = section.clientWidth;
            let x = this.state.x;
            const arrowLeft = document.getElementById('arrow-left');
            const arrowRight = document.getElementById('arrow-right');

            if (t === "right" && arrowRight.className !== "arrow-inactive") {
                this.setState({x: x + currentWidth});
                section.scrollTo({left: x + currentWidth, behavior: 'smooth'});

            } else if (t === "left" && arrowLeft.className !== "arrow-inactive") {
                this.setState({x: x - currentWidth});
                section.scrollTo({left: x - currentWidth, behavior: 'smooth'});

            }
        }
        return true;
    }

    render() {
        return (
            <div className="container fadein" id="dark-container">
                <div className="page-title-wrap">
                    <div className="title-sub">WAKTAVERSE MUSIC</div>
                    <div className="title">ARTISTS</div>
                </div>
                <div className="title-line"/>
                <FetchArtists callbackFunc={this.callbackFunc} scroll={this.scroll}/>
                <Footer/>
            </div>
        );
    }
}

export default Artists;