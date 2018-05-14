import React from "react"
import Chart from "chart.js"

class ChartComponent extends React.Component {

  render(){
    return (
      <div className = "col s6">
        <p>Graph and stats</p>
        <p>One graph that does a count of each spin</p>
        <p>one counter that says the most losses you incurred in a row....maybe one that shows winning streak!</p>
        <p>One graph that shows the distribution of red and black spins</p>
        {/* <img alt="spinning roulette wheel" src="wheel.gif" /> */}

      </div>
    )
  }
}

export default ChartComponent
