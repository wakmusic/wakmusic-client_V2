import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./stylesheets/index.css";
import "./stylesheets/main.css";
import "./stylesheets/artist.css";
import Main from "./pages/Main";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Teams from "./pages/Teams";
import Charts from "./pages/Charts";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Player from "./pages/Player";
import MyPage from "./pages/MyPage";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import Playlist from "./pages/Playlist";
import AddMusic from "./pages/AddMusic";
import GetArtistPage from "./components/Artists/GetArtistPage";

function App() {
  const [userInfo, setUserInfo] = React.useState();

  return (
    <Router>
      <Header userInfo={userInfo} setUserInfo={setUserInfo} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<GetArtistPage />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/player/:id" element={<Player />} />
        <Route
          path="/mypage"
          element={<MyPage userInfo={userInfo} setUserInfo={setUserInfo} />}
        />
        <Route path="/profile" element={<Profile userInfo={userInfo} />} />
        <Route path="/support" element={<Support />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/add" element={<AddMusic />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
