import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeaponContainer from './button_components/WeaponContainer';
import PlayerField from './player_field_components/PlayerField';
import Prompt from './result_area/Prompt';

const weapons = [
  {
    name: 'rock',
    uri: 'https://i.imgur.com/JcVaJO5.png',
  },
  {
    name: 'paper',
    uri: 'https://i.imgur.com/2zYQCeR.png',
  },
  {
    name: 'scissors',
    uri: 'https://i.imgur.com/6PnpW75.png',
  }
];

// Get random weapon for computer
const randomComputerChoice = () =>
  weapons[Math.floor(Math.random() * weapons.length)];

// Get the round result
const getRoundOutcome = playerChoice => {
  const computerChoice = randomComputerChoice().name;
  let result;
  if (playerChoice === computerChoice) {
    result = 'Draw!';
    return [result, computerChoice];
  }

  switch (playerChoice) {
    case 'rock':
      result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
      break;
    case 'paper':
      result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
      break;
    case 'scissors':
      result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
      break;
    default:
      break;
  }

  return [result, computerChoice];
};

class PlayArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: {},
      compChoice: {},
      result: 'Ready for the battle',
    };
  };

  componentDidMount() {
    this.textId = setTimeout(
      () => this.changeText(),
      2000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.textId);
  }

  changeText() {
    this.setState({ result: 'Pick up your weapon' });
  }

  onPress = playerChoice => {
    const totalResult = getRoundOutcome(playerChoice);
    const newPlayerChoice = weapons.find(choice => choice.name === playerChoice);
    const newCompChoice = weapons.find(choice => choice.name === totalResult[1]);
    // totalResult[1] is the returned value of 'computerChoice' in getRoundOutcome function
  
    this.setState({ playerChoice: newPlayerChoice, compChoice: newCompChoice, result: totalResult[0] });
    // totalResult[0] is the returned value of 'result' in getRoundOutcome function
  };

  render() {
    return (
      <View style={styles.container}>
        <Prompt result={this.state.result} />
        <PlayerField playerChoice = {this.state.playerChoice}
                      compChoice = {this.state.compChoice} />
        {
          (this.state.result !== 'Ready for the battle') ? <WeaponContainer onPress={this.onPress} /> : <View style={{height:200}} />
        }
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlayArea;
