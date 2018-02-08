import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text} from 'react-native';
import { Card, CardSection, Input, Button, Spinner} from './common';
import { emailChanged, passwordChanged , loginUser} from '../actions'

class LoginScreen extends Component {

  onEmailChanged(text){
      this.props.emailChanged(text);
  }

  onPasswordChanged(text){
      this.props.passwordChanged(text);
  }

  onLoginButtonPress(){
    const { email, password} = this.props;
    this.props.loginUser({email, passwrod});
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
      <Button opPress={this.onLoginButtonPress.bind(this)}
        Login
        />
    );
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={ this.onEmailChanged.bind(this)}
            value={this.props.email}
            />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={ this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
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
