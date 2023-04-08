import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useCallback, useRef } from 'react'
import { AppButton } from '../components/AppButton'
const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export function ExpenseDetailsScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const snapPoints = ['30%','40%','50%']
  
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])


  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <View style={{ width: width - 20 }}>
              <Text>Expense Details Screen</Text>
            </View>
            <AppButton
              buttonTitle="Show Modal"
              buttonAction={handlePresentModalPress}
              buttonStyle={{ backgroundColor: 'teal', width: 200, height: 50, borderRadius: 8, marginTop: 20 }}
              buttonTextStyle={{ color: 'white', fontSize: 20, fontWeight: '900' }}
              buttonIcon={<Ionicons name="ios-add" size={24} color="white" />}
              isSubmitting={false}
            />
          </View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            style={{ width: '100%', borderColor: 'teal', borderWidth: 2, borderRadius: 20}}
          >
            <View style={{ padding: 5, width: '100%', }}>
              <Text>Modal Content</Text>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}