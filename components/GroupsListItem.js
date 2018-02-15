import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	LayoutAnimation,
	Image,
	StyleSheet
	} from 'react-native';
import { CardSection, Card } from './common';
import config from '../util/config';
import { connect } from 'react-redux';
import { fetchGroup } from '../actions/GroupActions'

class GroupsListItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	render() {
		console.log('this.props.group    ',this.props.group)
		const { titleStyle, textStyle } = styles;
		const { username , hero , num_users_all} = this.props.group;
		const { onPress } = this.props
		let image_uri = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ hero;
		return (
				<TouchableOpacity
					 onPress= { onPress }
					>
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
	}
});

// const mapStateToProps = ({ nav }) => {
// 	// const {navigation} = nav;
//   return {};
// }

// export default connect(mapStateToProps,{ fetchGroup })(GroupsListItem);

export default GroupsListItem;
