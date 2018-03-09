import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { ENTRIES } from './static/entries';
import { scrollInterpolators, animatedStyles } from './utils/animations';
import { connect } from 'react-redux';

const SLIDER_FIRST_ITEM = 0;

class SliderTestScreen extends Component {

  static navigationOptions = {
      title: null,
      header: false
  };

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_FIRST_ITEM
        };
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


    mainExample (number, title) {
        const { slider1ActiveSlide } = this.state;
        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.titleDark}>{`The name of the group goes here`}</Text>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES}
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

    render () {
        const example1 = this.mainExample(1, 'Default layout');
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      showsScrollIndicator={false}
                      directionalLockEnabled={true}
                    >
                        { example1 }
                        { example1 }
                        { example1 }
                        { example1 }

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

mapStateToProps = (state ,props) => ({
})


export default connect(mapStateToProps, null )(SliderTestScreen);
