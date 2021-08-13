import React from 'react';
import { View, StyleSheet, SectionList } from 'react-native';
//import IconAntDesign from 'react-native-vector-icons/AntDesign';
//import {Icon} from 'react-native-elements'

import { ListItem, Divider, SearchBar, Header, Icon  } from 'react-native-elements';

const ORANGE = '#FF9500';
const BLUE = '#007AFF';
const GREEN = '#4CD964';
const RED = '#FF3B30';
const GREY = '#8E8E93';
const PURPLE = '#5856D6';
const TEAL_BLUE = '#5AC8FA';

const sections = [
    {
        
        data: [

            {
                title: '   Mode',
                icon: 'sound',
                backgroundColor: ORANGE,
               
                
            },
               
            {
                title: '   Neckband',
                icon: 'ios-bluetooth',
                backgroundColor: BLUE,
                hideChevron: true,
                checkbox: true,
            },
            {
                title: '   Hearing aids',
                backgroundColor: BLUE,
                icon: 'ios-bluetooth',
                hideChevron: true,
                checkbox: true,
            },
            {
                title: '   Vibrations',
                backgroundColor: GREEN,
                icon: 'ios-radio',
                //rightTitle: 'Off',
                hideChevron: true,
                checkbox: true,
            },
            {
                title: '   Vibration intensity',
                backgroundColor: GREEN,
                icon: 'ios-phone-portrait',
            },
            {
                title: '   Sensor sensitivity',
                backgroundColor: TEAL_BLUE,
                icon: 'ios-radio',
                
            },
        ],
    },
    {
        data: [
            {
                title: '   Vibrate when name is spoken',
                icon: 'ios-radio',
                backgroundColor: GREEN,
                rightTitle: 'Off'
            },
            {
                title: '   Train with customized voices',
                backgroundColor: GREY,
                icon: 'ios-switch',
            },
            {
                title: '   Do Not Disturb',
                backgroundColor: PURPLE,
                icon: 'ios-moon',
            },
        ],
    },
    {
        data: [
            {
                title: '   General',
                icon: 'ios-settings',
                backgroundColor: GREY,
            },
            {
                title: '   Display & Brightness',
                backgroundColor: BLUE,
                icon: 'ios-bulb',
            },
            
            {
                title: '   Sounds',
                backgroundColor: RED,
                icon: 'ios-volume-high',
            },
           
            {
                title: '   Confidentiality',
                backgroundColor: GREY,
                icon: 'ios-hand',
            },
        ],
    },
    // Space at the bottom
    { data: [] },
];


export default class Settings extends React.PureComponent {
    renderItem = ({
        item: { title, backgroundColor, icon, rightTitle, hideChevron, checkbox },
        
    }) => (

            <ListItem
                containerStyle={{ paddingVertical: 8 }}
                switch={checkbox && { value: true }}
                key={title}
                chevron={!hideChevron}
                rightTitle={rightTitle}
                leftIcon={{
                    type: 'ionicon',
                    name: icon,
                    size: 20,
                    color: 'white',
                    containerStyle: {
                        backgroundColor,
                        width: 28,
                        height: 28,
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                }}
                title={title}
            />
            
        );

    renderSectionHeader = () => <View style={styles.headerSection} />;


    ItemSeparatorComponent = () => (
        <View style={styles.separatorComponent}>
            <Divider style={styles.separator} />
        </View>
    );

    ListHeaderComponent = () => (
        <View>
            <SearchBar platform="ios" placeholder="Search" />
            <Divider />
        </View>
    );

    keyExtractor = (item, index) => index;

    render() {
      
        return (
            <View>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content"
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={{ text: 'Settings', style: { color: '#fff' } }}
                    rightComponent={<Icon name= "settings"/>}
                    containerStyle={{
                        backgroundColor: '#3D6DCC',
                        justifyContent: 'space-around',
                    }}
                />

                <SectionList
                    keyExtractor={this.keyExtractor}
                    ListHeaderComponent={this.ListHeaderComponent}
                    contentContainerStyle={styles.containerStyle}
                    sections={sections}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                    SectionSeparatorComponent={Divider}
                    stickySectionHeadersEnabled={false}
                />
            </View>

        );
    }
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFF4',
    },
    separatorComponent: {
        backgroundColor: 'white',
    },
    separator: {
        marginLeft: 58,
    },
    headerSection: {
        height: 30,
    },
});


