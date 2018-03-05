import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	LayoutAnimation,
	Image,
	StyleSheet
	} from 'react-native';
import { CardSection, Card , ViewV} from './common';
import config from '../util/config';
import { connect } from 'react-redux';

class GroupsListItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	render() {
		console.log('this.props.group    ',this.props.group)
		const { titleStyle, textStyle , containerStyle } = styles;
		const { username , hero , num_users_all} = this.props.group;
		const { onPress } = this.props
		let image_uri = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ hero;
		return (
				<TouchableOpacity
					 onPress= { onPress }
					>
						<Card withBorder= {true}>
							<View style={containerStyle}>
								<Image
		          		style={{width: 330, height: 160}}
		          		source={{uri: image_uri}}
		        		/>
							</View>
							<CardSection>
								<Text style={textStyle}>
									{num_users_all}
								</Text>
								<Text style={textStyle}>
									{username}
								</Text>
							</CardSection>
						</Card>
				</TouchableOpacity>
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
	},
	containerStyle: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderTopRightRadius:5,
		borderTopLeftRadius:5,
		overflow: 'hidden'
	}
});

export default GroupsListItem;
