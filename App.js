import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import OnboardingExperience from './src/components/onboardingExperience';
import LoginScreen from './src/components/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if( isFirstLaunch == null ) {
    return null;
  } else if ( isFirstLaunch == ture ) {
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
        >
          <AppStack.Screen name="Onboarding" component={OnboardingExperience} />
          <AppStack.Screen name="Login" component={LoginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LoginScreen />
  }
}

export default App;