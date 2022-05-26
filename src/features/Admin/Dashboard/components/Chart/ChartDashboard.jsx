import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import adminAPI from "../../../../../api/adminAPI";
import "./Chart.scss";
import moment from "moment";

ChartDashboard.propTypes = {};

function ChartDashboard(props) {
  const [cash, setCash] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.chartDashboard();
        setCash(response.data.data.listData);
        setDate(response.data.data.listDate);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let a = [];
  date.forEach((x) => {
    a.push(moment(x).format("dddd"));
  });

  const chartOptions = {
    series: [
      {
        name: "Doanh thu",
        data: cash,
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
        categories: a,
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
        Biểu đồ đường hiển thị doanh thu 7 ngày gần nhất
      </div>
    </div>
  );
}

export default ChartDashboard;
