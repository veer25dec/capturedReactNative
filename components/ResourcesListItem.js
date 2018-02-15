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

class ResourcesListItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	render() {
    console.log('this.props.library.result   ' , this.props.library.result)
		const { titleStyle, textStyle } = styles;
		const { name, num_pages , thumbnail } = this.props.library.result;
		let image_uri = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ thumbnail;
		return (
				<TouchableOpacity
					>
						<Card withBorder= {true}>
							<Card>
								<Image
		          		style={{width: 330, height: 160}}
		          		source={{uri: image_uri}}
		        		/>
								<CardSection withBorder={false}>
								<Text style={textStyle}>
									{num_pages}
								</Text>
								<Text style={textStyle}>
									{name}
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

export default ResourcesListItem;
