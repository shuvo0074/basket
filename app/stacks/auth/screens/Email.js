/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  useColorScheme,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import assets from '../../../assets';
import GlobalStyles from '../../../style';
import { navigate } from '../../../services/NavigationService';
import { PATHS } from '../../../const/paths';
import { useDispatch } from 'react-redux';
import { loginFromAPI } from '../actions/authActions';


const Email: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [email, setEmail] = useState('kminchelle')
  const [password, setpassword] = useState('0lelplR')
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <View
        style={styles.header}
      >
        <View
          style={styles.logoContainer}
        >
          <Image
            source={assets.cart}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>basket</Text>
      </View>

      <Text style={styles.name}>Log into your account</Text>

      <Text style={styles.subtitle}>Enter your email and password{`\n`} to access your account{`\n`}or create an account</Text>
      <View
        style={styles.inputContainer}
      >
        <Image
          source={assets.email}
          style={[styles.btnNext, { marginLeft: 0, marginRight: GlobalStyles.PADDING }]}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.inputField}
        />
      </View>
      <View
        style={styles.inputContainer}
      >
        <Image
          source={assets.key}
          style={[styles.btnNext, { marginLeft: 0, marginRight: GlobalStyles.PADDING }]}
        />
        <TextInput
          value={password}
          onChangeText={setpassword}
          style={styles.inputField}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={styles.btmSection}
        onPress={() => {
          dispatch(loginFromAPI(email, password))
          // navigate(PATHS.AppStack)

        }}
      >
        <Text style={styles.bottomText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.forgetPass}>Forgot Password?</Text>
      <View
        style={styles.footer}
      >
        <Text style={styles.footerTxt}>Don't have an account?</Text>
        <Text style={styles.signup}>Signup</Text>

      </View>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  footerTxt: {
    color: GlobalStyles.COLOR_GREY_ACCENT,
    fontWeight: GlobalStyles.fw500,
    textAlign: "center",
    fontSize: GlobalStyles.fs18,
    marginTop: GlobalStyles.PADDING
  },
  signup: {
    color: GlobalStyles.COLOR_SECONDARY,
    textDecorationColor: GlobalStyles.COLOR_SECONDARY,
    fontWeight: GlobalStyles.fw700,
    textAlign: "center",
    fontSize: GlobalStyles.fs18,
    marginTop: GlobalStyles.PADDING
  },
  footer: {
    flexDirection: 'row',
    width: GlobalStyles.FULL_WIDTH - GlobalStyles.PADDING * 3,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: GlobalStyles.PADDING
  },
  forgetPass: {
    color: GlobalStyles.COLOR_SECONDARY,
    textDecorationColor: GlobalStyles.COLOR_SECONDARY,
    textDecorationLine: 'underline',
    fontWeight: GlobalStyles.fw500,
    textAlign: "center",
    fontSize: GlobalStyles.fs18,
    marginTop: GlobalStyles.PADDING
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: GlobalStyles.FULL_WIDTH - GlobalStyles.PADDING * 2,
    alignSelf: 'center',
    borderBottomColor: GlobalStyles.COLOR_SECONDARY,
    borderBottomWidth: 2,
    marginTop: GlobalStyles.PADDING
  },
  inputField: {
    flex: 1,
    height: 40,
    color: GlobalStyles.COLOR_PRIMARY,
    fontWeight: GlobalStyles.fw700,
    fontSize: GlobalStyles.fs16
  },
  subtitle: {
    color: GlobalStyles.COLOR_PRIMARY,
    textAlign: "center",
    fontSize: GlobalStyles.fs16,
    marginTop: GlobalStyles.PADDING / 2
  },
  name: {
    color: GlobalStyles.COLOR_PRIMARY,
    textAlign: "center",
    fontSize: GlobalStyles.fs30,
    marginTop: GlobalStyles.PADDING / 2,
    fontWeight: GlobalStyles.fw700,
  },
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.COLOR_LIGHTEST
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: GlobalStyles.PADDING
  },
  btmSection: {
    flexDirection: 'row',
    width: GlobalStyles.FULL_WIDTH / 1.8,
    backgroundColor: GlobalStyles.COLOR_PRIMARY,
    borderRadius: GlobalStyles.RADIUS,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: GlobalStyles.PADDING / 2,
    marginTop: GlobalStyles.PADDING * 3
  },
  logoContainer: {
    width: GlobalStyles.FULL_WIDTH / 7,
    height: GlobalStyles.FULL_WIDTH / 7,
    backgroundColor: GlobalStyles.COLOR_SECONDARY,
    borderRadius: GlobalStyles.FULL_WIDTH / 2,
    alignItems: 'center',
    marginRight: GlobalStyles.PADDING,
    justifyContent: 'center'
  },
  logo: {
    width: GlobalStyles.FULL_WIDTH / 13,
    height: GlobalStyles.FULL_WIDTH / 13,
  },
  btnNext: {
    width: GlobalStyles.FULL_WIDTH / 17,
    height: GlobalStyles.FULL_WIDTH / 17,
    marginLeft: GlobalStyles.PADDING
  },
  bgImage: {
    width: GlobalStyles.FULL_WIDTH - 100,
    height: GlobalStyles.FULL_WIDTH - 100,
    alignSelf: 'center',
    marginTop: GlobalStyles.PADDING * 2
  },
  image: {
    width: GlobalStyles.FULL_WIDTH,
    overflow: "hidden",
    alignItems: "center"
  },
  title: {
    color: GlobalStyles.COLOR_SECONDARY,
    textAlign: "center",
    fontSize: GlobalStyles.fs40,
    marginTop: GlobalStyles.PADDING / 2
  },
  bottomText: {
    color: GlobalStyles.COLOR_LIGHTEST,
    textAlign: "center",
    fontSize: GlobalStyles.fs22,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: GlobalStyles.PADDING,
    width: GlobalStyles.FULL_WIDTH - GlobalStyles.PADDING * 4,
    alignSelf: 'center'
  }
});
export default Email;