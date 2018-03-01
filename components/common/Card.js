
import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		<View style={props.withBorder? styles.containerStyleWithBorder : styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyleWithBorder: {
		borderRadius: 5,
		shadowOpacity: 0.3,
		shadowRadius: 2,
		shadowColor: '#000',
		shadowOffset: { height: 0, width: 0 },
		margin:5,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor : 'white'
	},
	containerStyle: {
		elevation: 1,
		margin:5,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor : 'white'
	}
};

export { Card };
