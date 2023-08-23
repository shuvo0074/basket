/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import assets from '../../../assets';
import GlobalStyles from '../../../style';
import { navigate } from '../../../services/NavigationService';
import { PATHS } from '../../../const/paths';


const Login: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ImageBackground
      source={assets.store}
      style={[
        styles.image,
        {
          // borderRadius: rounded,
          height: GlobalStyles.FULL_HEIGHT,
          justifyContent: 'center'
        },
      ]}
      blurRadius={2.5}
    >
      <View
        style={styles.bgOverlay}
      />
      <View
        style={styles.logoContainer}
      >
        <Image
          source={assets.cart}
          style={styles.logo}
        />
        <Text style={styles.title}>basket</Text>
      </View>
      <Text style={styles.title}>Start Shopping</Text>

      <Text style={styles.title}>Stay Happy</Text>

      <Text style={styles.title}>Anytime</Text>
      <View
        style={styles.btmSection}
      >
        <Text style={styles.bottomText}>Basket Online Marketplace</Text>
        <View
          style={styles.btnContainer}
        >
          <TouchableOpacity
            onPress={() => navigate(PATHS.OnBoarding)}
          >
            <Text style={styles.bottomText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate(PATHS.OnBoarding)}
          >
            <Text style={styles.bottomText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  btmSection: {
    position: 'absolute',
    bottom: GlobalStyles.PADDING * 3
  },
  bgOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: GlobalStyles.COLOR_PRIMARY,
    opacity: 0.3
  },
  logoContainer: {
    width: GlobalStyles.FULL_WIDTH / 2,
    height: GlobalStyles.FULL_WIDTH / 2,
    backgroundColor: GlobalStyles.COLOR_SECONDARY,
    borderRadius: GlobalStyles.FULL_WIDTH / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: GlobalStyles.FULL_WIDTH / 8,
    height: GlobalStyles.FULL_WIDTH / 8,
  },
  image: {
    width: GlobalStyles.FULL_WIDTH,
    overflow: "hidden",
    alignItems: "center"
  },
  title: {
    color: GlobalStyles.COLOR_LIGHTEST,
    textAlign: "center",
    fontSize: GlobalStyles.fs40,
    marginTop: GlobalStyles.PADDING / 2
  },
  bottomText: {
    color: GlobalStyles.COLOR_SECONDARY,
    textAlign: "center",
    fontSize: GlobalStyles.fs22,
    marginTop: GlobalStyles.PADDING / 2
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: GlobalStyles.PADDING,
    width: GlobalStyles.FULL_WIDTH - GlobalStyles.PADDING * 4,
    alignSelf: 'center'
  }
});
export default Login;