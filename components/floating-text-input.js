import React , { Component } from 'react';
import { AppRegistry,StyleSheet, TextInput,Text, View } from 'react-native';

export default class FloatingTextInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {placeholderText:this.props.placeholderText};
  }
  render() {
    return (
      <View style={{flexDirection:'row',paddingTop:20}}>
        <TextInput
          style={{flex:0.8, height:40}}
          textAlign={'center'}
          placeholder = {this.state.placeholderText}
       />
       </View>
    );
  }
}
