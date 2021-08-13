import React, {Component} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Platform,
  Image,
} from 'react-native';
import colors from '../config/colors';
import {PricingCard, Header, Icon} from 'react-native-elements';

class Pricing extends Component {
  render() {
    return (
      <View>
        <ScrollView style={{backgroundColor: 'white'}}>
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
          <View style={styles.hero}>
            <Icon color="white" name="games" size={62} />
            <Text style={styles.heading}>Pricing</Text>
          </View>
          <PricingCard
            color={colors.primary}
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          />
          <PricingCard
            color={colors.secondary}
            title="Starter"
            price="$19"
            info={['10 Users', 'Basic Support', 'All Core Features']}
            button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          />
          <PricingCard
            color={colors.secondary2}
            title="Enterprise"
            price="$49"
            info={['100 Users', 'One on One Support', 'All Core Features']}
            button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          />
        </ScrollView>
      </View>
    );
  }
}

Pricing.navigationOptions = {
  title: 'Pricing',
};

const styles = StyleSheet.create({
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e',
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pricing;
