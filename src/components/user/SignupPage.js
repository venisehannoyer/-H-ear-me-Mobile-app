import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {Input, SearchBar, Icon, Button, Header} from 'react-native-elements';

import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const dummySearchBarProps = {
  showLoading: true,
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur'),
  onCancel: () => console.log('cancel'),
  onClearText: () => console.log('cleared'),
  onChangeText: text => console.log('text:', text),
};

class LoginPage extends Component {
  render() {
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <Header
          statusBarProps={{barStyle: 'light-content'}}
          barStyle="light-content"
          leftComponent={
            <Icon
              name="menu"
              size={40}
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
          centerComponent={
            <Image
              source={{
                //uri: 'https://i.postimg.cc/dtCKLDbB/Hearme-Logo-Black.jpg'
                uri: 'https://i.postimg.cc/SNCMqQP4/Logo-big.png',
                // uri: 'https://i.postimg.cc/jdV3QB7F/IMG-20191105-10568.jpg'
              }}
              style={{
                flex: 1,
                height: '100%',
                width: '100%',
                resizeMode: 'contain',
              }}
            />
          }
          containerStyle={{
            backgroundColor: '#3175b8',
            justifyContent: 'space-around',
            marginTop: 20,
          }}
        />
        <View style={styles.contentView}>
          <View
            style={{
              backgroundColor: 'rgba(46, 50, 72, 1)',
              width: SCREEN_WIDTH,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                marginVertical: 10,
                fontWeight: '300',
              }}>
              Sign up
            </Text>
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(110, 120, 170, 1)',
                height: 50,
                width: SCREEN_WIDTH - 50,
                marginVertical: 10,
              }}
              leftIcon={
                <SimpleIcon
                  name="user"
                  color="rgba(110, 120, 170, 1)"
                  size={25}
                />
              }
              iconContainerStyle={{marginLeft: 20}}
              placeholder="Username"
              placeholderTextColor="rgba(110, 120, 170, 1)"
              inputStyle={{marginLeft: 10, color: 'white'}}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="light"
              keyboardType="email-address"
              returnKeyType="next"
              ref={input => (this.usernameInput = input)}
              onSubmitEditing={() => {
                this.email2Input.focus();
              }}
              blurOnSubmit={false}
            />
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(110, 120, 170, 1)',
                height: 50,
                width: SCREEN_WIDTH - 50,
                marginVertical: 10,
              }}
              leftIcon={
                <MaterialIcon
                  name="email-outline"
                  color="rgba(110, 120, 170, 1)"
                  size={25}
                />
              }
              iconContainerStyle={{marginLeft: 20}}
              placeholder="Email"
              placeholderTextColor="rgba(110, 120, 170, 1)"
              inputStyle={{marginLeft: 10, color: 'white'}}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="light"
              keyboardType="email-address"
              returnKeyType="next"
              ref={input => (this.email2Input = input)}
              onSubmitEditing={() => {
                this.password2Input.focus();
              }}
              blurOnSubmit={false}
            />
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(110, 120, 170, 1)',
                height: 50,
                width: SCREEN_WIDTH - 50,
                marginVertical: 10,
              }}
              leftIcon={
                <SimpleIcon
                  name="lock"
                  color="rgba(110, 120, 170, 1)"
                  size={25}
                />
              }
              iconContainerStyle={{marginLeft: 20}}
              placeholder="Password"
              placeholderTextColor="rgba(110, 120, 170, 1)"
              inputStyle={{marginLeft: 10, color: 'white'}}
              autoCapitalize="none"
              keyboardAppearance="light"
              secureTextEntry={true}
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="next"
              ref={input => (this.password2Input = input)}
              onSubmitEditing={() => {
                this.confirmPassword2Input.focus();
              }}
              blurOnSubmit={false}
            />
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(110, 120, 170, 1)',
                height: 50,
                width: SCREEN_WIDTH - 50,
                marginTop: 10,
                marginBottom: 30,
              }}
              leftIcon={
                <SimpleIcon
                  name="lock"
                  color="rgba(110, 120, 170, 1)"
                  size={25}
                />
              }
              //   iconContainerStyle={{marginEnd: 20}}
              placeholder="Confirm Password"
              placeholderTextColor="rgba(110, 120, 170, 1)"
              inputStyle={{marginLeft: 10, color: 'white'}}
              autoCapitalize="none"
              keyboardAppearance="light"
              secureTextEntry={true}
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="done"
              ref={input => (this.confirmPassword2Input = input)}
              blurOnSubmit={true}
            />
          </View>
          <Button
            title={'Have an Account? Login ->'}
            containerStyle={{
              marginVertical: 10,
            }}
            buttonStyle={{
              backgroundColor: 'rgba(46, 50, 72, 1)',
            }}
            titleStyle={{
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              this.props.navigation.navigate('LoginPage');
            }}
          />
          <Button
            title={'SIGN UP'}
            containerStyle={{
              marginVertical: 10,
              width: '70%',
            }}
            onPress={() => {
              //   this.props.navigation.navigate('LoginPage');
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(46, 50, 72, 1)',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#B46486',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 50, 72, 1)',
  },
  triangleLeft: {
    position: 'absolute',
    left: -20,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent',
  },
  triangleRight: {
    position: 'absolute',
    right: -20,
    top: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent',
  },
  inputContainerStyle: {
    marginTop: 16,
    width: '90%',
  },
});

export default LoginPage;
