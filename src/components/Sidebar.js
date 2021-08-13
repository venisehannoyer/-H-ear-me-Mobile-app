import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class SidebarSection extends Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'http://lorempixel.com/400/200/abstract/' }} style={{ height: 200 }} />
                <Button onPress={() => { this.props.navigation.navigate('Home'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Home"
                />
                <Button onPress={() => { this.props.navigation.navigate('LoginPage'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Login" 
                />
                <Button onPress={() => { this.props.navigation.navigate('Gallery'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Pairing" 
                />

{/*                 <Button onPress={() => { this.props.navigation.navigate('Contact'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Contact" 
                />*/}
                <Button onPress={() => { this.props.navigation.navigate('RecognizeAudio'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Recognize Audio"  
                />  
                <Button onPress={() => { this.props.navigation.navigate('Confidentiality'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Confidentiality"  />                    
                <Button onPress={() => { this.props.navigation.navigate('Settings'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Settings" />        
            </View>
        );
    }
}

export default SidebarSection;