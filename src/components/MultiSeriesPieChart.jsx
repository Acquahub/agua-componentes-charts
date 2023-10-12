import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function MultiSeriesPieChart({
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
                                 displayLegend = true,
                             }) {
    // Datos de ejemplo
    const chartData = {
        labels: data.labels, // Etiquetas para cada serie
        datasets: data.datasets.map((series) => ({
            data: series.data, // Valores para cada serie
            backgroundColor: series.backgroundColor, // Color para cada serie
        })),
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        // Otras opciones de configuración según tus necesidades
        tooltips: {
            callbacks: {
                label: function(item, data) {
                    console.log(data.labels, item);
                    return data.datasets[item.datasetIndex].label+ ": "+ data.labels[item.index]+ ": "+ data.datasets[item.datasetIndex].data[item.index];
                }
            }
        }
    };

    return <div style={{ position: "relative", width: width, height: height, margin: "auto"}} >
        <Pie data={chartData} options={options} />
    </div>;
}

export default MultiSeriesPieChart;
