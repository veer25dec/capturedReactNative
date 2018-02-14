import React, { Component } from 'react';
import { View, Text, ListView, RefreshControl} from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header, BackgroundView} from './common';
import { fetchGroups } from '../actions/GroupsActions'
import { connect } from 'react-redux';
import GroupsListItem from './GroupsListItem';

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
      refreshing: false,
    };
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.props.fetchGroups() // TODO: should try to change the state with a promise.
    //.then(() => {
      //this.setState({refreshing: false});
    //});;
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

  renderRow(group) {
		return <GroupsListItem group={group} />;
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
    }else if(this.props.teams){
      return (
        <View style={{ backgroundColor:'white', flex: 1}}>
        <Text style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10, fontSize : 24}}>{this.props.num_teams + ' groups'}</Text>
        <ListView
            refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh.bind(this)}
                  />
                }
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
        />
        </View>
      )
    }else{
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
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
        <View style={{ flex: 1 }}>
          {this.renderUI()}
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ groups }) => {
  const { num_teams, teams, error, isLoading} = groups;
  return { num_teams, teams, error, isLoading};
};

export default connect(mapStateToProps, { fetchGroups } )(Home);
