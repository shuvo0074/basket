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
  Text,
  StyleSheet,
  View,
  useColorScheme,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import assets from '../../../assets';
import GlobalStyles from '../../../style';
import { navigate } from '../../../services/NavigationService';
import { PATHS } from '../../../const/paths';


const OnBoarding: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? GlobalStyles.COLOR_PRIMARY : Colors.lighter,
  };

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

      <Text style={styles.welcome}>Welcome To</Text>

      <Text style={styles.name}>basket Online Store</Text>

      <Text style={styles.subtitle}>basket is the no1 online store for {`\n`} both old and new products</Text>
      <Image
        source={assets.family}
        style={styles.bgImage}
      />
      <TouchableOpacity
        style={styles.btmSection}
        onPress={() => navigate(PATHS.Email)}
      >
        <Text style={styles.bottomText}>Get Started</Text>
        <Image
          source={assets.next}
          style={styles.btnNext}
        />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcome: {
    color: GlobalStyles.COLOR_LIGHTEST,
    textAlign: "center",
    fontSize: GlobalStyles.fs26,
    marginTop: GlobalStyles.PADDING * 2
  },
  subtitle: {
    color: GlobalStyles.COLOR_LIGHTEST,
    textAlign: "center",
    fontSize: GlobalStyles.fs20,
    marginTop: GlobalStyles.PADDING / 2
  },
  name: {
    color: GlobalStyles.COLOR_LIGHTEST,
    textAlign: "center",
    fontSize: GlobalStyles.fs40,
    marginTop: GlobalStyles.PADDING / 2
  },
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.COLOR_PRIMARY
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: GlobalStyles.PADDING
  },
  btmSection: {
    position: 'absolute',
    bottom: GlobalStyles.PADDING * 2,
    flexDirection: 'row',
    width: GlobalStyles.FULL_WIDTH / 1.8,
    backgroundColor: GlobalStyles.COLOR_SECONDARY,
    borderRadius: GlobalStyles.RADIUS,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: GlobalStyles.PADDING / 2
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
export default OnBoarding;