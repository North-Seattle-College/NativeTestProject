import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => <Button title="Skip" color="#000000" {...props} />;

const Next = ({...props}) => <Button title="Next" color="#000000" {...props} />;

const Done = ({...props}) => <Button title="Done" color="#000000" {...props} />;

const Home = ({...props}) => <Button title="Home" color="#000000" {...props} />;

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      HomeButtonComponent={Home}
      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/img.png')} />,
          title: 'Onboarding Example 1',
          subtitle: 'This will be the first onboarding page',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/img2.png')} />,
          title: 'Onboarding Example 2',
          subtitle: 'This will be the second onboarding page',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/img3.png')} />,
          title: 'Onboarding Example 3',
          subtitle: 'This will be the third onboarding page',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
