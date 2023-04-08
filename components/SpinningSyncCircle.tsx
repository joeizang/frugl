import { useEffect, useRef } from 'react'
import { Animated, Easing, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const SpinningSyncCircle = () => {
  const spinValue = useRef(new Animated.Value(0)).current
  const rotationCounter = useRef(0)

  const startSpinning = () => {
    rotationCounter.current += 1 % 360
    Animated.timing(spinValue, {
      toValue: rotationCounter.current + 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startSpinning())
  }
  useEffect(() => {
    startSpinning()
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{transform: [{rotate: spin}], position: 'absolute', right: -105 }}>
      <View style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center'}}>
        <Ionicons name="ios-sync-circle-sharp" size={24} color={'white'} />
      </View>
    </Animated.View>
  )
}

export default SpinningSyncCircle
