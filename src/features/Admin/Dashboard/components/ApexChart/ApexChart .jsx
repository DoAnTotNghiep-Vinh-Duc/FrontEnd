import React from "react";
import ReactApexChart from "react-apexcharts";

ApexChart.propTypes = {};

function ApexChart(props) {
  const options = {
    series: [
      {
        name: "Doanh thu",
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {},
        },
      },
      colors: [
        "#25A0FC",
        "#24B282",
        "#FEBC3B",
        "#FF6077",
        "#8B74D7",
        "#6C848E",
        "#45B3A9",
        "#A725B6",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Đỗ Đạt Đức"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"],
        ],
        labels: {
          style: {
            colors: [
              "#25A0FC",
              "#24B282",
              "#FEBC3B",
              "#FF6077",
              "#8B74D7",
              "#6C848E",
              "#45B3A9",
              "#A725B6",
            ],
            fontSize: "12px",
          },
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="bar"
        height={450}
        width="100%"
      />
    </div>
  );
}

export default ApexChart;
