import React from "react"
import {Bar} from 'react-chartjs-2'

class ChartComponent extends React.Component {



  render(){
    return (
      <div className = "col s6">
        <Bar
          data={this.props.chartData()}
        />
      </div>
    )
  }
}

export default ChartComponent
