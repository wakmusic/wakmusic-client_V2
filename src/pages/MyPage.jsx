import React, { useState, useEffect } from "react";
import { fetchUserInfo } from "../apis/auth";
import {
  fetchPlaylist,
  deletePlaylist,
  postPlaylist,
  removeSubscriberPlaylist,
} from "../apis/playlist";
import { useLocation, useNavigate } from "react-router-dom";
import FetchProfile from "../components/MyPage/FetchProfile";
import PlaylistSection from "../components/MyPage/PlaylistSection";
import Modal from "../components/Modal/Modal";
import * as S from "../components/MyPage/styled";
import Footer from "../components/Footer";
import { Ellipse } from "../components/Utils";

const MyPage = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [alertText, setAlert] = useState("");
  const [platformText, setPlatformText] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [plusModalBool, setPlusModalBool] = useState(false);
  const [deleteModalBool, setDeleteModalBool] = useState(false);
  const [playlistBundle, setPlaylistBundle] = useState([]);
  const [text, setText] = useState("");
  // {key, title, creator, platform, image}

  useEffect(() => {
    fetchUserInfo().then((res) => {
      let data = res.data;
      if (data.status === 401) {
        navigate("/");
      }

      let id = data.id ? data.id : data.sub;
      let platform = data.provider ? data.provider : "apple";

      setUserInfo({
        name: data.displayName
          ? data.displayName
          : "애플" + data.sub.split(".")[2],
        id: id,
        platform: platform,
        profile: data.profile,
        first: data.first,
      });

      localStorage.setItem("clientId", id);
      getPlaylist(id);
      platformSelect(platform);
      if (
        data.first &&
        location.state?.first === undefined &&
        data.profile === "default"
      ) {
        navigate("/profile");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //플레이 리스트 목록 가져오기
  const getPlaylist = (userId) => {
    fetchPlaylist(userId)
      .then((res) => {
        setPlaylistBundle(res.data.playlist);
      })
      .catch((res) => {
        sendAlert("오류가 발생하였습니다.");
      });
  };

  //플레이 리스트 삭제 함수
  const deletePlayList = () => {
    let sel = playlistBundle.find(
      (i) => i.key === localStorage.getItem("playlistKey")
    );
    if (sel.clientId === userInfo.id) {
      deletePlaylist(localStorage.getItem("playlistKey")).then(() => {
        sendAlert("재생목록이 삭제되었습니다.");
        setTimeout(() => window.location.reload(), 500);
      });
    } else {
      removeSubscriberPlaylist(localStorage.getItem("playlistKey"), {
        subscriberId: userInfo.id,
      }).then((res) => {
        sendAlert("재생목록이 삭제되었습니다.111");
        setTimeout(() => window.location.reload(), 500);
      });
    }
  };

  //추가할 플레이리스트 이름 설정 함수
  const onChangePlaylistName = (e) => {
    if (e.target.value.length > 12) setText("12자 이내로 입력해 주세요.");
    else if (e.target.value === "158") {
      setText("제목이 너무 짧습니다.");
      setPlaylistName(e.target.value);
    } else if (e.target.value === "159") {
      setText("이제 적당하군요");
      setPlaylistName(e.target.value);
    } else {
      setText("");
      setPlaylistName(e.target.value);
    }
  };

  //플레이리스트 추가 요청 API
  const postAppendPlaylist = () => {
    if (playlistName.trim()) {
      postPlaylist({
        title: playlistName,
        creator: userInfo.name,
        platform: userInfo.platform,
        image: Math.floor(Math.random() * 11) + 1,
        songlist: [],
        public: false, //true, false
        clientId: userInfo.id,
      })
        .then((res) => {
          setPlusModalBool(false);
          setPlaylistName("");
          window.location.reload();
        })
        .catch(() => {
          setText("재생목록을 생성할 수 없습니다.");
        });
    } else {
      setText("재생목록의 이름을 입력해 주세요.");
      setPlaylistName("");
    }
  };

  //유저 로그인 플랫폼 표시 글 세팅 함수
  const platformSelect = (platform) => {
    switch (platform) {
      case "google":
        setPlatformText("구글로 로그인 중");
        break;
      case "naver":
        setPlatformText("네이버로 로그인 중");
        break;
      case "apple":
        setPlatformText("애플로 로그인 중");
        break;
      default:
        break;
    }
  };

  const sendAlert = (text) => {
    setAlert(text);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  if (!userInfo) return;
  return (
    <>
      <S.Container>
        {alertText !== "" && (
          <div className="alert-wrap">
            <div className="alert">{alertText}</div>
          </div>
        )}
        {plusModalBool && (
          <Modal
            leftText="취소"
            leftEvent={() => setPlusModalBool(false)}
            rightText="생성"
            rightEvent={postAppendPlaylist}
          >
            <S.ModalTitle>재생목록 생성</S.ModalTitle>
            <S.IntroduceText>
              생성할 재생목록의 이름을 입력해 주세요.
            </S.IntroduceText>
            <S.NameInput
              onChange={onChangePlaylistName}
              value={playlistName}
              placeholder="이름을 입력해 주세요."
            />
            {text !== "" && <div id="text-limit">{text}</div>}
          </Modal>
        )}

        {deleteModalBool && (
          <Modal
            leftText="취소"
            leftEvent={() => setDeleteModalBool(false)}
            rightText="삭제"
            rightEvent={deletePlayList}
          >
            <S.ModalTextLayout>
              <S.ModalTitle>삭제</S.ModalTitle>
              <S.ModalText>정말 삭제하시겠습니까?</S.ModalText>
            </S.ModalTextLayout>
          </Modal>
        )}

        <div className="page-title-wrap">
          <div className="title-sub">WAKTAVERSE MUSIC</div>
          <div className="title">내 재생목록</div>
        </div>
        <div className="title-line" />
        <S.InfoLayout>
          <FetchProfile userInfo={userInfo} platformText={platformText} />
          <PlaylistSection
            setPlusModalBool={setPlusModalBool}
            playlistBundle={playlistBundle}
            setDeleteModalBool={setDeleteModalBool}
            userInfo={userInfo}
          />
        </S.InfoLayout>
        <Ellipse />
      </S.Container>
      <Footer />
    </>
  );
};

export default MyPage;
