
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={props.withBorder? styles.containerStyleWithBorder : styles.containerStyle}>
			{props.children}
		</View>
	);
};


const styles = {
	containerStyleWithBorder: {
		borderBottomWidth: 1,
		borderColor: '#ddd',
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	},
	containerStyle: {
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	},
};

export { CardSection };
