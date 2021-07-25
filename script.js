/**Canvas */

const canvas = document.getElementById("myChart");
const ctx = canvas.getContext("2d");
ctx.canvas.width = 300;
ctx.canvas.height = 300;

let labels1 = ["Total", "Projetos Concluidos", "Andamento"];
let data1 = [79, 58, 21];
let colors1 = ["#49a9ea", "#36caab", "#FF0303"];

let myChart1 = document.getElementById("myChart").getContext("2d");

let chart1 = new Chart(myChart1, {
  type: "doughnut",
  data: {
    labels: labels1,
    datasets: [
      {
        data: data1,
        backgroundColor: colors1,
      },
    ],
  },
  options: {},
});

/**Gráfico */

let labels2 = ["Homens", "Mulheres", "Adolescentes", "Crianças"];
let data2 = [45, 58, 22, 40];
let colors2 = ["#49a9ea", "#36caab", "#FF0303", "#EE1069"];

let myChart2 = document.getElementById("myChart2").getContext("2d");

let chart2 = new Chart(myChart2, {
  type: "bar",
  data: {
    labels: labels2,
    datasets: [
      {
        label: "Crescimento entre cada categoria",
        data: data2,
        backgroundColor: colors2,
      },
    ],
  },
  options: {
    title: {
      text: "crescimento entre cada categoria",
      display: true,
    },

    legend: {
      display: false,
    },
  },
});
