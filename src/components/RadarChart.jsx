import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function RadarChart({
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
  backgroundColor = ["rgba(0,255,240,0.2)"],
  borderColor = ["rgba(0,0,0,0.14)"],
  borderWidth = ["3"],
  width = "80vw",
  height = "80vh",
  fontFamily = ChartJS.defaults.font.family,
  displayLegend = true,
  colorFonty = "rgb(0,0,0)",
  xAxisFontSize = 12,
  fontStyley = "normal",
  fontWeighty = "bold",

  colorGrid = "rgba(128,128,128,0.85)",
  colorAngleLines = "rgba(231,7,74,0.85)",
}) {
  const [chart, setChart] = useState({
    labels: labels,
    datasets: datasets.map((element, index) => ({
      label: label[index] || label(index),
      data: element,
      backgroundColor: backgroundColor[index] || backgroundColor,
      borderColor: borderColor[index] || borderColor,
      borderWidth: borderWidth[index] || borderWidth,
    })),
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: colorAngleLines,
          lineWidth: 1,
        },
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
          color: colorGrid,
        },
        pointLabels: {
          color: colorFonty,
          font: {
            family: fontFamily,
            size: xAxisFontSize,
            weight: fontWeighty,
            style: fontStyley,
          },
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

  return (
    <div
      style={{
        position: "relative",
        width: width,
        height: height,
        margin: "auto",
      }}
    >
      <Radar data={chart} options={options} />
    </div>
  );
}

export default RadarChart;
