import { Typography } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
    const [chartData] = React.useState({
        series: [70],
        options: {
            chart: {
                height: 200,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '55%',
                    },
                    track: {
                        show: true,
                        background: '#333',
                        strokeWidth: '100%',
                    },
                    dataLabels: {
                        name: {
                            show: true,
                            fontSize: '10px',
                        },
                        value: {
                            show: true,
                            fontSize: '20px',
                            color: "white",
                        },
                        total: {
                            show: true,
                            label: 'Goal Completed',
                            fontSize: '8px',
                            color: "white",
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b;
                                }, 0) + "%";
                            }
                        }
                    },
                    stroke: {
                        lineCap: 'round',
                    },
                },
            },
            labels: ['Goal Completed'],
            colors: ['#6a96fc'],
        },
    });

    return (
        <div id="chart" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
            <ReactApexChart style={{ marginBottom: "none !important", padding: "none" }}
                options={chartData.options}
                series={chartData.series}
                type="radialBar"
                height={200}
            />
            <Typography sx={{ marginBottom: "none" }} fontSize={"12px"}>The value here has been rounded off.</Typography>
        </div>
    );
};

export default ApexChart;
