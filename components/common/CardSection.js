
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={props.withBorder ? styles.containerStyle:styles.containerStyleWithoutBorder}>
			{props.children}
		</View>
	);
};


const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	},
	containerStyleWithoutBorder: {
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	},
};

export { CardSection };
