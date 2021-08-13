import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Divider, Button, Header, Icon} from 'react-native-elements';

export default class HomeScreen extends React.PureComponent {
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
              {'Home'}
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
                'Our product is an accessory to help the deaf and hard-of-hearing to decipher the sounds and voices that surround them.\n Using artificial intelligence (AI) and sound/voice recognition, the product detects the type of sound signature (conversation, bell ring, alarm, broken glass), locates its origin and transcribes the sounds in written or oral form, depending on the individual (preference and handicap) and the situation. \n A system of vibrations indicates the detection of sounds. \n The comprehension of conversations occurs by an analysis of dialogues, retransmitted to the user’s hearing aids.\n This product will be in the form of a necklace connected to a smartphone and to hearing aid devices.'
              }
            </Text>
          </View>

          <Button
            title={'Start'}
            containerStyle={{
              marginVertical: 10,
              width: '40%',
            }}
            onPress={() => {
              this.props.navigation.navigate('LoginPage');
            }}
          />
        </View>
      </View>
    );
  }
}
