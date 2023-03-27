import React, { useState, useEffect, useRef } from "react";
import { detailPlaylist } from "../apis/playlist";
import { getCharts } from "../apis/charts";
import { getSearchSongs } from "../apis/songs";
import Arrow from "../images/Arrow";
import FindIcon from "../images/FindIcon.svg";
import MusicBox from "../components/AddMusic/MusicBox";
import * as S from "../components/AddMusic/styled";
import UpdateTime from "../components/Charts/UpdateTime";
import SortTypeList from "../components/Artists/SortTypeList";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import { Ellipse } from "../components/Utils";

const AddMusic = () => {
  const categoryRef = useRef();
  const findCategory = [
    {
      name: "노래명",
      category: "title",
    },
    {
      name: "가수명",
      category: "artist",
    },
    {
      name: "조교명",
      category: "remix",
    },
  ];
  const [menuValue, setMenuValue] = useState({
    name: "노래명",
    category: "title",
  });
  const [type, setType] = useState("title");
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState("popular");
  const [playlistInfo, setPlaylistInfo] = useState({});
  const [menuBool, setMenuBool] = useState(false);
  const [musicList, setMusicList] = useState([]);
  const [prevMusicList, setPrevMusicList] = useState([]);
  const [preType, setPreType] = useState("");
  const [alertText, setAlert] = useState("");

  useEffect(() => {
    getChartMusic();
    getPlaylistdetail();
  }, []);

  const getPlaylistdetail = () => {
    const playlistKey = localStorage.getItem("playlistKey");
    detailPlaylist(playlistKey).then((res) => {
      setPlaylistInfo(res.data);
      localStorage.setItem("playlistKey", res.data.key);
    });
  };

  const changeMenuBool = () => {
    setMenuBool(!menuBool);
  };

  //검색 키워드 변경 함수
  const onChangeKeyword = (e) => {
    const { value } = e.target;
    setKeyword(value);
    setPrevMusicList([]);
  };

  useEffect(() => {
    if (!keyword && prevMusicList !== musicList) getChartMusic();
    else if (keyword && (prevMusicList !== musicList || preType !== type)) {
      getSearchSongs({
        params: {
          type: type,
          sort: sort,
          keyword: keyword,
        },
      }).then((res) => {
        setMusicList(res.data);
        setPrevMusicList(res.data);
        setPreType(type);
      });
    }
  });

  //차트 가져오는 함수
  const getChartMusic = () => {
    getCharts({ type: "total", limit: 30 }).then((res) => {
      setMusicList(res.data);
      setPrevMusicList(res.data);
    });
  };

  const handleOnChangeSelectValue = (e) => {
    const { name } = e.target;
    setMenuValue(findCategory[name]);
    setType(findCategory[name].category);
  };

  const sendAlert = (text) => {
    setAlert(text);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  return (
    <S.Container>
      {alertText !== "" && (
        <div className="alert-wrap">
          <div className="alert">{alertText}</div>
        </div>
      )}
      <div className="page-title-wrap">
        <div className="title-sub">WAKTAVERSE MUSIC</div>
        <div className="title">재생목록 노래 추가</div>
      </div>
      <div className="title-line" />
      <S.MainFindInputBox>
        <S.FindInputFilter onClick={changeMenuBool}>
          {menuBool && (
            <S.FilterMenu>
              {findCategory.map((item, index) => {
                return (
                  <S.Menu
                    name={index}
                    onClick={handleOnChangeSelectValue}
                    key={index}
                  >
                    {item.name}
                  </S.Menu>
                );
              })}
            </S.FilterMenu>
          )}
          <div ref={categoryRef}>{menuValue.name}</div>
          <Arrow ArrowPower={true} />
        </S.FindInputFilter>
        <S.FindInput
          onChange={onChangeKeyword}
          placeholder="검색어를 입력해 주세요."
        />
        <S.FindIcon src={FindIcon} />
      </S.MainFindInputBox>
      <S.appendMusicLayout>
        <S.MusicFilterLayout>
          <S.DropdownLayout>
            <Dropdown
              setType={setSort}
              setData={setMusicList}
              elements={SortTypeList}
            />
          </S.DropdownLayout>
          <S.UpdateText>
            <UpdateTime type="total" />
          </S.UpdateText>
        </S.MusicFilterLayout>
        <S.MusicInfoBox>
          <S.MusicInfoName>곡정보</S.MusicInfoName>
          <S.MusicInfoText color="#080F34" right="95px">
            조회수
          </S.MusicInfoText>
          <S.MusicInfoText color="#080F34" right="205px">
            출시일
          </S.MusicInfoText>
        </S.MusicInfoBox>
        <div className="playlist-wrap" id="ad">
          {musicList.map((item, index) => {
            return (
              <MusicBox
                setPlaylistInfo={setPlaylistInfo}
                playlistInfo={playlistInfo}
                item={item}
                key={index}
                color={
                  index % 2 === 0
                    ? "rgba(140, 149, 175, 0.1)"
                    : "rgba(255, 255, 255, 0.4)"
                }
                sendAlert={sendAlert}
              />
            );
          })}
        </div>
      </S.appendMusicLayout>
      <Ellipse />
      <Footer />
    </S.Container>
  );
};

export default AddMusic;
