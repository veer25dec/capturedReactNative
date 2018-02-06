import React , { Component } from 'react';
import { AppRegistry,StyleSheet, TextInput,Text, View ,KeyboardAvoidingView,Button,TouchableOpacity,ActivityIndicator} from 'react-native';
import FloatingTextInput from './floating-text-input';
import ApiUtils from '../util/api-utils'

type Props = {
  error : boolean,
  isLoading : boolean,
  isLoggedIn : boolean,
  appLoginResponse : Object,
  loginUser : Function,
}

const getErrorMessage = () => (
  <Text style={styles.errorText}>
    An Error occured when fetching data
  </Text>
);
const getSuccessMessage = () => (
  <Text style={styles.errorText}>
    You are loggedin
  </Text>
);

const onLogin = () => {
    navigation.navigate('Home');
    // navigate('Home', {title : 'Second Screen'});
};

export default LoginScreen  = (props : Props) =>  {

  const {
    isLoading,
    error,
    isLoggedIn,
    loginUser,
    appLoginResponse,
  } = props;

  console.log('proprs are here ++++++ ' , props.isLoading)
   return (

     <View style={{
        flex: 1
      }}>
      <View style={styles.container}>
        <View style={{
           flex: 1,
           flexDirection: 'column',
           justifyContent: 'flex-start',
           alignItems: 'center',
         }}>
        <Text style={{ paddingTop: 100, paddingBottom: 50, fontSize : 32}}>Sign In</Text>
        <View style={{flexDirection:'row',paddingTop:20}}>
          <TextInput
            style={{flex:0.8, height:40}}
            textAlign={'center'}
            placeholder = 'Email'
            value = 'veer25mangat@gmail.com'
           // onChangeText={(text) => this.setState({emailText:text})}
         />
         </View>
         <View style={{flexDirection:'row',paddingTop:20}}>
           <TextInput
             style={{flex:0.8, height:40}}
             textAlign={'center'}
             placeholder = 'Password'
             value = 'Anna1234'
             secureTextEntry = {true}
            // onChangeText={(text) => this.setState({passwordText:text})}
          />
          </View>
        <View style={styles.container}>
       <TouchableOpacity
          style={styles.button}
          onPress={loginUser}
        >
        {isLoading ? <ActivityIndicator /> : <Text> Sign In </Text>}
        </TouchableOpacity>
        {error ? getErrorMessage() : null}
        {isLoggedIn? getSuccessMessage()  : null}
        </View>
        </View>
      </View>
     </View>
   );
}

const styles = StyleSheet.create({
 bigblue: {
   color: 'blue',
   fontWeight: 'bold',
   fontSize: 30,
 },
 red: {
   color: 'red',
 },
 container: {
   flex: 1,
   justifyContent: 'flex-start',
   paddingHorizontal: 10,
   paddingTop:50
 },
 button: {
   alignItems: 'center',
   backgroundColor: '#DDDDDD',
   padding: 10
 },
 countContainer: {
   alignItems: 'center',
   padding: 10
 },
 countText: {
   color: '#FF00FF'
 }
});
