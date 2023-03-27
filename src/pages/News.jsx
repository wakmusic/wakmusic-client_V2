import React from "react";
import Footer from "../components/Footer";
import InfiniteScroll from "../components/News/InfiniteScroll";


class News extends React.Component {
    componentDidMount() {
        window.scrollTo({top: 0});
    }

    render() {
        return (
            <div className="container fadein">
                <div className="news-body">
                    <div className="page-title-wrap">
                        <div className="title-sub">WAKTAVERSE MUSIC</div>
                        <div className="title">NEWS</div>
                    </div>
                    <div className="title-line"/>
                    <div id="news-section">
                        <InfiniteScroll/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default News;