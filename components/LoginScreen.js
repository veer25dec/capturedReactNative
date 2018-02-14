
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text} from 'react-native';
import { Card, CardSection, Input, Button, Spinner, BackgroundView} from './common';
import { emailChanged, passwordChanged , loginUser} from '../actions/AuthActions'

class LoginScreen extends Component {

  static navigationOptions = {
      title: null,
      header: false
  };

  onEmailChanged(text){
      this.props.emailChanged(text);
  }

  onPasswordChanged(text){
      this.props.passwordChanged(text);
  }

  onLoginButtonPress(){
    const navigate = this.props.navigation.navigate;
    const { email, password} = this.props;
    this.props.loginUser({email, password, navigate});
  }

  renderError(){
    if(this.props.error){
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton(){
    if(this.props.isLoading){
      return <Spinner size='large'/>
    }
    return(
      <Button onPress={this.onLoginButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render(){
    return(
      <BackgroundView>
        <Text style={{ paddingTop: 100, paddingBottom: 50, fontSize : 32}}>Sign In</Text>
        <CardSection withBorder={false}>
          <Input
            placeholder='email@gmail.com'
            onChangeText={ this.onEmailChanged.bind(this)}
            value={this.props.email}
            />
        </CardSection>
        <CardSection withBorder={false}>
          <Input
            secureTextEntry
            placeholder='password'
            onChangeText={ this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection withBorder={false}>
          <Card withBorder={false}/>
          {this.renderButton()}
          <Card withBorder={false}/>
        </CardSection>
      </BackgroundView>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, isLoading} = auth;

  return { email, password, error, isLoading};
};

export default connect(mapStateToProps, { emailChanged,
                                          passwordChanged,
                                          loginUser
                                        } )(LoginScreen);
