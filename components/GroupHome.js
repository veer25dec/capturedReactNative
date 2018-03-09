import React, { Component } from 'react';
import { View, Text, ListView, RefreshControl, 	StyleSheet, Image , ScrollView, Dimensions} from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header, BackgroundView, ViewV} from './common';
import { fetchGroup, fetchResources } from '../actions/GroupActions'
import { connect } from 'react-redux';
import config from '../util/config';
import ResourcesListItem from './ResourcesListItem';

class GroupHome extends Component {

  static navigationOptions = {
      title: null,
      header: false
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.resources[this.props.team.id]),
    };
  }

  componentWillReceiveProps(newProps) {
    let library = newProps.resources[this.props.team.id];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(library),
    });
  }

  componentWillMount(){
    const groupId = this.props.navigation.state.params.groupId
    this.props.fetchGroup({groupId});
  }

  onResourcePress(topic){
    console.log('onResourcePress  was called ', topic)
    const navigate = this.props.navigation.navigate;
    const groupId = this.props.navigation.state.params.groupId
    navigate("TopicScreen", {groupId: groupId, topicId: topic.result.id});
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
    }else if(this.props.group){

      const { titleStyle, textStyle } = styles;
      const { username , hero } = this.props.group;
      const { num_results } = this.props.resources;

      let image_uri = config.API_BASE_URL + 'api/inbound/thumbnail?w=880&h=440&f='+ hero;
      let deviceWidth = Dimensions.get('window').width;

      return (
        <ScrollView>
          <ViewV>
              <Image
                style={{width: deviceWidth, height: 160}}
                source={{uri: image_uri}}
              />
              <CardSection withBorder={false}>
                <Text style={titleStyle}>
                  {username}
                </Text>
              </CardSection>
              <CardSection withBorder={false}>
                <Text style={textStyle}>
                  {num_results + ' resources'}
                </Text>
              </CardSection>
              <ListView
                  style={{width:deviceWidth-40}}
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) =>
                        <ResourcesListItem topic={rowData} onPress={()=>this.onResourcePress(rowData)}/>
                    }
              />
          </ViewV>
        </ScrollView>
      );
    }else{
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            Failed to load the group
          </Text>
        </View>
      );
    }
  }

  render() {
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
    isLoading: state.group.isLoading,
    group: state.group.groups[props.navigation.state.params.groupId],
    resources: state.group.resources,
    error: state.group.error
})


export default connect(mapStateToProps, { fetchGroup } )(GroupHome);
