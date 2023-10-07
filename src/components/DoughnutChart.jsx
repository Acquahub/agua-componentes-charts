import React, {useEffect, useState} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function DoughnutChart({
                           data,
                           datasets,
                           label = "item",
                           positionLabel = 'top',
                           colorLabel = 'rgba(0,0,0,0.2)',
                           sizeLabel = 12,
                           styleLabel = "normal",
                           weightLabel = "bold",
                           displayTitle = true,
                           title = "title",
                           positionTitle = 'top',
                           styleTitle = "normal",
                           weightTitle = "bold",
                           colorTitle = 'rgba(110,110,110,0.33)',
                           fontTitle = ChartJS.defaults.font.family,
                           sizeTitle = 12,
                           backgroundColor = '',
                           borderColor = '',
                           borderWidth = '',
                           hoverOffset = 5,
                           width = "80vw",
                           height = "80vh",
                           fontFamily = ChartJS.defaults.font.family,
                           fontWeighty = "normal",
                           fontWeightx = "normal",
                           fontStylex = "normal",
                           fontStyley = "normal",
                           colorFontx = 'rgb(110,110,110)',
                           colorFonty = 'rgb(110,110,110)',
                           xAxisFontSize = 14,
                           displayLegend = true,
                           ymax = null,
                           ymin = null,
                       }) {

    const [chart, setChart] = useState({
        labels: data.labels,
        datasets: datasets.map((dataset) => ({
            label: dataset.label || label,
            data: dataset.data,
            backgroundColor: dataset.backgroundColor || backgroundColor,
            borderColor: dataset.borderColor || borderColor,
            borderWidth: dataset.borderWidth || borderWidth,
        })),
    });

    useEffect (() => {
        const updateChart = {
            labels: data.labels,
            datasets: datasets.map((dataset) => ({
                label: dataset.label || label,
                data: dataset.data,
                backgroundColor: dataset.backgroundColor || backgroundColor,
                borderColor: dataset.borderColor || borderColor,
                borderWidth: dataset.borderWidth || borderWidth,
            })),
        };
        setChart(updateChart);
    }, [data, datasets, label, backgroundColor, borderColor, borderWidth]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        hoverOffset: hoverOffset,
        scales: {
            y: {
                min: ymin,
                max: ymax,
                ticks: {
                    color: colorFonty,
                    font: {
                        family: fontFamily,
                        size: xAxisFontSize,
                        weight: fontWeighty,
                        style: fontStyley,
                    }
                }
            },
            x: {
                ticks: {
                    color: colorFontx,
                    font: {
                        family: fontFamily,
                        size: xAxisFontSize,
                        weight: fontWeightx,
                        style: fontStylex,
                    }
                }

            }
        },
        plugins: {
            legend: {
                display: displayLegend,
                position: positionLabel,
                labels: {
                    color: colorLabel,
                    font: {
                        family: fontFamily,
                        size: sizeLabel,
                        style: styleLabel,
                        weight: weightLabel,
                    }
                }

            },
            title: {
                display: displayTitle,
                text: title,
                position: positionTitle,
                color: colorTitle,
                font: {
                    family: fontTitle,
                    size: sizeTitle,
                    style: styleTitle,
                    weight: weightTitle,
                }

            }
        }
    }

    return <div style={{ position: "relative", width: width, height: height, margin: "auto"}} >
        <Doughnut data={chart} options={options} />
    </div>;

}

export default DoughnutChart;