// Use this view when you want its children to displayed virtically. You can pass 3 props to this View :
// - fillParent: boolean - this specifies if you want this view to have margin or navigationOptions.
// - border: boolean - this specifies if the view has a border



import React from 'react';
import { View } from 'react-native';

const ViewV = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor : 'white'
	}
};

export { ViewV };
