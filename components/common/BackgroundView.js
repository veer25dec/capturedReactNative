import React from 'react';
import { View } from 'react-native';

const BackgroundView = (props) => {
	return (
		<View style={props.withBorder? styles.containerStyle : styles.containerStyleWithoutBorder}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor : 'white'
	},
	containerStyleWithoutBorder: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor : 'white'
	}
};

export { BackgroundView };
