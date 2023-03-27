import React from "react";
import SetProfile from "../components/Profile/SetProfile";
import * as S from "../components/Profile/styled";
import Footer from "../components/Footer";

const Profile = ({ userInfo }) => {
  const profileKinds = [
    "bat",
    "ddong",
    "dulgi",
    "gorani",
    "jupock",
    "panchi",
    "segyun",
    "ifari",
  ];

  if (!userInfo) window.location.href = "/";
  return (
    <S.MainLayout>
      <div className="page-title-wrap">
        <div className="title-sub">WAKTAVERSE MUSIC</div>
        <div className="title">프로필을 선택하세요.</div>
      </div>
      <div className="title-line" />
      <S.ProfileLayout>
        {profileKinds.map((item, index) => {
          const link = `https://static.wakmusic.xyz/static/profile/${item}.png`;
          return (
            <SetProfile
              userInfo={userInfo}
              link={link}
              item={item}
              key={index}
            />
          );
        })}
      </S.ProfileLayout>
      <Footer />
    </S.MainLayout>
  );
};

export default Profile;
