import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";
import UpdateTime from "./UpdateTime";
import ChartTypeList from "./ChartTypeList";
import Dropdown from "../Dropdown";


function FetchGraph(props) {
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState([]);

    useEffect(() => {
        let title = [];
        let views = [];
        // eslint-disable-next-line array-callback-return
        props.data.map((d) => {
            title.push(d.title);
            views.push(d.views);
        })

        setOptions({
            chart: {
                background: "#1e2447",
                id: "basic-bar",
                toolbar: {
                    show: false
                },
                fontFamily: 'Pretendard',
                foreColor: '#E3E5EB',
                fontWeight: 500,
                animations: {
                    enabled: true,
                    easing: 'linear',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#F4FF81",
                            opacity: 1
                        },
                        {
                            offset: 96.51,
                            color: "#00F3F3",
                            opacity: 1
                        }
                    ]
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex]
                },
                style: {
                    colors: ['#fff'],
                    fontSize: '13px'
                },
                background: {
                    enabled: true,
                    foreColor: '#000',
                    opacity: 0.3,
                    borderRadius: 5,
                    padding: 10,
                },
                offsetX: 0,
            },
            xaxis: {
                categories: title,
                labels: {
                    show: true,
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Pretendard',
                        fontWeight: 500,
                        colors: ['#E3E5EB'],
                    },
                    formatter: function (val) {
                        return val.toLocaleString('ko-KR')
                    },
                    offsetY: 5
                },
                axisBorder: {
                    show: true,
                    color: '#78909C',
                    height: 1,
                    width: '100%',
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                max: views[0],
                forceNiceScale: true,
                labels: {
                    show: false
                },
                floating: true,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            toolbar: {
                show: false
            },
            grid: {
                show: true,
                borderColor: '#8C95AF',
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                row: {
                    colors: ['#8c95af1a', '#8c95af1a', '#8c95af1a', '#1e2447', '#1e2447', '#1e2447'],
                }
            },
            tooltip: {
                theme: 'light',
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: () => ''
                    },
                    formatter: function (val, opt) {
                        return (props.type === "total" ? "조회수: " : "증가량: ") +
                            opt.w.globals.series[0][opt.dataPointIndex].toLocaleString('ko-KR') + '회'
                    }
                }
            },
            states: {
                hover: {
                    filter: {
                        type: 'lighten'
                    }
                },
                active: {
                    filter: {
                        type: 'lighten',
                        value: '0.15'
                    }
                }
            },
        })

        setSeries([{
            name: "조회수",
            data: views
        }])
    }, [props.data, props.type])

    return (
        <div className="graph-body">
            <div className="graph-header">
                <Dropdown setType={props.setType} setData={props.setData} elements={ChartTypeList} dark={true}/>
                <UpdateTime type={props.type}/>
            </div>
            <div className="graph-wrap">
                <Chart options={options} series={series} type="bar" height="4000px"/>
            </div>
        </div>
    )
}

export default FetchGraph;