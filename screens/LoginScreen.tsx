import React, { useState } from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import Svg, { Image } from 'react-native-svg'
import { StatusBar } from 'expo-status-bar'
import { LoginScreenProps } from '../App'


const { height, width } = Dimensions.get('window')
export default function(props: LoginScreenProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleLoginClick = () => {
    setIsLoading(true)
    props.accessToken ? props.fetchUserData() : props.promptAsync({ showInRecents: true })
    setIsLoading(false)
  }
  return (
      <>
        <StatusBar style="light" />
        <View style={StyleSheet.absoluteFill}>
          <Svg height={height} width={width}>
            <Image
              href={require('../assets/accounting.png')}
              height={height}
              width={width}
              preserveAspectRatio="xMidYMid slice"
            />
          </Svg>
        </View>
        <View>
          <TouchableNativeFeedback onPress={handleLoginClick}>
            <View style={styles.loginButton}>
              { !isLoading ? <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center'}}><Text style={styles.loginButtonText}>Login</Text><View style={styles.socialButtons}>
                <Svg>
                  <Image
                    href={require('../assets/google.png')}
                    height={43}
                    width={43}
                    preserveAspectRatio=""
                  />
                </Svg>
              </View></View> : <ActivityIndicator size={'small'} color="#5F6A00"/>}
            </View>
          </TouchableNativeFeedback>
          <View>
            <Text style={{ color: 'pink', fontWeight: '900', fontSize: 30 }}>{props.accessToken}</Text>
            <Text style={{ color: 'pink', fontWeight: '900', fontSize: 30 }}>{props.userData?.email}</Text>
            <Text style={{ color: 'pink', fontWeight: '900', fontSize: 30 }}>{props.userData?.email}</Text>
          </View>
        </View>
      </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginButton: {
    height: 55,
    width: width - 20,
    alignItems: 'center',
    borderRadius: 20,
    // marginHorizontal: 20,
    // marginVertical: 10,
    padding: 8,
    borderWidth: 3,
    borderColor: '#ACAC9A',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'whitesmoke',
    shadowColor: 'black',
    shadowOffset: { width: 60, height: 9 },
    shadowOpacity: 0.26,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    fontSize: 20,
    color: '#474838',
    fontWeight: '600',
    letterSpacing: 0.5
  },
  userLoginInput: {
    width: '90%',
    borderWidth: 3,
    borderRadius: 20,
    borderColor: 'white',
    height: 65,
    marginHorizontal: 20,
    marginBottom: 40,
    backgroundColor: '#5f6a00',
    color: 'white',
    padding: 20,
    fontSize: 20,
    fontWeight: '400',
  },
  passwordLoginInput: {
    width: '90%',
    borderWidth: 3,
    borderRadius: 20,
    borderColor: 'white',
    height: 65,
    marginHorizontal: 20,
    marginBottom: 40,
    backgroundColor: '#5f6a58',
    color: 'white',
    padding: 20,
    fontSize: 20,
    fontWeight: '400',
  },
  socialLogins: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialButtons: {
    borderRadius: 25,
    borderWidth: 2,
    width: 50,
    height: 50,
    borderColor: 'whitesmoke',
    backgroundColor: 'whitesmoke',
  },
  socialButtonsFacebook: {
    borderRadius: 10,
    borderWidth: 2,
    width: 50,
    height: 50,
    borderColor: 'white',
    backgroundColor: 'whitesmoke',
  },
  socialButtonsTwitter: {
    borderRadius: 10,
    borderWidth: 2,
    width: 50,
    height: 50,
    borderColor: 'white',
    backgroundColor: 'whitesmoke',
  }
})
