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

class CardListItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	render() {
		const { titleStyle, textStyle,containerStyle } = styles;
		const { name , order, thumbnail} = this.props.card;
		console.log('this.props.library.result   ' , this.props.topic)

		let image_uri1 = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ thumbnail;

		return (
				<TouchableOpacity>
            <Card withBorder= {true}>
            <View style={styles.containerStyle}>
    						<CardSection >
                    <View style={styles.containerStyleBTL}>
                      <Text style={textStyle}>
                        {order}
                      </Text>
                      <Text style={textStyle}>
                        {name}
                      </Text>
                    </View>
                    <View style={styles.containerStyleBTR}>
                      <Image
                        style={{width: 99, height: 66}}
                        source={{uri: image_uri1}}
                      />
                    </View>
    						</CardSection>
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
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'center',
			borderTopLeftRadius:5,
			overflow: 'hidden',
			marginRight:2,
			backgroundColor: 'white'
		},
	containerStyleBTR: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'center',
			borderTopRightRadius:5,
			overflow: 'hidden',
			marginBottom:2,
			backgroundColor: 'white'
		},
});

export default CardListItem;
