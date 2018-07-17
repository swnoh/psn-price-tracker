import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-bootstrap";
import Chart from "chart.js";

class PriceChart extends React.Component {
  componentDidMount() {
    var ctx = document.getElementById("priceChart");
    var priceCharts = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jul 2, 2017",
          "Aug 2, 2017",
          "Aug 23, 2017",
          "Sep 10, 2017",
          "Oct 1, 2017",
          "Oct 20, 2017",
          "Nov 5, 2017",
          "Dec 25, 2017",
          "Jan 10, 2018",
          "Feb 13, 2018"
        ],
        datasets: [
          {
            label: "Price $",
            data: [
              70.5,
              101.99,
              99.99,
              99.98,
              35.99,
              99.99,
              49.98,
              79.99,
              19.99,
              29.99
            ],
            borderColor: "rgba(54, 162, 235, 1)",
            steppedLine: true,
            borderWidth: 2,
            pointBorderWidth: 7
          },
          {
            label: "PS+ $",
            data: [
              49.99,
              99.99,
              99.99,
              99.98,
              29.97,
              99.99,
              29.98,
              79.79,
              18.75,
              25.79
            ],
            borderColor: "rgba(255, 159, 64, 1)",
            steppedLine: true,
            borderWidth: 2,
            pointBorderWidth: 7
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return <canvas id="priceChart" width="450" height="100" />;
  }
}

export default PriceChart;
