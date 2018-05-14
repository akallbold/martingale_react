import React from "react"
import Inputs from "./Inputs"
import Graphics from "./Graphics"

class MainContainer extends React.Component {

//spin variables

  pocket = 0;
  currentSpin = 0;
  currentBet = 10;
  redNums = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  blackNums = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
  greenNums = [0,37];
  probOfWin=0;
  gameStats = [];

  state = {
    colorChoice:"red",
    goal:100,
    maxInvestment:10000,
    bet:10,
    winBig:"",
    currentColor: ""
  }
//game variables
  spins = 0;
  allSpins = [];
  blackSpin = 0;
  redSpin = 0;
  greenSpin = 0;
  previousSpin = null;


colorOfSpin = () => {
  if (this.redNums.includes(this.currentSpin)){
    this.setState({currentColor:"red"})
    this.redSpin++
  } else if (this.blackNums.includes(this.currentSpin)){
    this.setState({currentColor:"black"})
    this.blackSpin++
  } else if (this.greenNums.includes(this.currentSpin)){
    this.setState({currentColor:"green"})
    this.greenSpin++
  } else {
    return "error"
  }
}

  win = () => {
    if (this.state.colorChoice === "red" && this.state.currentColor === "red"){
      return true
    } else if (this.state.colorChoice === "black" && this.state.currentColor === "black"){
        return true
    } else {
      return false
    }
  }

    handleRed = () => {this.setState({colorChoice:"red"})}
    handleBlack = () => {this.setState({colorChoice:"black"})}
    handleGoal = (event) => {this.setState({goal:event.target.value})}
    handleMaxInvestment = (event) => {this.setState({maxInvestment:event.target.value})}
    handleBet = (event) => {this.setState({bet:event.target.value})}


    reset = () => {
      this.spins = 0
      this.pocket = 0
      this.currentSpin = 0
      this.currentBet = 10

    }

    run = () => {
      this.reset()
      while ((this.currentBet <= this.state.maxInvestment) && (this.state.goal > this.pocket)) {
        this.currentSpin = Math.floor(Math.random() * Math.floor(37));
        this.colorOfSpin()

        if (this.win()){
          console.log("win", this.spins)
          this.pocket+=this.state.bet
          this.currentBet=this.state.bet
        } else {
          console.log("lose", this.spins)
          this.currentBet *= 2
        }
        this.spins++;
        this.allSpins.push(this.currentSpin)
      }

      if (this.currentBet >= this.state.maxInvestment){
        this.setState({winBig:false})

      } else if ((this.state.goal <= this.pocket)){
        this.setState({winBig:true})
      } else {
        console.log("Theres an error!")
        console.log("currentBet", this.currentBet)
        console.log("maxInvestment", this.state.maxInvestment)
        console.log("goal", this.state.goal)
        console.log("pocket", this.pocket)
      }
    }

  //this isn't working
    determineProb = () => {
      let prob= 0
      let spinExponent = Math.ceil(((Math.log(this.state.maxInvestment/this.state.bet))/(Math.log(2))))
      // you lose your money if you are 1 loss more than what you can afford
      let lossNumber = spinExponent + 1
      //raise the probability of losing to the loss number to determine the probability of getting that many losses in a row)
      let probOfLosingXTimesInARow= Math.pow(.5263, lossNumber)
      let probOfWinningDecimal = 1-probOfLosingXTimesInARow
      this.probOfWin = `${probOfWinningDecimal *100}%`
    }

    startGame = () => {
      this.determineProb()
      this.run()

    }

  render(){
    return (
      <div class= "container">
        <Inputs goal={this.state.goal}
                maxInvestment={this.state.maxInvestment}
                bet={this.state.bet}
                winBig={this.state.winBig}
                handleRed={this.handleRed}
                handleBlack={this.handleBlack}
                handleGoal={this.handleGoal}
                handleMaxInvestment={this.handleMaxInvestment}
                handleBet={this.handleBet}
                startGame={this.startGame}
                spins= {this.spins}
                pocket={this.pocket}
                probOfWin={this.probOfWin}
                colorChoice={this.state.colorChoice}/>
        <Graphics/>

      </div>

    )
  }
}

export default MainContainer
