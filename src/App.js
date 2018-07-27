import React, { Component } from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      target:null,
      start:false,
      result:null
    }
    this.getRandomNumber = this.getRandomNumber.bind(this);
    this.showButtons = this.showButtons.bind(this);
    this.startGame = this.startGame.bind(this);
    this.gameResult = this.gameResult.bind(this);
  }

  getRandomNumber(max){
    let val = Math.ceil(Math.random() * Math.ceil(max));
    console.log(val);
    return val;
  }
  gameResult(num){
    console.log("coming here");
    if(this.state.result-num === 0){
      console.log("you win");
      window.alert("You are a genius. You can acheive anything in your life if you are persistent!!!");
    }else{
      this.setState({
        result:this.result-num
      })
    }
    
  }
  
  showButtons(){
    
    const buttons = [];
    
    for(let i=0;i<6;i++){
      
      let randomNumber = this.getRandomNumber(this.state.target);
        
      buttons.push(
        <ButtonComponent 
          key={i}
          value={randomNumber} 
          onClick={()=>this.gameResult(randomNumber)}
        />);
    }
    
    return buttons;
  }
  
  startGame(){
    let randomNumber = this.getRandomNumber(30);
    this.setState({
      target:randomNumber,
      start:!this.state.start,
      result:randomNumber
    });
  }
  
  render() {
    
    return (
      <div>
        <button onClick = {()=> this.startGame()}>
          Start
        </button>
        
        <ButtonComponent value={this.state.start ? this.state.target: 'Target'}/>
        
        {
          this.state.start ? this.showButtons():''
        }
      </div>
      
    );
  }
}

export default App;
