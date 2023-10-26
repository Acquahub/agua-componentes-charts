import { Chart as ChartJS } from "chart.js/auto";
import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";

function MultiAxisLineChart({
  labels,
  datasets,
  label = (index) => `Item ${index + 1}`,
  positionLabel = "top",
  colorLabel = "rgba(0,0,0,0.2)",
  sizeLabel = 12,
  styleLabel = "normal",
  weightLabel = "bold",
  displayTitle = true,
  title = "title",
  positionTitle = "top",
  styleTitle = "normal",
  weightTitle = "bold",
  colorTitle = "rgba(110,110,110,0.33)",
  fontTitle = ChartJS.defaults.font.family,
  sizeTitle = 12,
  backgroundColor = ["rgba(108,231,228,0.51)"],
  borderColor = "black",
  borderWidth = 2,
  width = "80vw",
  height = "80vh",
  fontFamily = ChartJS.defaults.font.family,
  fontWeighty = "normal",
  fontWeightx = "normal",
  fontStylex = "normal",
  fontStyley = "normal",
  colorFontx = "rgb(110,110,110)",
  colorFonty = "rgb(110,110,110)",
  xAxisFontSize = 14,
  displayLegend = true,
  ymax = null,
  ymin = null,

  //props linear chart
  pointRadius = [5],
  tension = [0],
  fill = [false],
  pointBorderColor = ["rgba(110,110,110,0.65)"],
  pointBackgroundColor = ["rgba(0,188,255,0.86)"],
  displayY1 = true,
  displayX1 = false,
  labely1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
  labelx1 = ["A", "B", "C", "D", "E"],
}) {
  const [chart, setChart] = useState({
    labels: labels,
    datasets: datasets.map((element, index) => ({
      label: label[index] || label(index),
      data: element,
      backgroundColor: backgroundColor[index] || backgroundColor,
      borderColor: borderColor[index] || borderColor,
      borderWidth: borderWidth[index] || borderWidth,
      pointRadius: pointRadius[index] || pointRadius,
      tension: tension[index] || tension,
      fill: fill[index] || fill,
      pointBorderColor: pointBorderColor[index] || pointBorderColor,
      pointBackgroundColor: pointBackgroundColor[index] || pointBackgroundColor,
    })),
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        display: true,
        position: "left",
        min: ymin,
        max: ymax,
        ticks: {
          color: colorFonty,
          font: {
            family: fontFamily,
            size: xAxisFontSize,
            weight: fontWeighty,
            style: fontStyley,
          },
        },
      },
      y1: {
        type: "category",
        labels: labely1,
        display: displayY1,
        position: "right",
        min: ymin,
        max: ymax,
        ticks: {
          color: colorFonty,
          font: {
            family: fontFamily,
            size: xAxisFontSize,
            weight: fontWeighty,
            style: fontStyley,
          },
        },

        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        display: true,
        position: "bottom",
        min: ymin,
        max: ymax,
        ticks: {
          color: colorFonty,
          font: {
            family: fontFamily,
            size: xAxisFontSize,
            weight: fontWeighty,
            style: fontStyley,
          },
        },
      },
      x1: {
        type: "category",
        labels: labelx1,
        display: displayX1,
        position: "top",
        ticks: {
          color: colorFonty,
          font: {
            family: fontFamily,
            size: xAxisFontSize,
            weight: fontWeighty,
            style: fontStyley,
          },
        },

        grid: {
          drawOnChartArea: false,
        },
      },
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
          },
        },
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
        },
      },
    },
  };

  // responsive style={{ position: relative, width: width, height: height, margin: auto }}
  return (
    <div style={{ width: width, height: height }}>
      <Line data={chart} options={options} />
    </div>
  );
}

export default MultiAxisLineChart;
