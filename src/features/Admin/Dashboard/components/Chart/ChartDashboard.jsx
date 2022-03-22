import React from "react";
import Chart from "react-apexcharts";
import "./Chart.scss";

ChartDashboard.propTypes = {};

function ChartDashboard(props) {
  const chartOptions = {
    series: [
      {
        name: "Doanh thu",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
      },
    ],

    options: {
      color: ["#6ab04c", "#2980b9"],
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      legend: {
        position: "top",
      },
      grid: {
        show: false,
      },
    },
  };

  return (
    <div className="admin-content-body-chart">
      <div className="admin-content-body-chart-chart">
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="line"
          height="100%"
        />
      </div>
      <div className="admin-content-body-chart-title">
        Biểu đồ đường hiển thị doanh thu
      </div>
    </div>
  );
}

export default ChartDashboard;
