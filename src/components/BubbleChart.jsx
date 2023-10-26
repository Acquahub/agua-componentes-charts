import React, { useEffect, useState } from "react";
import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BubbleChart({
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
  //props BubbleChart
  pointStyle = "rectRot",
  pointRadius = 5,
  pointBorderColor = ["rgba(110,110,110,0.65)"],
  pointBackgroundColor = ["rgba(9,210,203,0.2)"],
}) {
  const [chart, setChart] = useState({
    labels: labels,
    datasets: datasets.map((element, index) => ({
      label: label[index] || label(index),
      data: element,
      borderWidth: borderWidth[index] || borderWidth,
      pointRadius: pointRadius[index] || pointRadius,
      pointBorderColor: pointBorderColor[index] || pointBorderColor,
      pointBackgroundColor: pointBackgroundColor[index] || pointBackgroundColor,
      pointStyle: pointStyle[index] || pointStyle,
    })),
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          },
        },
      },
      x: {
        ticks: {
          color: colorFontx,
          font: {
            family: fontFamily,
            size: xAxisFontSize,
            weight: fontWeightx,
            style: fontStylex,
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

  // responsive style={{ position: relative, width: width, height: height, margin: auto }}
  return (
    <div style={{ width: width, height: height }}>
      <Bubble data={chart} options={options} />
    </div>
  );
}

export default BubbleChart;
