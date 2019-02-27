import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
	// Definition of state, where input and input controls are stored
	constructor() {
		super();
		this.state = {
			keypadInput: '',
			inputBuffer: '',
			operator: '',
			result: ''
		}
	}

	// onButtonPress is assigned to each number on keypad and concatenates each number 
	onButtonPress = (buttonInput) => {
		// var alert = String(buttonInput)
		// Alert.alert(alert)
		buttonInput = parseInt(buttonInput)
		this.setState({
			result: '',
			keypadInput:  this.state.keypadInput + '' + buttonInput 
		})
		return true
	}
	onOperatorButtonPress = (operatorInput) => {
		this.setState({
			inputBuffer: parseInt(this.state.keypadInput),
			keypadInput: '',
			operator:  operatorInput
		})
	}
	// Performs the calculation based on the operator stored in this.state.operator 
	onCalcButtonPress = () => { 
		switch(this.state.operator) {
			case 1:
				this.setState({
					result:   parseInt(this.state.inputBuffer) + parseInt(this.state.keypadInput) 
				})
				break;
			case 2:
				this.setState({
					result:   this.state.inputBuffer - this.state.keypadInput
				})
				break;
			case 3:
				this.setState({
					result:  this.state.inputBuffer * this.state.keypadInput 
				})
				break;
			case 4:
				this.setState({
					result:   this.state.inputBuffer / this.state.keypadInput 
				})
				break;
		}
		// Resets the state 
		this.setState({
			inputBuffer: this.state.result,
			keypadInput: '',
			operator: ''
		})
	}

	// 
	render() {
		return (
		<View style={styles.container}>
			<View style={styles.calcfield}>
				<Text style={styles.output}>{this.state.keypadInput}</Text>
				<Text style={styles.output}>{this.state.result}</Text>
			</View>
			<View style={styles.keypad}>
				<View style={styles.keypadrow}>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onButtonPress(1)}>
						<Text style={styles.keytext}>1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onButtonPress(2)}>
						<Text style={styles.keytext}>2</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onButtonPress(3)}>
						<Text style={styles.keytext}>3</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onOperatorButtonPress(1)}>
						<Text style={styles.keytext}>+</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.keypadrow}>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onButtonPress(4)}>
						<Text style={styles.keytext}>4</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onButtonPress(5)}>
						<Text style={styles.keytext}>5</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onButtonPress(6)}>
						<Text style={styles.keytext}>6</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onOperatorButtonPress(2)}>
						<Text style={styles.keytext}>-</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.keypadrow}>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onButtonPress(7)}>
						<Text style={styles.keytext}>7</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onButtonPress(8)}>
						<Text style={styles.keytext}>8</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onButtonPress(9)}>
						<Text style={styles.keytext}>9</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onOperatorButtonPress(3)}>
						<Text style={styles.keytext}>x</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.keypadrow}>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onButtonPress(0)}>
						<Text style={styles.keytext}>0</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.enterkey} onPress={() => this.onCalcButtonPress()}>
						<Text style={styles.keytext}>=</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.inputkey} onPress={() => this.onOperatorButtonPress(4)}>
						<Text style={styles.keytext}>%</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	calcfield: {
		margin: 58,
		color: '#fff',
		width: 300,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#5D5E5D',
	},
	output: {
		fontSize: 40
	},	
	keypad: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	keypadrow: 	{
		flexDirection: 'row',
	},
	inputkey: {
		backgroundColor: '#0174DF',
		width: 80,
		height: 80,
		margin: 4,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
	},
	enterkey: {
		backgroundColor: '#ea2300',
		width: 168,
		height: 80,
		margin: 4,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
	},	
	keytext: {
		color: '#fff',
		fontSize: 26
	},

  });
