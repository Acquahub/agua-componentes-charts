import React, {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function PieChart({
                      labels,
                      datasets,
                      label = ['item'],
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
                      displayLegend = true,
                       }) {

    const [chart, setChart] = useState({
        labels: labels,
        datasets: datasets.map((element, index) => ({
            label: label[index] || label,
            data: element,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: borderWidth,
        })),
    });


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        hoverOffset: hoverOffset,

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
        <Pie data={chart} options={options} />
    </div>;

}

export default PieChart