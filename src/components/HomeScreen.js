import React, {useState} from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Link,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
            textAlign: 'center',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
            textAlign: 'center',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const HomeScreenFunc = ({navigation}) => {
  const [CreateTrip, setCreateTrip] = useState('');
  const [TripCode, setTripCode] = useState('');
  const [EmergencyInfo, setEmergencyInfo] = useState('');

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Image
            style={styles.image}
            source={require('../assets/icon_n_text_250px.jpg')}
          />
          <Section title="Home"></Section>

          <View style={styles.inputView}>
            <Button
              style={styles.TextInput}
              title="Create Trip."
              onPress={() => navigation.navigate('Blank')}
              //onChangeText={CreateTrip => setCreateTrip(CreateTrip)}
            />
          </View>

          <View style={styles.inputView}>
            <Button
              style={styles.TextInput}
              title="Trip Code & Join."
              //placeholderTextColor="#ff0000"
              //secureTextEntry={true}
              onPress={() => navigation.navigate('Blank')}
              //onChangeText={TripCode => setTripCode(TripCode)}
            />
          </View>

          <View style={styles.inputView}>
            <Button
              style={styles.TextInput}
              title="Emergency Info."
              //placeholderTextColor="#ff0000"
              //secureTextEntry={true}
              onPress={() => navigation.navigate('Blank')}
              //onChangeText={EmergencyInfo => setEmergencyInfo(EmergencyInfo)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreenFunc;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    marginBottom: 80,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputView: {
    backgroundColor: '#FFFFFF',
    width: '70%',
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: '14%',
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
