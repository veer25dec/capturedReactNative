import React, { Component } from 'react';
import { View, Text, ListView} from 'react-native';
import { Card, CardSection, Input, Button, Spinner} from './common';
import { fetchGroups} from '../actions/GroupsActions'
import { connect } from 'react-redux';
import CardListItem from './CardListItem';

class Home extends Component {

  static navigationOptions = {
      title: "Home"
  };

  setUpListView(){
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
    this.dataSource = ds.cloneWithRows(this.props.teams);
  }

  componentWillMount() {
    this.setUpListView();
    this.props.fetchGroups();
  }

  renderRow(group) {
		return <CardListItem group={group} />;
	}


  renderUI(){
    // console.log('Teams are +++++++' , this.props.teams)

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
              dataSource={this.dataSource}
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
      // <Card withBorder={false}>
      //   {this.renderUI()}
      // </Card>
      <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
      />
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
