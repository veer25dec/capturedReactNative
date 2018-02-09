import React, { Component } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View,
	LayoutAnimation
	} from 'react-native';
import { CardSection } from './common';

class CardListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	render() {
		const { titleStyle } = styles;
		const { id, username } = this.props.group;
    console.log('Group is +++++++' , this.props.group)
		return (
				<Card withBorder={false}>
					<CardSection>
						<Text style={titleStyle}>
							{username}
						</Text>
					</CardSection>
				</Card>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

// const mapStateToProps = (state, ownProps) => {
// 	const expanded = state.selectedLibraryId === ownProps.library.id;
// 	return { expanded };
// };

export default CardListItem;
