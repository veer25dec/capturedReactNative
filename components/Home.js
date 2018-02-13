import React, { Component } from 'react';
import { View, Text, ListView} from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header} from './common';
import { fetchGroups } from '../actions/GroupsActions'
import { connect } from 'react-redux';
import CardListItem from './CardListItem';

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
    };
  }

  componentWillReceiveProps(newProps) {
    let teams = newProps.teams;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(teams)
    });
  }

  componentWillMount() {
    this.props.fetchGroups();
  }

  renderRow(group) {
    console.log('renderRow was called')
		return <CardListItem group={group} />;
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
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
          />
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
  const { teams, error, isLoading} = groups;
  return { teams, error, isLoading};
};

export default connect(mapStateToProps, { fetchGroups } )(Home);
