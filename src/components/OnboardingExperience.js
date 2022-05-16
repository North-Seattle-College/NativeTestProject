import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => <Button title="Skip" color="000000" {...props} />;

const Next = ({...props}) => <Button title="Next" color="000000" {...props} />;

const Done = ({...props}) => <Button title="Done" color="000000" {...props} />;

const OnboardingExperience = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#fff',
          //image: <Image source={require('../assets/img.png')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          //image: <Image source={require('../assets/img2.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          //image: <Image source={require('../assets/img3.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingExperience;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});