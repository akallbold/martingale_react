import React from "react"
import Chart from "chart.js"

class Graphics extends React.Component {
debugger
  // ctx = document.getElementById('myChart')
  // .getElementById('myChart').getContext('2d');
  // chart = new Chart(this.ctx, {
  //   type: 'line',
  //    data: {
  //       labels: ["January", "February", "March", "April", "May", "June", "July"],
  //       datasets: [{
  //           label: "My First dataset",
  //           backgroundColor: 'rgb(255, 99, 132)',
  //           borderColor: 'rgb(255, 99, 132)',
  //           data: [0, 10, 5, 2, 20, 30, 45],
  //       }]
  //    },
  //    options: {}
  // });
  render(){
    console.log("document", document)
    console.log("document.getElementByIdmyChart", document.getElementById('myChart').getContext('2d'))
    return (
      <div className="left">
        <p>Graph and stats and shit</p>
        <p>One graph that does a count of each spin</p>
        <p>one counter that says the most losses you incurred in a row....maybe one that shows winning streak</p>
        <p>One graph that shows the distribution of red and black spins</p>
        <img alt="spinning roulette wheel" src="wheel.gif" />
        {/* <canvas id="myChart"></canvas>
          {/* ctx = document.getElementById('myChart').getContext('2d'); */}
        {this.chart} */}
      </div>
    )
  }
}

export default Graphics
