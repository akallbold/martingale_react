import React from "react"

class Chart extends React.Component {

  // currentResults = this.props.gameStats[this.props.gameStats.length-1]

  createRows = () => {
    // debugger
    if (this.props.gameStats.length > 0) {
      return this.props.gameStats[this.props.gameStats.length-1].currentGameSpins.map(spin => {
        // debugger
        return (
          <tr>
            <td>{spin[0].spin}</td>
            <td>{spin[0].resultNum}</td>
            <td>{spin[0].spinWin ? "W" : "L"}</td>
            <td>{spin[0].currentBet}</td>
            <td>{spin[0].pocket}</td>
          </tr>
        )
      })
    }
  }

  render(){
    // debugger
    return  (
      <div className = "col s6">

        <table className = "striped centered">
          <thead>
            <tr>
              <th>Spin</th>
              <th>Result</th>
              <th>W/L</th>
              <th>Bet</th>
              <th>Pocket</th>
            </tr>
          </thead>

          <tbody>
            {this.props.gameStats.length > 0 ? this.createRows() : ""}
          </tbody>
        </table>

      </div>
    )
  }
}


export default Chart
