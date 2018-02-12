import React, { Component } from 'react';
import { View, Text, ListView} from 'react-native';
import { Card, CardSection, Input, Button, Spinner} from './common';
import { fetchGroups } from '../actions/GroupsActions'
import { connect } from 'react-redux';
import CardListItem from './CardListItem';

class Home extends Component {

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

  static navigationOptions = {
      title: "Home"
  };

  componentWillMount() {
  	// const ds = new ListView.DataSource({
  	// 	rowHasChanged: (r1, r2) => r1 !== r2
  	// });
  	// this.dataSource = ds.cloneWithRows(this.props.teams);
    this.props.fetchGroups();
  }

  renderRow(group) {
    console.log('renderRow was called')
		return <CardListItem group={group} />;
	}


  renderUI(){
   console.log('Datasource are +++++++' , this.state.dataSource)

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
    console.log('Teams are +++++++' , this.props.teams)

    return(
      <Card withBorder={false}>
        {this.renderUI()}
      </Card>
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
