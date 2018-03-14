import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView , ListView, RefreshControl } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header, BackgroundView, ViewV} from './common';
import { fetchGroups } from '../actions/GroupsActions'
import { connect } from 'react-redux';
import GroupsListItem from './GroupsListItem';
import styles, { colors } from './tests/styles/index.style';

class Home extends Component {

  static navigationOptions = {
      title: null,
      header: false
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.teams),
      refreshing: false
    };
  }
  _onRefresh() {
    this.setState({refreshing: true});
    this.props.fetchGroups() // TODO: should try to change the state with a promise.
  }

  componentWillReceiveProps(newProps) {
    let teams = newProps.teams;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(teams),
      refreshing: false
    });
  }

  componentWillMount() {
    this.props.fetchGroups();
  }

  onGroupPress(group){
		const navigate = this.props.navigation.navigate;
		navigate("GroupHome", {team: group});
	}



  renderUI(){

    if(this.props.error){
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.titleDark}>
            {this.props.error}
          </Text>
        </View>
      );
    }else if(this.props.isLoading){
      return <Spinner size='large'/>
    }else if(this.props.teams){
      return (
          <View style={styles.container}>
              <StatusBar
                translucent={true}
                backgroundColor={'rgba(0, 0, 0, 0.3)'}
                barStyle={'light-content'}
              />
             <ListView
                  refreshControl={
                               <RefreshControl
                                 refreshing={this.state.refreshing}
                                 onRefresh={this._onRefresh.bind(this)}
                               />
                            }
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                     <GroupsListItem team={rowData} onPress={()=>this.onGroupPress(rowData)}/>
                  }
            />
          </View>
      );
    }else{
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.titleDark}>
            Failed to load the list of groups
          </Text>
        </View>
      );
    }
  }


  render(){
    return(
      <View style={{ flex: 1 ,
                    backgroundColor : 'white'
                  }}>
        <Header headerText={'Hive Learning'} />
        {this.renderUI()}
      </View>
    );
  }
}

const mapStateToProps = ({ groups }) => {
  const { num_teams, teams, error, isLoading} = groups;
  return { num_teams, teams, error, isLoading};
};

export default connect(mapStateToProps, { fetchGroups } )(Home);
