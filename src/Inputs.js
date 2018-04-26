import React from "react"

class Inputs extends React.Component {

  render(){
    console.log(this.winBig)
    return  (
      <div className="right">
        <div className="input">
          <button className= "red button" onClick={this.props.handleRed}>Red</button>
          <button className= "black button" onClick={this.props.handleBlack}>Black</button>
        <br></br>
          <input onChange={this.props.handleGoal} value={this.props.goal}></input>
          <br></br>
          <input onChange={this.props.handleMaxInvestment} value= {this.props.maxInvestment}></input>
          <br></br>
          <input onChange={this.props.handleBet} value= {this.props.bet}></input>
          <br></br>
          <button className = "run button" onClick={this.props.startGame}>Run!</button>
        </div>
        <div className= "results">
          <h1>Spins: {this.props.spins}</h1>
          <h1>Winnings: {this.props.winBig ? "$" + this.props.pocket : "$0"}</h1>
          <h1>Losses: {!this.props.winBig ? "$" + this.props.maxInvestment : "$0" }</h1>
          <h1>Probability of Winning: {this.props.probOfWin}</h1>
        </div>
      </div>
    )
  }
}


export default Inputs
