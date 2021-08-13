import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Divider, Button, Header, Icon} from 'react-native-elements';

export default class Confidentiality extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
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
                uri: 'https://i.postimg.cc/SNCMqQP4/Logo-big.png',
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
        <View
          style={{
            flex: 1,
            backgroundColor: '#ccf2ff',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#b83175',
              width: '40%',
              paddingTop: 10,
              marginVertical: 10,
              borderRadius: 10,
              height: 45,
            }}>
            <Text
              style={{
                color: '#000000',
                textAlign: 'center',
              }}>
              {'Confidentiality'}
            </Text>
          </View>
          <Divider
            style={{
              backgroundColor: 'grey',
              height: 1,
              marginVertical: 10,
              opacity: 0.6,
            }}
          />

          <View
            style={{
              width: '90%',
              paddingTop: 10,
              marginHorizontal: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#1212ee',
                textAlign: 'center',
                fontSize: 20,
                lineHeight: 30,
              }}>
              {
                'Your privacy and the respect of your confidential information are at the core of our values and processes. We make sure to not track any of your personal information - and for the minimal that is required for the good functionning such as the settings, or your login and invoicing information, we encrypt them in a way that not even our employees can access them without permission.'
              }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
