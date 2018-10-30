import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Instructions from './components/Instructions/Instructions'; 
// import CardContainer from './components/CardContainer/CardContainer';
import Footer from "./components/Footer/Footer"; 
import Card from './components/Card/Card'; 
import Column from './Column'; 
import Row from './Row'; 
import Container from './components/CardContainer/Container'; 

import friends from './friends.json'; 

function shuffleFriends(array) {
  for (var i = array.length-1; i > 0; i--) {
    let j = Math.floor(Math.random()*(i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array; 
}; 


class App extends Component {

state = {
  friends, 
  currentScore: 0, 
  topScore: 12, 
  rightWrong: "", 
  clicked: [], 
}; 

handleClick = id => {
  if(this.state.clicked.indexOf(id)=== -1){
    this.handleIncrement(); 
    this.setState({clicked: this.state.clicked.concat(id)}); 
  } else {
    this.handleReset(); 
  }
}; 


handleShuffle = () => {
  let shuffledFriends = shuffleFriends(friends); 
  this.setState({friends: shuffledFriends}); 
}

handleIncrement = () => {
  const newScore = this.state.currentScore + 1; 
  this.setState({
    currentScore: newScore, 
    rightWrong: ""
  }); 
  if (newScore >=this.state.topScore){
    this.setState({rightWrong: "You win!"}); 
  }
  this.handleShuffle(); 
}; 


handleReset = () => {
  this.setState({
    currentScore: 0, 
    topScore: this.state.topScore, 
    rightWrong: "", 
    clicked: []
  }); 
  this.handleShuffle(); 
}; 




  render() {
    return (
      <div>

        <Header
        title="Avatar: The Last Airbender Clicky Game"
        score={this.state.currentScore}
        rightWrong={this.state.rightWrong}
        
        />
        <Instructions />

        <Container >
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <Card
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
          </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
