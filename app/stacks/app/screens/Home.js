/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type { Node } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../../../style';
import assets from '../../../assets';
import { navigate } from '../../../services/NavigationService';
import { PATHS } from '../../../const/paths';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../auth/actions/authActions';
import AsyncStorage from '@react-native-community/async-storage';

const Section = ({ item }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity onPress={item.onPress} style={styles.sectionContainer}>
      <Image
        source={assets[item.icon]}
        style={[styles.logo, { marginRight: GlobalStyles.PADDING * 2 }]}
      />
      <Text
        style={styles.sectionDescription}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const Home: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const menuItems = [
    {
      title: "Notification",
      icon: "notification",
      onPress: () => { }
    },
    {
      title: "Edit Profile",
      icon: "user",
      onPress: () => { }
    },
    {
      title: "Wishlist",
      icon: "star",
      onPress: () => { }
    },
    {
      title: "Order History",
      icon: "history",
      onPress: () => { }
    },
    {
      title: "Track Order",
      icon: "track_order",
      onPress: () => { }
    },
    {
      title: "Payment Option",
      icon: "payment",
      onPress: () => { }
    },
    {
      title: "Settings",
      icon: "setting",
      onPress: () => { }
    },
    {
      title: "Logout",
      icon: "logout",
      onPress: () => {
        navigate(PATHS.AuthStack)
        AsyncStorage.clear()
        dispatch(logout())
      }
    },
  ]

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={'light-content'} />
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
        <View
          style={styles.inputContainer}
        >
          <Image
            source={assets.search}
            style={styles.logo}
          />
          <TextInput
            style={styles.inputField}
          />
        </View>
      </View>

      <View
        style={styles.profile}
      >
        <View
          style={styles.profileSection}
        >
          <Image
            source={{ uri: user.image }}
            style={styles.profilePic}
          />
          <View>
            <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
            <Text style={styles.subtitle}>{user.email}</Text>
          </View>
        </View>
      </View>
      <View
        style={styles.menu}
      >
        {
          menuItems.map((item, index) => <Section item={item} key={index} />)
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionDescription: {
    color: GlobalStyles.COLOR_PRIMARY,
    fontWeight: GlobalStyles.fw700,
    fontSize: GlobalStyles.fs18
  },
  sectionContainer: {
    flexDirection: 'row',
    marginBottom: GlobalStyles.PADDING,
    alignItems: 'center'
  },
  menu: {
    shadowColor: GlobalStyles.COLOR_PRIMARY,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2.4,
    shadowOpacity: 0.7,
    elevation: 3,
    padding: GlobalStyles.PADDING * 2,
    backgroundColor: GlobalStyles.COLOR_LIGHTEST,
    width: GlobalStyles.FULL_WIDTH - GlobalStyles.PADDING * 4,
    alignSelf: 'center',
    marginTop: -100,
    borderRadius: GlobalStyles.RADIUS
  },
  profileSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: GlobalStyles.FULL_WIDTH - GlobalStyles.PADDING * 4,
    padding: GlobalStyles.PADDING,
  },
  profilePic: {
    width: GlobalStyles.FULL_WIDTH / 6,
    height: GlobalStyles.FULL_WIDTH / 6,
    borderRadius: GlobalStyles.FULL_WIDTH / 6,
    marginRight: GlobalStyles.PADDING,
    borderWidth: 1,
    borderColor: GlobalStyles.COLOR_GREY
  },
  profile: {
    backgroundColor: GlobalStyles.COLOR_SECONDARY,
    height: GlobalStyles.FULL_HEIGHT / 4,
  },
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
  inputContainer: {
    flexDirection: 'row',
    width: GlobalStyles.FULL_WIDTH - 100,
    backgroundColor: GlobalStyles.COLOR_LIGHTEST,
    borderRadius: GlobalStyles.RADIUS,
    alignItems: 'center',
    paddingHorizontal: GlobalStyles.PADDING / 2
  },
  inputField: {
    flex: 1,
    height: 40,
    color: GlobalStyles.COLOR_PRIMARY,
    fontWeight: GlobalStyles.fw700,
    fontSize: GlobalStyles.fs16,
    paddingHorizontal: GlobalStyles.PADDING / 2
  },
  subtitle: {
    color: GlobalStyles.COLOR_PRIMARY,
    fontSize: GlobalStyles.fs16,
  },
  name: {
    color: GlobalStyles.COLOR_PRIMARY,
    fontSize: GlobalStyles.fs24,
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
    paddingTop: GlobalStyles.PADDING * 3,
    paddingBottom: GlobalStyles.PADDING,
    paddingHorizontal: GlobalStyles.PADDING,
    backgroundColor: GlobalStyles.COLOR_PRIMARY,
    width: GlobalStyles.FULL_WIDTH
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
    width: GlobalStyles.FULL_WIDTH / 10,
    height: GlobalStyles.FULL_WIDTH / 10,
    backgroundColor: GlobalStyles.COLOR_SECONDARY,
    borderRadius: GlobalStyles.FULL_WIDTH / 2,
    alignItems: 'center',
    marginRight: GlobalStyles.PADDING,
    justifyContent: 'center'
  },
  logo: {
    width: GlobalStyles.FULL_WIDTH / 20,
    height: GlobalStyles.FULL_WIDTH / 20,
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

export default Home;
