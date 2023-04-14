import React, { useState } from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text, TextInput, View, TouchableNativeFeedback, Alert, TouchableOpacity } from 'react-native'
import Svg, { Image } from 'react-native-svg'


export default function() {
  const [isLoading, setIsLoading] = useState(false)
  const { height, width } = Dimensions.get('window')
  
  const handleLoginClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      Alert.alert('Login button clicked!!!')
      setIsLoading(false)
    }, 3000)
  }
  return (
      <>
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
          <View>
            <TextInput style={styles.userLoginInput} placeholder="Username" placeholderTextColor={'white'} />
          </View>
          <View>
            <TextInput style={styles.passwordLoginInput} placeholder="Password" placeholderTextColor={'white'} />
          </View>
          <TouchableNativeFeedback onPress={handleLoginClick}>
            <View style={styles.loginButton}>
              { !isLoading ? <Text style={styles.loginButtonText}>Login</Text> : <ActivityIndicator size={'small'} color="#fff"/>}
            </View>
          </TouchableNativeFeedback>
          <View style={styles.socialLogins}>
            <TouchableOpacity onPress={() => Alert.alert('Pressed!!!')}>
              <View style={styles.socialButtons}>
                <Svg>
                  <Image
                    href={require('../assets/google.png')}
                    height={43}
                    width={43}
                    preserveAspectRatio=""
                  />
                </Svg>
              </View>
            </TouchableOpacity>
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
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#acbb59',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.26,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    fontSize: 20,
    color: 'white',
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
    borderRadius: 10,
    borderWidth: 2,
    width: 50,
    height: 50,
    borderColor: 'white',
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
