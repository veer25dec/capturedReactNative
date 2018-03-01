
import React , { Component } from 'react';
import { Text, View , TouchableOpacity } from 'react-native';
import { ViewH } from './';

class Header extends Component {

	showBackButton(){
		if(this.props.goBack){
      return (
				<View style = {styles.leftContainer}>
					<TouchableOpacity onPress={this.props.onPress}>
	          <Text style={{fontSize:15}}>
	            Back
	          </Text>
					</TouchableOpacity>
					</View>
      );
    }else{
			return (
				<View style = {styles.leftContainer}/>
			);
		}
	}
	render() {
		return (
				<View style = {styles.navBar}>
					{this.showBackButton()}
					<Text style = {styles.textStyle}>{this.props.headerText}</Text>
					<View style = {styles.rightContainer}/>

				</View>
			);
	}
}

const styles = {
	textStyle: {
		fontSize: 20
	},
	navBar: {
		height: 60,
		backgroundColor: '#F8F8F8',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	leftContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginLeft:10,
	},
	rightContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginRight:10,
	},
	rightIcon: {
		height: 10,
		width: 10,
		resizeMode: 'contain',
	}
};

export { Header };
