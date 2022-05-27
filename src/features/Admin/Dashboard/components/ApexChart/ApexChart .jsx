import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import adminAPI from "../../../../../api/adminAPI";

ApexChart.propTypes = {};

function ApexChart(props) {
  const [total, setTotal] = useState([]);
  let listCustomer = [];
  let listCash = [];

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.customerVip();
        setTotal(response.data.data.slice(0, 7));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  total.forEach((x) => {
    listCustomer.push(x.information.name);
    listCash.push(x.totalPrice);
  });

  const options = {
    series: [
      {
        name: "Doanh thu",
        data: listCash,
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
        categories: listCustomer,
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
