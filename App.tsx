
import { StatusBar } from 'expo-status-bar'
import React, { Fragment, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from './screens/LoginScreen'
import AppHome from './AppHome'

const Tab = createBottomTabNavigator()

export default function App() {
  const [loginSuccessful, setLoginSuccessful] = useState(false) // use this to determine navigation
  return(
    <Fragment>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {!loginSuccessful ? <LoginScreen /> : <AppHome />}
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  helpText: {
    flex: 0,
    marginHorizontal: 20,
    flexBasis: 1
  }
});
