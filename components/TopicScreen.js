import React, { Component } from 'react';
import { View, Text, ListView, RefreshControl, 	StyleSheet, Image , ScrollView, Dimensions} from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header, BackgroundView, ViewV} from './common';
import { fetchTopic } from '../actions/TopicActions'
import { connect } from 'react-redux';
import config from '../util/config';
import CardListItem from './CardListItem';

class TopicScreen extends Component {

  static navigationOptions = {
      title: null,
      header: false
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.pages),
    };
  }

  componentWillReceiveProps(newProps) {
    let pages = newProps.pages;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(pages),
    });
  }

  componentWillMount(){
    const groupId = this.props.navigation.state.params.groupId
    const topicId = this.props.navigation.state.params.topicId
    this.props.fetchTopic({groupId, topicId});
  }

  onResourcePress(group){
    // const navigate = this.props.navigation.navigate;
    // navigate("GroupHome", {groupId: group.id});
    // console.log('onGroupPress  was called')
  }

  onBackPress(){
    this.props.navigation.goBack(null);
  }

  renderUI(){
    if(this.props.error){
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }else if(this.props.isLoading){
      return <Spinner size='large'/>
    }else if(this.props.topic){

      const { titleStyle, textStyle } = styles;
      const { name, num_pages , thumbnail, num_views } = this.props.topic;

      let page_thumb = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ thumbnail;
      let deviceWidth = Dimensions.get('window').width;

      return (
        <ScrollView>
          <ViewV>
              <Image
                style={{width: deviceWidth-40, height: 160}}
                source={{uri: page_thumb}}
              />
              <CardSection withBorder={false}>
                <Text style={titleStyle}>
                  {name}
                </Text>
              </CardSection>
              <CardSection withBorder={false}>
                <Text style={textStyle}>
                  {num_pages + ' Cards'}
                </Text>
                <Text style={textStyle}>
                  {'. ' + num_views + ' Views'}
                </Text>
              </CardSection>
              <ListView
                  style={{width:deviceWidth-40}}
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) =>
                        <CardListItem card={rowData}/>
                    }
              />
          </ViewV>
        </ScrollView>
      );
    }else{
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            Failed to load the topic
          </Text>
        </View>
      );
    }
  }

  render() {
    console.log("Render was called with props ", this.props)
    return (
      <View style={{ flex: 1 ,
                    backgroundColor : 'white'
                  }}>
        <Header headerText={'Hive Learning'} goBack={true} onPress={this.onBackPress.bind(this)}/>
        <View style={{ flex: 1 }}>
          {this.renderUI()}
        </View>
      </View>
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
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

mapStateToProps = (state ,props) => ({
    isLoading: state.topic.isLoading,
    topic: state.topic.topic,
    pages: state.topic.pages,
    error: state.topic.error
})


export default connect(mapStateToProps, { fetchTopic } )(TopicScreen);
