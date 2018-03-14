import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	LayoutAnimation,
	Image,
	StyleSheet
	} from 'react-native';
import { CardSection, Card , ViewV, Spinner} from './common';
import config from '../util/config';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './tests/styles/SliderEntry.style';
import SliderEntry from './tests/components/SliderEntry';
import styles, { colors } from './tests/styles/index.style';
import { ENTRIES } from './tests/static/entries';
import { scrollInterpolators, animatedStyles } from './tests/utils/animations';
import { fetchGroup, fetchResources } from '../actions/GroupActions'

const SLIDER_FIRST_ITEM = 0;

class GroupsListItem extends Component {

	constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_FIRST_ITEM,
    };
  }

	componentDidMount() {
		const groupId = this.props.team.id
    this.props.fetchResources({groupId});
  }

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	onResourcePress(topic){
		console.log("onResourcePress ****************************" , topic)
		const navigate = this.props.navigation.navigate;
		const groupId = this.props.navigation.state.params.groupId
		navigate("TopicScreen", {groupId: groupId, topicId: topic.result.id});
	}

	_renderItemWithParallax ({item, index}, parallaxProps) {
      return (
          <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}
          />
      );
  }


  mainExample (number, title ) {
      const { slider1ActiveSlide } = this.state;
			var res = this.props.resources[this.props.team.id];
			if(!res){
				res = [];
			}
      return (
          <View style={styles.exampleContainer}>
              <Text style={styles.titleDark}>{this.props.team.username}</Text>
							<Text style={styles.subtitle}>{this.props.team.num_users} users</Text>
              <Carousel
								onPress={()=>this.onResourcePress({res})}
                ref={c => this._slider1Ref = c}
                data={res}
                renderItem={this._renderItemWithParallax}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                hasParallaxImages={true}
                firstItem={SLIDER_FIRST_ITEM}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
              />
          </View>
      );
  }

	renderUI(){

			const example1 = this.mainExample(1, 'Default layout');
      return (
				example1
      );
  }

	shouldComponentUpdate(nextProps) {
		var res = nextProps.resources[this.props.team.id];
		if(res){
				return true;
		}
		return false;
	}

	render() {
		const { onPress } = this.props
		return (
				<TouchableOpacity
					 onPress= { onPress }
					>
					{this.renderUI()}

				</TouchableOpacity>
		);
	}
}

mapStateToProps = (state ,props) => ({
    isLoading: state.group.isLoading,
    groups: state.group.groups,
    resources: state.group.resources,
    error: state.group.error,
		navigation: state.nav.navigation
})


export default connect(mapStateToProps, { fetchGroup, fetchResources } )(GroupsListItem);
