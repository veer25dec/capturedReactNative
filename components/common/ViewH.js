
import React from 'react';
import { View } from 'react-native';

const ViewH = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};


const styles = {
	containerStyle: {
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	}
};

export { ViewH };
