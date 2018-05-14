import React from "react"

class Inputs extends React.Component {

  render(){
    console.log(this.winBig)
    return  (
      <div className="right">
        <div className="input">
          <button className= "btn red" onClick={this.props.handleRed}>Red</button>
          <button className= "btn black" onClick={this.props.handleBlack}>Black</button>
          <p>{`fingers crossed for ${this.props.colorChoice}`}</p>
        <br></br>
        <label> Goal Amount
          <input onChange={this.props.handleGoal} value={this.props.goal} placeholder="GOAL"></input>
        </label>
          <label> Max Investment
            <input onChange={this.props.handleMaxInvestment} value= {this.props.maxInvestment} placeholder="MAX INVESTMENT"></input>
          </label>
          <label> Bet
            <input onChange={this.props.handleBet} value= {this.props.bet} placeholder="BET"></input>
          </label>
          <button className = "btn" onClick={this.props.startGame}>Run!</button>
        </div>
        <div className= "results">
          <h3>Spins: {this.props.spins}</h3>
          <h3>Winnings: {this.props.winBig ? "$" + this.props.pocket : "$0"}</h3>
          <h3>Losses: {!this.props.winBig ? "$" + this.props.maxInvestment : "$0" }</h3>
          <h3>Probability of Winning: {this.props.probOfWin}</h3>
        </div>
      </div>
    )
  }
}


export default Inputs
