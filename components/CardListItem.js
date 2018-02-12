import React, { Component } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View,
	LayoutAnimation,
	Image,
	StyleSheet
	} from 'react-native';
import { CardSection, Card } from './common';
import config from '../util/config';

class CardListItem extends Component {

  componentWillMount() {
    console.log('Group is +++++++' , this.props.group)
  }
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	render() {
		const { titleStyle, textStyle } = styles;
		const { id, username , hero , num_users_all} = this.props.group;
		let image_uri = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+hero;
		console.log('image_uri is ++++ ', image_uri)
		return (
				<Card withBorder= {true}>
					<Card>
						<Image
          		style={{width: 330, height: 160}}
          		source={{uri: image_uri}}
        		/>
						<CardSection withBorder={false}>
						<Text style={textStyle}>
							{num_users_all}
						</Text>
						<Text style={textStyle}>
							{username}
						</Text>
						</CardSection>
					</Card>
				</Card>
		);
	}
}

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	},
	textStyle: {
		fontSize: 15,
		paddingLeft: 15,
		fontFamily: 'Helvetica',
	}
});

// const mapStateToProps = (state, ownProps) => {
// 	const expanded = state.selectedLibraryId === ownProps.library.id;
// 	return { expanded };
// };

export default CardListItem;
