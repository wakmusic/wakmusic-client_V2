import React, { useState, useEffect, useRef } from "react";
import { detailPlaylist, editPlaylist } from "../apis/playlist";
import { getSearchSongs } from "../apis/songs";
import Modal from "../components/Modal/Modal";
import InfoSection from "../components/Playlist/InfoSection";
import MusicSection from "../components/Playlist/MusicSection";
import * as S from "../components/Playlist/styled";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Ellipse, setMetaTags } from "../components/Utils";

const Playlist = () => {
  const linkInputRef = useRef();
  const navigate = useNavigate();
  const params = useParams();
  const playlistKey = params.id;
  const [playlistCertified, setPlaylistCertified] = useState(true);
  const [copyModalBool, setCopyModalBool] = useState(false);
  const [modifyModalBool, setModifyModalBool] = useState(false);
  const [deleteModalBool, setDeleteModalBool] = useState(false);
  const [playlistInfo, setPlaylistInfo] = useState({});
  const [musicList, setMusicList] = useState([]);
  const [text, setText] = useState("");
  const listLink = `bbrd.me/${playlistKey}`;
  const [alertText, setAlert] = useState("");

  useEffect(() => {
    getPlaylistdetail();
  }, []);

  //플레이 리스트 상세정보 가져오는 함수
  const getPlaylistdetail = () => {
    detailPlaylist(playlistKey).then((res) => {
      setPlaylistInfo(res.data);
      localStorage.setItem("playlistKey", res.data.key);
      getMusicList(res.data.songlist);
      if (
        res.data.clientId !== localStorage.getItem("clientId") ||
        !localStorage.getItem("clientId")
      ) {
        if (!res.data.public) {
          navigate("/");
        }
        setPlaylistCertified(false);
      }
    });
  };

  //ids로 곡정보 받아오기
  const getMusicList = (songlist) => {
    if (songlist !== []) {
      const musicKeyList = songlist.join();
      getSearchSongs({
        params: {
          type: "ids",
          sort: "new",
          keyword: musicKeyList,
        },
      }).then((res) => {
        setMusicList(res.data);
      });
    }
  };

  //playlistInfo title 변경 함수
  const playlistTitleChange = (e) => {
    if (e.target.value.length > 12) setText("12자 이내로 입력해 주세요.");
    else {
      setText("");
      setPlaylistInfo({ ...playlistInfo, title: e.target.value });
    }
  };

  const changePlaylistTitle = () => {
    editPlaylist(playlistInfo.key, playlistInfo).then((res) => {
      setModifyModalBool(false);
    });
  };

  //플레이 리스트 내에 노래 삭제 함수
  const deleteMusic = () => {
    const musicId = localStorage.getItem("musicId");
    let copySonglist = playlistInfo.songlist.filter((x) => {
      return x !== musicId;
    });
    editPlaylist(playlistInfo.key, {
      title: playlistInfo.title,
      image: playlistInfo.image,
      songlist: copySonglist,
      public: playlistInfo.public,
      clientId: playlistInfo.clientId,
    }).then((res) => {
      sendAlert("노래가 삭제되었습니다.");
      localStorage.removeItem("musicId");
      setDeleteModalBool(false);
      setTimeout(() => window.location.reload(), 500);
    });
  };

  //플레이리스트 주소 복사
  const onCopyLink = () => {
    navigator.clipboard.writeText(listLink).then();
    sendAlert("복사되었습니다");
  };

  const sendAlert = (text) => {
    setAlert(text);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  useEffect(() => {
    console.log(1);
    if (playlistInfo && playlistInfo.title && playlistInfo.creator) {
      setMetaTags({
        title: `${playlistInfo.title} - WAKTAVERSE Music`,
        description: `${playlistInfo.creator}님께서 공유한 재생목록입니다.`,
      });
    }
    return () => {
      setMetaTags({
        title: "WAKTAVERSE Music",
        description:
          "왁타버스 뮤직 핫 100, 노래 목록 등 왁엔터테인먼트 소속 가수들의 각종 음반 정보와 뉴스 제공",
      });
    };
  }, [playlistInfo]);

  return (
    <S.Container>
      {alertText !== "" && (
        <div className="alert-wrap">
          <div className="alert">{alertText}</div>
        </div>
      )}

      {modifyModalBool &&
        playlistInfo.clientId === localStorage.getItem("clientId") && (
          <Modal
            leftText="취소"
            leftEvent={() => setModifyModalBool(false)}
            rightText="변경"
            rightEvent={changePlaylistTitle}
          >
            <S.ModalTitle>재생목록 이름 변경</S.ModalTitle>
            <S.IntroduceText>
              변경할 재생목록의 이름을 입력해 주세요.
            </S.IntroduceText>
            <S.NameInput
              onChange={playlistTitleChange}
              value={playlistInfo.title}
              placeholder="이름을 입력해 주세요."
            />
            {text !== "" && <div id="text-limit">{text}</div>}
          </Modal>
        )}
      {copyModalBool && (
        <Modal
          leftText="닫기"
          leftEvent={() => {
            setCopyModalBool(false);
            localStorage.removeItem("musicId");
          }}
          rightText="복사"
          rightEvent={onCopyLink}
        >
          <S.ModalTitle>재생목록 공유</S.ModalTitle>
          <S.ModalText>나만의 재생목록을 공유해 보세요!</S.ModalText>
          <S.PlaylistLink ref={linkInputRef} onClick={onCopyLink}>
            {listLink}
          </S.PlaylistLink>
        </Modal>
      )}
      {deleteModalBool && (
        <Modal
          leftText="취소"
          leftEvent={() => setDeleteModalBool(false)}
          rightText="삭제"
          rightEvent={deleteMusic}
        >
          <S.ModalTitle>삭제</S.ModalTitle>
          <S.ModalText>정말 삭제하시겠습니까?</S.ModalText>
        </Modal>
      )}

      <div className="page-title-wrap">
        <div className="title-sub">WAKTAVERSE MUSIC</div>
        <div className="title fadein">재생목록</div>
      </div>
      <div className="title-line" />
      <S.InfoLayout>
        <InfoSection
          playlistCertified={playlistCertified}
          setPlaylistInfo={setPlaylistInfo}
          setModifyModalBool={setModifyModalBool}
          playlistInfo={playlistInfo}
          setCopyModalBool={setCopyModalBool}
          sendAlert={sendAlert}
        />
        <MusicSection
          playlistCertified={playlistCertified}
          setDeleteModalBool={setDeleteModalBool}
          playlistInfo={playlistInfo}
          setPlaylistInfo={setPlaylistInfo}
          musicList={musicList}
          sendAlert={sendAlert}
        />
      </S.InfoLayout>
      <Ellipse />
      <Footer />
    </S.Container>
  );
};

export default Playlist;
