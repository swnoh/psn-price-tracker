import React from "react";
// import Chart from "chart.js";
import { Line } from "react-chartjs-2";

const option = {
  scales: {
    xAxes: [
      {
        type: "time",
        unit: "day",
        unitStepSize: 1,
        time: {
          tooltipFormat: "ll",
          displayFormats: {
            millisecond: "MMM DD",
            second: "MMM DD",
            minute: "MMM DD",
            hour: "MMM DD"
          }
        },
        scaleLabel: {
          display: false,
          labelString: "Date"
        },
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        scaleLabel: {
          display: false,
          labelString: "value"
        },
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  responsiveAnimationDuration: 100,
  legend: {
    position: "bottom",
    labels: {
      boxWidth: 12
    }
  },
  tooltips: {
    backgroundColor: "rgba(30,30,30, 1.00)",
    titleFontSize: 13,
    bodyFontSize: 15
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter"
    },
    point: {
      backgroundColor: "#fff",
      borderWidth: 5,
      hoverRadius: 4,
      hoverBorderWidth: 1,
      radius: 2,
      hitRadius: 10
    }
  },
  responsive: true,
  maintainAspectRatio: false
};

const data = {
  datasets: [
    {
      backgroundColor: "rgba(252,252,252,0.4)",
      borderWidth: 2,
      borderColor: "rgba(9, 150, 230, 1)",
      pointRadius: 5,
      pointBorderWidth: 2,
      pointBorderColor: "rgba(72, 198, 200, 1.00)",
      pointBackgroundColor: "rgba(255, 255, 255, 1.00)",
      pointHoverBackgroundColor: "rgba(72, 198, 200, 1.00)",
      pointHoverBorderColor: "rgba(72, 198, 200, 1.00)",
      label: "Price $",
      fill: false,
      data: [],
      steppedLine: true
    },
    {
      backgroundColor: "rgba(252,252,252,0.4)",
      borderWidth: 2,
      borderColor: "rgba(237, 198, 44, 1.00)",
      pointRadius: 5,
      pointBorderWidth: 2,
      pointBorderColor: "rgba(237, 198, 44, 1.00)",
      pointBackgroundColor: "rgba(255, 255, 255, 1.00)",
      pointHoverBackgroundColor: "rgba(237, 198, 44, 1.00)",
      pointHoverBorderColor: "rgba(237, 198, 44, 1.00)",
      label: "PS+ $",
      fill: false,
      data: [],
      steppedLine: true
    }
  ]
};

class PriceChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart_data_set: {},
      data_loading: true
    };
  }

  componentDidMount() {
    data.datasets[0].data = this.props.chartPrices;
    data.datasets[1].data = this.props.chartBonusPrices;
    this.setState({ chart_data_set: data });
  }

  componentDidUpdate(prevProps) {
    if (this.props.game_id !== prevProps.game_id) {
      data.datasets[0].data = this.props.chartPrices;
      data.datasets[1].data = this.props.chartBonusPrices;

      this.setState({
        chart_data_set: data
      });
    }
  }

  render() {
    return (
      <div
        className="chart-container"
        style={{ position: "relative", height: "30vh", width: "100%" }}
      >
        <Line data={this.state.chart_data_set} options={option} />
      </div>
    );
  }
}

export default PriceChart;
