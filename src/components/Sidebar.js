import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements';

class SidebarSection extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: 'https://i.postimg.cc/SNCMqQP4/Logo-big.png'}}
            style={{
              height: 50,
              width: 200,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
          icon={
            <Icon
              name="home"
              type="antdesign"
              size={23}
              color="black"
              style={{
                ...styles.icon,
              }}
            />
          }
          title="Home"
          iconRight
          titleStyle={{
            ...styles.text,
          }}
          buttonStyle={{
            ...styles.button,
          }}
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate('LoginPage');
          }}
          icon={
            <Icon
              name="login"
              type="antdesign"
              size={23}
              color="black"
              style={{
                ...styles.icon,
              }}
            />
          }
          title="Login"
          iconRight
          titleStyle={{
            ...styles.text,
          }}
          buttonStyle={{
            ...styles.button,
          }}
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate('Gallery');
          }}
          icon={
            <Icon
              name="sync"
              type="antdesign"
              size={23}
              color="black"
              style={{
                ...styles.icon,
              }}
            />
          }
          title="Pairing"
          iconRight
          titleStyle={{
            ...styles.text,
          }}
          buttonStyle={{
            ...styles.button,
          }}
        />

        {/*                 <Button onPress={() => { this.props.navigation.navigate('Contact'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={23}
                            color="white"
                        />
                    }
                    title="Contact" 
                />
                <Button onPress={() => { this.props.navigation.navigate('List'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={23}
                            color="white"
                        />
                    }
                    title="List"  />  */}
        <Button
          onPress={() => {
            this.props.navigation.navigate('Confidentiality');
          }}
          icon={
            <Icon
              name="info"
              type="antdesign"
              size={23}
              color="black"
              style={{
                ...styles.icon,
              }}
            />
          }
          title="Confidentiality"
          iconRight
          titleStyle={{
            ...styles.text,
          }}
          buttonStyle={{
            ...styles.button,
          }}
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate('Settings');
          }}
          icon={
            <Icon
              name="setting"
              type="antdesign"
              size={23}
              color="black"
              style={{
                ...styles.icon,
              }}
            />
          }
          title="Settings"
          iconRight
          titleStyle={{
            ...styles.text,
          }}
          buttonStyle={{
            ...styles.button,
          }}
        />
      </View>
    );
  }
}

export default SidebarSection;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  text: {
    color: 'black',
    marginStart: 10,
    fontSize: 18,
  },
  icon: {
    width: 40,
    alignItems: 'flex-end',
  },
});
