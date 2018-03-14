import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';
import config from '../../../util/config';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { result }, parallax, parallaxProps, even } = this.props;

        var image_uri;

        if(result.thumbnail){
          image_uri = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ result.thumbnail;
        }else if(result.page_thumbs){
          image_uri = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ result.page_thumbs[0];
        }else{
          return null;
        }

        return parallax ? (
            <ParallaxImage
              source={{ uri: image_uri }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { result }, even , onPress } = this.props;
        const name = result.name;
        const uppercaseTitle = name ? (
            <Text
              style={styles.title}
              numberOfLines={2}
            >
                { name }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { onPress }}
              >
                <View style={styles.shadow} />
                <View style={styles.imageContainer}>
                    { this.image }
                    <View style={styles.radiusMask} />
                </View>
                <View style={styles.textContainer}>
                    { uppercaseTitle }
                    <Text style={styles.subtitle}>{result.num_pages} cards</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
