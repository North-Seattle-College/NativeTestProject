import React, { useState } from 'react';
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

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

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

export default function LoginScreenFunc() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        
        <View>
          <Image style={styles.image} source={require('../assets/icon_n_text_250px.jpg')} />
          <Section title="Log In">
            This is going to be an example log in form
          </Section>
          
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    backgroundColor: "#ADD8E6",
    width: "70%",
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: '14%',
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginTop: 10,
    marginBottom: 30,
    textAlign: "center",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: '10%',
    marginTop: 40,
    marginBottom: 100,
    backgroundColor: "#ABB8E6",
  },
});
