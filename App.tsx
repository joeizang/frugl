
import { StatusBar } from 'expo-status-bar'
import React, { Fragment, useEffect, useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import AppHome from './AppHome'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { AuthRequestPromptOptions } from 'expo-auth-session'
import axios from 'axios'
import { FruglProvider } from './components/contexts/FruglContext'

export type LoginScreenProps = {
  changeLoginState: (state: boolean) => void
  promptAsync: (options?: AuthRequestPromptOptions) => void
  accessToken: string
  fetchUserData: () => void
  userData: any
}


const queryClient = new QueryClient()

export default function App() {
  const [accessToken, setAccessToken] = useState('')
  const [userInfo, setUserInfo] = useState<any>()
  async function fetchUserInfo() {
    const googleUrl = 'https://www.googleapis.com/userinfo/v2/me'
    const result = await axios.get(googleUrl, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    console.log(result)
    return result
  }


  const [ request, response, promptAsync ] = Google.useAuthRequest({
    androidClientId: '398921816785-r090l9sauv0pivqa50ehkp9gc3lbovud.apps.googleusercontent.com',
    expoClientId: '398921816785-86shi86g9i4m3ob1gnhphlqapth9u3eb.apps.googleusercontent.com',
  })

  useEffect(() => {
    if (response?.type === 'success') {
      response && response.authentication ? setAccessToken(response.authentication.accessToken) : ''
    }
  }, [response])

  function getUserData() {
    const result = useQuery(['googleUser'], fetchUserInfo)
    console.log(result)
    setUserInfo(result.data?.data)
    // return result
  }

  const [loginSuccessful, setLoginSuccessful] = useState(false) // use this to determine navigation
  return(
    <QueryClientProvider client={queryClient}>
        <FruglProvider value={{ }}>
          <Fragment>
            <StatusBar style="auto" />
            <View style={styles.container}>
              {!loginSuccessful ? (
              <LoginScreen
                changeLoginState={setLoginSuccessful}
                promptAsync={promptAsync}
                accessToken={accessToken}
                fetchUserData={getUserData}
                userData={userInfo}
              />
              ) : <AppHome />}
            </View>
          </Fragment>
        </FruglProvider>
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  helpText: {
    flex: 0,
    marginHorizontal: 20,
    flexBasis: 1
  }
});
