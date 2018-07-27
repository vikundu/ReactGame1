import React, { Component } from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      target:null,
      start:false
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
  
  
  gameResult(num,result){
    console.log("coming here");
    if(result-num === 0){
      window.alert("You are a genius. You can acheive anything in your life if you are persistent!!!");
      this.setState({
        target:null,
        start:false
      });
      
    }else{
      return result-num;
  }
  }
  
  
  showButtons(result){
    
    const buttons = [];
    
    for(let i=0;i<5;i++){
      
      let randomNumber = this.getRandomNumber(this.state.target);
        
      buttons.push(
        <ButtonComponent 
          key={i}
          value={randomNumber} 
          onClick={()=>{
            result=this.gameResult(randomNumber,result)
            if(result<0){
              window.alert("It's ok..Math can be hard sometimes!!!")
              this.startGame();
            }
          }
          }
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
    
    let result = this.state.target;
    return (
      <div>
        <button onClick = {()=> this.startGame()}>
          Start
        </button>
        
        <ButtonComponent value={this.state.start ? this.state.target: 'Target'}/>
        <br/>
        {
          this.state.start ? this.showButtons(result):''
        }
      </div>
      
    );
  }
}

export default App;
