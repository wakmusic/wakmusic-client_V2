import React from "react"
import {useParams} from "react-router-dom";
import {Ellipse} from "../Utils";
import Footer from "../Footer";
import Timer from "./Timer";

const GetArtistPage = () => {
    const params = useParams();
    const data = [
        {
            id: 'oRiQHxft2mY',
            title: 'Jeontu Enough',
            artist: '릴컬로이드',
            date: '2022.03.09',
            views: '1,202,700'
        },
        {
            id: 'Zcr5xZ2H64A',
            title: '전투메이로이드',
            artist: '릴컬로이드',
            date: '2022.03.09',
            views: '839,700'
        },
        {
            id: 'djl-pROUR50',
            title: '전투메이드 챌린지',
            artist: '아컬로이드',
            date: '2022.01.58',
            views: '731,700'
        },
        {
            id: 'wXweihsAJhI',
            title: '뇨! 우리는 전투메이드단☆',
            artist: '릴컬로이드',
            date: '2022.03.09',
            views: '492,700'
        },
        {
            id: 'DPEtmqvaKqY',
            title: '부코서비스',
            artist: '릴컬로이드',
            date: '2022.03.09',
            views: '300,700'
        },
        {
            id: '7IcafhbXprU',
            title: '전투메이등',
            artist: '아컬로이드',
            date: '2022.01.58',
            views: '271,700'
        },
        {
            id: '--Go33WYnqw',
            title: 'Jeontumaid in Buko',
            artist: '챤컬로이드',
            date: '2022.01.16',
            views: '208,700'
        },
        {
            id: 'Q0LWEyWI8-E',
            title: '전투참치',
            artist: '징컬로이드',
            date: '2022.10.09',
            views: '186,700'
        },
        {
            id: 'tZtskWzmpXs',
            title: '드리밍전투',
            artist: '릴컬로이드',
            date: '2022.03.09',
            views: '168,700'
        },
        {
            id: 'zqLrUp4rnxU',
            title: '전투바라시',
            artist: '릴컬로이드',
            date: '2022.03.09',
            views: '164,700'
        },
        {
            id: 'XIE3HSUEltU',
            title: '전전전(투메이드)세',
            artist: '아컬로이드',
            date: '2022.01.58',
            views: '158,700'
        },
        {
            id: 'raEprM924Ek',
            title: '멜론 36위 전투메이드',
            artist: '릴컬로이드',
            date: '2022.03.09',
            views: '153,700'
        },
        {
            id: 'f7B1MYkxCX4',
            title: '전투메이드키타치',
            artist: '릴컬로이드',
            date: '2022.03.09',
            views: '150,700'
        }
    ]

    if (params.id === "isedol") return <Timer/>
    else if (params.id === "lilpaaaaaa")
        return (
            <div className="container fadein" id="dark-container">
                <div className="page-title-wrap">
                    <div className="title-sub">WAKTAVERSE MUSIC</div>
                    <div className="title">JEONTU-MAID CHARTS</div>
                </div>
                <div className="title-line"/>
                <div className="charts-body" style={{margin: '-130px auto 130px'}}>
                    <div className="updated fadein" style={{marginLeft: '-100px'}}>최종 업데이트 | 2021.12.17</div>
                    <div className="charts-label">
                        <div id="charts-rank">순위</div>
                        <div id="charts-info">곡정보</div>
                        <div id="charts-before">하루전</div>
                        <div id="charts-date">발매일</div>
                        <div id="charts-views">조회수</div>
                    </div>
                    <div className="charts-wrap fadein">
                        {data.map((item, index) => {
                            return (
                                <div className={index % 2 === 0 ? "chart-item bg-dark fadein" : "chart-item fadein"}
                                     key={index}>
                                    <div className="chart-rank">{index + 1}</div>
                                    <div className="chart-fluctuate none">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1" y="5" width="10" height="2" rx="1" fill="#202F61"/>
                                        </svg>
                                    </div>
                                    <div className="chart-image-wrap">
                                        <div className="chart-image-box">
                                            <img src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`} alt=""
                                                 className="chart-image"/>
                                        </div>
                                        <div className="chart-background">
                                            <svg width="54" height="54" viewBox="0 0 44 44" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="22" cy="22" r="22" fill="black"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="chart-title-wrap">
                                        <div className="chart-title">{item.title}</div>
                                    </div>
                                    <div className="chart-artist-wrap">
                                        <div className="chart-artist">{item.artist}</div>
                                    </div>
                                    <div className="chart-last">{index + 1}위</div>
                                    <div className="chart-date">{item.date}</div>
                                    <div className="chart-views">{item.views}회</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Ellipse/>
                <Footer/>
            </div>
        )
}

export default GetArtistPage;