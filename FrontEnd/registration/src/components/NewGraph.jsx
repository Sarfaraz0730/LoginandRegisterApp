import React from "react";
import { useEffect, useState } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale, 
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responses: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Property Buyer Data",
    },
  },
};
const labels = ["January", "Fabruary", "March", "April", "May", "June", "July","August","September","October","November","December"];


const NewGraph = () => {
  //dynamically data fetching
  const [data, setData] = useState({
  labels,
  datasets: [
    {
      label: "Income",
      data: [100, 200, 400, 500, 600, 700,605,105,605,1100,1000,500],
      backgroundColor: "#a4d7fe",
      borderColor: "#2ea3fc",
     
    },
    {
      label: "Expenses",
      data: [90, 150, 300, 400, 500, 450, 700,100,105,650,805,805],
      backgroundColor: "#cafea4",
      borderColor: "#dafc2e",
     
    },
  ],
})
    useEffect(() => {
      
        const url = "http://localhost:12345/login";
        const fetchData = async () => {
          await  fetch(url, {
                method:'GET'
            }).then((data) => {
                console.log("Api data",data)
            }).catch(e => {
                console.log(e)
            })
        } 
        fetchData()
})
  return (
    <div style={{ width: "80%", height: "50%" }}>
      <Bar data={data} options={options} />
      {/* <Chart type="bar" data={data} options={options} /> */}
    </div>
  );
};

export default NewGraph;

// https://jsonplaceholder.typicode.com/users
