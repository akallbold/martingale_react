import React from "react"
import Inputs from "./Inputs"
import Graphics from "./Graphics"

class MainContainer extends React.Component {

//lifetime variables
  redNums = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  blackNums = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
  greenNums = [0,37];
  probOfWin = 0;

  state = {
    colorChoice: "red",
    goal: 100,
    maxInvestment: 10000,
    bet: 10,
    gameWin: null,
    gameStats: []
  }

  handleRed = () => {this.setState({colorChoice: "red"})}
  handleBlack = () => {this.setState({colorChoice: "black"})}
  handleGoal = (event) => {this.setState({goal: event.target.value})}
  handleMaxInvestment = (event) => {this.setState({maxInvestment: event.target.value})}
  handleBet = (event) => {this.setState({bet: event.target.value})}

  //this isn't working
  determineProb = () => {
    let prob = 0
    let spinExponent = Math.ceil(((Math.log(this.state.maxInvestment/this.state.bet))/(Math.log(2))))
    // you lose your money if you are 1 loss more than what you can afford
    let lossNumber = spinExponent + 1
    //raise the probability of losing to the loss number to determine the probability of getting that many losses in a row)
    let probOfLosingXTimesInARow= Math.pow(.5263, lossNumber)
    let probOfWinningDecimal = 1-probOfLosingXTimesInARow
    this.probOfWin = `${probOfWinningDecimal *100}%`
    return this.probOfWin
  }
  //////////////////////////////////////////////////////////////////////////////////////////

  startGame = () => {
    this.determineProb()
    this.run()
  }

  run = () => {
    let pocket = 0;
    let currentSpin = null;
    let currentBet = 10;
    let spins = 0;
    let currentGameSpins = [];
    let colorOfSpin = null;
    let spinWin = null;
    this.resetGame()

    while ((currentBet <= this.state.maxInvestment) && (this.state.goal > pocket)) {
      currentSpin = this.spin();
      colorOfSpin = this.colorOfSpin(currentSpin)
      spins++;
      if (this.win(colorOfSpin)) {
        console.log("win")
        spinWin = true
        pocket += this.state.bet
        currentGameSpins.push([{ spin:spins,
                                 resultNum: currentSpin,
                                 resultCol: colorOfSpin,
                                 spinWin: spinWin,
                                 currentBet: currentBet,
                                 pocket: pocket}])
        currentBet = this.state.bet
      } else {
        console.log("loss")
        spinWin = false
        currentGameSpins.push([{ spin:spins,
                                 resultNum: currentSpin,
                                 resultCol: colorOfSpin,
                                 spinWin: spinWin,
                                 currentBet: currentBet,
                                 pocket: pocket}])
        currentBet *= 2
      }
    }
    //decides if a game is complete...break into helper function?
    if (currentBet >= this.state.maxInvestment){
      debugger
      this.gameStats.push({ gameWin:false,
                            numOfSpins: this.spins,
                            bet:this.state.bet,
                            goal:this.state.goal,
                            maxInvestment:this.state.maxInvestment,
                            colorChoice: this.state.colorChoice,
                            lastBet:this.currentBet,
                            pocket:this.pocket,
                            probOfWinning:this.probOfWinning})
      this.setState({gameWin:false})
    } else if ((this.state.goal <= pocket)){
      debugger
      this.gameStats.push({ gameWin:true,
                            numOfSpins: this.spins,
                            bet:this.state.bet,
                            goal:this.state.goal,
                            maxInvestment:this.state.maxInvestment,
                            colorChoice: this.state.colorChoice,
                            lastBet:this.currentBet,
                            pocket:this.pocket,
                            probOfWinning:this.probOfWinning})
      this.setState({gameWin:true})
    } else {
      console.log("game on")
    }
  }

  resetGame = () => {
    this.spins = 0
    this.pocket = 0
    this.currentSpin = 0
    this.currentBet = this.state.bet
  }

  spin = () => {
    return Math.floor(Math.random() * Math.floor(37))
  }

  colorOfSpin = (currentSpin) => {
    if (this.redNums.includes(currentSpin)){
      return "red"
    } else if (this.blackNums.includes(currentSpin)){
      return "black"
    } else if (this.greenNums.includes(currentSpin)){
      return "green"
    } else {
      return "error"
    }
  }

  win = (colorOfSpin) => {
    if (this.state.colorChoice === "red" && colorOfSpin === "red"){
      return true
    } else if (this.state.colorChoice === "black" && colorOfSpin === "black"){
      return true
    } else {
      return false
    }
  }

////////////////////////////////////////////////////////////////////////////////////////////







  render(){
    return (
      <div className= "container">
        <Inputs goal={this.state.goal}
                maxInvestment={this.state.maxInvestment}
                bet={this.state.bet}
                winBig={this.state.winBig}
                colorChoice={this.state.colorChoice}
                handleRed={this.handleRed}
                handleBlack={this.handleBlack}
                handleGoal={this.handleGoal}
                handleMaxInvestment={this.handleMaxInvestment}
                handleBet={this.handleBet}
                startGame={this.startGame}
                probOfWin={this.probOfWin}
        />
        <Graphics/>
      </div>

    )
  }
}

export default MainContainer
