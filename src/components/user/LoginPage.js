import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, Image } from 'react-native';
import { Input, SearchBar, Icon, Button, Header } from 'react-native-elements';

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
                            backgroundColor: '#2F343B',
                            width: SCREEN_WIDTH,
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 30,
                                marginVertical: 10,
                                fontWeight: '300',
                                marginTop: 10,
                                color: 'white',
                            }}
                        >
                            Login
                        </Text>
                        <View style={styles.overlay}>
                            <View style={styles.triangleLeft} />
                            <Input
                                inputContainerStyle={{
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    borderLeftWidth: 0,
                                    height: 50,
                                    width: SCREEN_WIDTH - 80,
                                    backgroundColor: 'white',
                                }}
                                leftIcon={
                                    <MaterialIcon name="email-outline" color="black" size={25} />
                                }
                                placeholder="Email"
                                placeholderTextColor="black"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardAppearance="light"
                                keyboardType="email-address"
                                returnKeyType="next"
                                ref={input => (this.emailInput = input)}
                                onSubmitEditing={() => {
                                    this.passwordInput.focus();
                                }}
                                blurOnSubmit={false}
                            />
                            <View style={styles.triangleRight} />
                        </View>
                        <View style={[styles.overlay, { marginBottom: 30, marginTop: 1 }]}>
                            <View style={styles.triangleLeft} />
                            <Input
                                inputContainerStyle={{
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    borderLeftWidth: 0,
                                    height: 50,
                                    width: SCREEN_WIDTH - 80,
                                    backgroundColor: 'white',
                                }}
                                leftIcon={<SimpleIcon name="lock" color="black" size={25} />}
                                placeholder="Password"
                                placeholderTextColor="black"
                                autoCapitalize="none"
                                keyboardAppearance="light"
                                secureTextEntry={true}
                                autoCorrect={false}
                                keyboardType="default"
                                returnKeyType="done"
                                ref={input => (this.passwordInput = input)}
                                blurOnSubmit={true}
                            />
                            <View style={styles.triangleRight} />
                        </View>
                    </View>
                    <Button
                        title={'SIGN UP'}
                        containerStyle={{
                            marginVertical: 10,
                            width: '70%',
                        }}
                        onPress={() => { this.props.navigation.navigate('SignupPage'); }}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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
