
import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		<View style={props.withBorder? styles.containerStyle : styles.containerStyleWithoutBorder}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight:5,
		marginTop: 10,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor : 'white'
	},
	containerStyleWithoutBorder: {
		elevation: 1,
		marginLeft: 5,
		marginRight:5,
		marginTop: 10,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor : 'white'
	}
};

export { Card };
