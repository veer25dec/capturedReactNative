import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	LayoutAnimation,
	Image,
	StyleSheet
	} from 'react-native';
import { CardSection, Card ,ViewV,ViewH} from './common';
import config from '../util/config';
import { connect } from 'react-redux';

class ResourcesListItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	render() {
		const { titleStyle, textStyle,containerStyle } = styles;
		const { name , page_thumbs , num_pages, thumbnail } = this.props.topic.result;
		console.log('this.props.library.result   ' , this.props.topic)
		console.log('page_thumbs   ' , page_thumbs)
		const { onPress } = this.props

		let image_uri1;
		let image_uri2;
		let image_uri3;

		if(page_thumbs){
			 image_uri1 = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ thumbnail;
			 image_uri2 = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ page_thumbs[0];
			 image_uri3 = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ page_thumbs[1];
		}

		return (
				<TouchableOpacity onPress= { onPress }>
						<Card withBorder= {true}>
							<View style={containerStyle}>
								<ViewH>
									<View style={styles.containerStyleBTL}>
										<Image
											style={{width: 270, height: 200}}
											source={{uri: image_uri1}}
										/>
									</View>
									<View style={styles.containerStyleBTR}>
											<Image
												style={{width: 132, height: 99}}
												source={{uri: image_uri2}}
											/>
											<Image
												style={{width: 132, height: 99}}
												source={{uri: image_uri3}}
											/>
									</View>
								</ViewH>
								<CardSection>
									<Text style={textStyle}>
										{name}
									</Text>
								</CardSection>
									<Text style={textStyle}>
										{num_pages + ' Cards'}
									</Text>
							</View>
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
			borderRadius:5,
			overflow: 'hidden',
			backgroundColor: 'white'
		},
	containerStyleBTL: {
			flex: 2,
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'center',
			borderTopLeftRadius:5,
			overflow: 'hidden',
			marginRight:2,
			backgroundColor: 'white'
		},
	containerStyleBTR: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'center',
			borderTopRightRadius:5,
			overflow: 'hidden',
			marginBottom:2,
			backgroundColor: 'white'
		},
});

export default ResourcesListItem;
