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
		const { titleStyle, textStyle } = styles;
		const { name , page_thumbs , num_pages } = this.props.library.result;
		console.log('this.props.library.result   ' , this.props.library)
		console.log('page_thumbs   ' , page_thumbs)

		let image_uri1;
		let image_uri2;
		let image_uri3;

		if(page_thumbs){
			 image_uri1 = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ page_thumbs[0];
			 image_uri2 = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ page_thumbs[1];
			 image_uri3 = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ page_thumbs[2];
		}

		return (
				<TouchableOpacity
					>
						<Card withBorder= {true}>
							<Card >
								<CardSection withBorder= {true}>
									<Image
		          			style={{width: 270, height: 200}}
		          			source={{uri: image_uri1}}
		        			/>
									<Card  withBorder= {true}>
										<Image
											style={{width: 132, height: 100}}
											source={{uri: image_uri2}}
										/>
										<Image
											style={{width: 132, height: 100}}
											source={{uri: image_uri3}}
										/>
									</Card>
								</CardSection>
								<CardSection>
									<Text style={textStyle}>
										{name}
									</Text>
								</CardSection>
									<Text style={textStyle}>
										{num_pages + ' Cards'}
									</Text>
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
