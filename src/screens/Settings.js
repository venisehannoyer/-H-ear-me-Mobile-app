import React from 'react';
import {View, Text, StyleSheet, SectionList, Image} from 'react-native';

import {
  ListItem,
  Divider,
  SearchBar,
  Header,
  Icon,
} from 'react-native-elements';

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
        icon: 'ios-volume-high',
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
        backgroundColor: TEAL_BLUE,
        icon: 'ios-briefcase',
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
        rightTitle: 'Off',
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
  {data: []},
];
export default class Settings extends React.PureComponent {
  renderItem = ({
    item: {title, backgroundColor, icon, rightTitle, hideChevron, checkbox},
  }) => (
    <ListItem>
      <ListItem.Content
        style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <ListItem.Title
          style={{
            maarginStart: 10,
          }}>
          {title}
        </ListItem.Title>
        <Icon
          name={icon}
          size={30}
          type="ionicon"
          style={{
            backgroundColor,
            width: 40,
            // height: 28,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            marginEnd: 5,
          }}
        />
      </ListItem.Content>
      {!hideChevron && <ListItem.Chevron style={{marginHorizontal: 5}} />}
      {checkbox && <ListItem.CheckBox textStyle={{}} />}
    </ListItem>
    // <View >

    //   <Text>{title}</Text>
    // </View>
  );

  renderSectionHeader = () => <View style={styles.headerSection} />;

  ItemSeparatorComponent = () => (
    <View style={styles.separatorComponent}>
      <Divider style={styles.separator} />
    </View>
  );

  ListHeaderComponent = () => (
    <View>
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
      <Divider />
    </View>
  );

  keyExtractor = (item, index) => index;

  render() {
    return (
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
