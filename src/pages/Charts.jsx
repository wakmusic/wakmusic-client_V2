import React from "react";
import Footer from "../components/Footer";
import { getCharts } from "../apis/charts";
import FetchList from "../components/Charts/FetchList";
import FetchGraph from "../components/Charts/FetchGraph";
import { Ellipse } from "../components/Utils";

class Charts extends React.Component {
  state = {
    type: "list",
    order: "total",
    data: [],
  };

  componentDidMount() {
    window.scrollTo({ top: 0 });
    getCharts({ type: this.state.order, limit: "100" }).then((item) => {
      this.setState({ data: item.data });
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.order !== this.state.order) {
      getCharts({ type: this.state.order, limit: "100" }).then((item) => {
        this.setState({ data: item.data });
      });
    }
  }

  changeType(type) {
    let rev;
    if (type === "list") rev = "graph";
    else rev = "list";
    this.setState({ type: type, order: "total" });

    const el = document.getElementById(type);
    const revEl = document.getElementById(rev);
    el.className = "type-selected";
    revEl.className = "";
  }

  setType = (type) => {
    this.setState({ order: type });
  };

  setData = (item) => {
    this.setState({ data: item });
  };

  render() {
    return (
      <div className="container fadein" id="dark-container">
        <div className="page-title-wrap">
          <div className="title-sub">WAKTAVERSE MUSIC</div>
          <div className="title">CHARTS</div>
        </div>
        <div className="title-line" />
        <div id="select-type">
          <div
            id="list"
            className="type-selected"
            onClick={() => this.changeType("list")}
          >
            차트
          </div>
          <div id="graph" onClick={() => this.changeType("graph")}>
            그래프
          </div>
        </div>
        {this.state.type === "list" ? (
          <FetchList
            data={this.state.data}
            setType={this.setType}
            setData={this.setData}
            type={this.state.order}
          />
        ) : (
          <FetchGraph
            data={this.state.data}
            setType={this.setType}
            setData={this.setData}
            type={this.state.order}
          />
        )}
        <Ellipse />
        <Footer />
      </div>
    );
  }
}

export default Charts;
