
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text} from 'react-native';
import { Card, CardSection, Input, Button, Spinner} from './common';
import { emailChanged, passwordChanged , loginUser} from '../actions'

class LoginScreen extends Component {

  // state = { email: '', password: '', error: '', isLoading: false };

  onEmailChanged(text){
      this.props.emailChanged(text);
  }

  onPasswordChanged(text){
      this.props.passwordChanged(text);
  }

  onLoginButtonPress(){
    const { email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderError(){
    if(this.props.error){
      return (
        <View styles={{ backGroundColor: 'white' }}>
          <Text styles={styles.errorTextStyle}>
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
      <Card withBorder={false}>
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
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alighSelf: 'center',
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
