import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexBarGraph = () => {
    const state = {
        series: [{
            name: 'Inflation',
            data: [12.3, 13.1, 4.0, 10.1, 6.0, 13.6, 9.2, 2.3, 1.4, 0.8, 10.5, 19.2]
        }],
        options: {
            chart: {
                height: 200,
                type: 'bar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top',
                    },
                    // colors: {
                    //     backgroundBarColors: ['#303030'],
                    //     backgroundBarOpacity: 1,
                    // }
                }
            },
            colors: ['#6a96fc'],
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["white"]
                }
            },
            xaxis: {
                categories: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: ["white"],
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: 'red',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    style: {
                        fontSize: '12px',
                        colors: ["black"]
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 20,
                tickAmount: 4,
                labels: {
                    formatter: function (val) {
                        return val.toFixed(0) + "%";
                    },
                    style: {
                        colors: ["white"],
                        fontSize: '12px'
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                }
            }
        }
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={200} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexBarGraph;
