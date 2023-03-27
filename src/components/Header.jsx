import React, { useEffect, useState } from "react";
import { fetchUserInfo } from "../apis/auth";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import burger from "../images/burger.png";
import LoginModal from "./Login/LoginModal";

function Header(props) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  function getEllipse() {
    return (
      <div className="ellipse_1">
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="3" r="3" fill="#F4FF81" />
        </svg>
      </div>
    );
  }

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    const items = document.getElementsByClassName("nav-item");
    const selected = document.getElementById(path);
    for (let i = 0; i < items.length; i++) {
      if (selected && items[i].id === path)
        items[i].className = "nav-item selected";
      else items[i].className = "nav-item";
    }
  });

  useEffect(() => {
    setLoading(true);
    fetchUserInfo().then((i) => {
      if (i.data.status === 200) {
        let data = i.data;
        props.setUserInfo({
          name: data.displayName
            ? data.displayName
            : "애플" + data.sub.split(".")[2],
          id: data.id ? data.id : data.sub,
          platform: data.provider ? data.provider : "apple",
          profile: data.profile,
          first: data.first,
        });
      }
    });
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendModal = (e) => {
    if (!e || e?.target.className.startsWith("sc-bczRLJ")) setModal(!modal);
    const body = document.getElementsByTagName("body")[0];
    if (modal) body.style.overflow = "";
    else body.style.overflow = "hidden";
  };

  const enableMenu = () => {
    const menuBtn = document.getElementById("nav-bar-mobile");
    setMenu(!menu);
    if (menu) {
      menuBtn.className = "nav-bar-disabled";
      setTimeout(() => {
        menuBtn.style.display = "none";
      }, 200);
    } else {
      menuBtn.className = "nav-bar-enabled";
      menuBtn.style.display = "block";
    }
  };

  const setLogo = () => {
    const now = new Date();
    let hour = now.getHours();
    if ((hour === 22 || hour === 10) && now.getMinutes() === 8) return burger;
    else return logo;
  };

  if (loading) return;
  return (
    <>
      <div id="header-wrap">
        <div id="header">
          <Link to="/" className="logo">
            <img src={setLogo()} alt="" />
          </Link>
          <div className="nav-bar">
            <Link to="/charts" className="nav-item" id="charts">
              {getEllipse()}CHARTS
            </Link>
            <Link to="/albums" className="nav-item" id="albums">
              {getEllipse()}ALBUMS
            </Link>
            <Link to="/artists" className="nav-item" id="artists">
              {getEllipse()}ARTISTS
            </Link>
            <Link to="/teams" className="nav-item" id="teams">
              {getEllipse()}TEAMS
            </Link>
            <div className="bar-right">
              <Link to="/support" className="nav-item" id="support">
                {getEllipse()}SUPPORT
              </Link>
              <div id="right-divider" />
              {!props.userInfo ? (
                <div className="nav-item" onClick={() => sendModal()}>
                  {getEllipse()}LOGIN
                </div>
              ) : (
                <div id="profile-area">
                  <div>
                    <img
                      src={`https://static.wakmusic.xyz/static/profile/${props.userInfo.profile}.png`}
                      alt=""
                      className="profile-image"
                    />
                  </div>
                  <div className="profile-name">{props.userInfo.name}</div>
                  <div id="profile-hover">
                    <svg
                      id="hover-svg"
                      width="7"
                      height="6"
                      viewBox="0 0 7 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.06699 0.75C3.25944 0.416667 3.74056 0.416667 3.93301 0.75L6.09808 4.5C6.29053 4.83333 6.04996 5.25 5.66506 5.25H1.33494C0.950036 5.25 0.709474 4.83333 0.901924 4.5L3.06699 0.75Z"
                        fill="#E3E5EB"
                      />
                    </svg>
                    <Link to="/mypage" className="profile-item">
                      MYPAGE
                    </Link>
                    <a href="/logout" className="profile-item">
                      LOGOUT
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div id="burger-btn" onClick={() => enableMenu()}>
          <div />
          <div />
          <div />
        </div>
        <div id="nav-bar-mobile" className="nav-bar-enabled">
          <div id="logo-wrap">
            <Link to="/" className="logo-mobile" onClick={() => enableMenu()}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-item-wrap">
            {!props.userInfo ? (
              <div
                className="nav-item"
                onClick={() => {
                  sendModal();
                  enableMenu();
                }}
              >
                로그인하기
              </div>
            ) : (
              <>
                <div id="mobile-profile-area">
                  <div>
                    <img
                      src={`https://static.wakmusic.xyz/static/profile/dulgi.png`}
                      alt=""
                      className="profile-image"
                    />
                  </div>
                  <div className="profile-name">UNKNOWN</div>
                </div>
                <Link
                  to="/mypage"
                  className="nav-item"
                  style={{ fontSize: "15px" }}
                >
                  MYPAGE
                </Link>
                <a
                  href="/logout"
                  className="nav-item"
                  style={{ fontSize: "15px" }}
                >
                  LOGOUT
                </a>
              </>
            )}
            <hr className="login-div" />
            <Link
              to="/charts"
              className="nav-item"
              id="charts"
              onClick={() => enableMenu()}
            >
              CHARTS
            </Link>
            <Link
              to="/albums"
              className="nav-item"
              id="albums"
              onClick={() => enableMenu()}
            >
              ALBUMS
            </Link>
            <Link
              to="/artists"
              className="nav-item"
              id="artists"
              onClick={() => enableMenu()}
            >
              ARTISTS
            </Link>
            <Link
              to="/teams"
              className="nav-item"
              id="teams"
              onClick={() => enableMenu()}
            >
              TEAMS
            </Link>
            <Link
              to="/support"
              className="nav-item"
              id="support"
              onClick={() => enableMenu()}
            >
              SUPPORT
            </Link>
          </div>
        </div>
      </div>
      {modal ? <LoginModal sendModal={sendModal} /> : null}
    </>
  );
}

export default Header;
