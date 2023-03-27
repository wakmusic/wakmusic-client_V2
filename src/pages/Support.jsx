import React from "react";
import Footer from "../components/Footer";


class Support extends React.Component {
    render() {
        return (
            <div className="container fadein" id="dark-container">
                <div className="page-title-wrap">
                    <div className="title-sub">WAKTAVERSE MUSIC</div>
                    <div className="title">SUPPORT</div>
                </div>
                <div className="title-line"/>
                <div className="support-text">
                    버그 제보: <a href="/bug" target="_blank" rel="noreferrer">여기를 클릭하세요</a><br/>
                    음악 추가 문의: <a href="/addmusic" rel="noreferrer" target="_blank">여기를 클릭하세요</a><br/><br/>
                    기타 문의: <a href="mailto:frin0911@naver.com" target="_blank" rel="noreferrer">frin0911@naver.com</a>
                    <br/><br/><br/>본 사이트에 등장하는 모든 내용은 허구이며, 페이지 하단의
                    왁엔터로와 왁엔터테인먼트 사옥은 실제로 존재하지 않습니다.<br/>
                    왁타버스 뮤직은 법적 효력을 보유한 상표명이 아닙니다.<br/>
                    왁타버스 뮤직은 본 사이트에서 제공하는 콘텐츠에 대해 저작권을 갖고있지 않으며, <br/>
                    본 사이트에 등장하는 모든 저작물에 대한 1차 저작권은 우왁굳(오영택)에게 귀속됩니다.<br/><br/>
                    왁타버스 뮤직은 왁타버스에서 제공하는 공식 콘텐츠가 아닙니다.<br/><br/><br/>
                    왁타버스 뮤직 팀에 속한 모든 팀원들은 <b>부아내비</b>(<i>부려먹는 게 아니라 내가 비빈거다</i>)라는 모토를 가슴에 새기고
                    일하고 있습니다.<br/><br/>
                    <div className="secret-text">
                        이스터에그를 찾아보세요<br/>
                        힌트<br/>
                        1. F12<br/>
                        2. 404<br/>
                        3. 버거시<br/>
                        4. 세구시(홈)<br/>
                        5. 16.10<br/>
                        6. 이세돌 로고<br/>
                        7. 릴파 SNS(암호: 릴파넴 XXX)<br/>
                        8. 비챤 사진<br/>
                        9. 재생목록 제목(암호: 아이네)<br/>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Support;