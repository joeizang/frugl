import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View, Text, TextInput, Keyboard, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import SelectDropDown from '../components/SelectDropdown'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { useCallback, useRef, useState } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppButton } from '../components/AppButton'
import SpinningSyncCircle from '../components/SpinningSyncCircle'
// import { ExpenseDetailsScreen } from './ExpenseDetail'

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expenseInput: {
    height: 50,
    padding: 10,
    flex: 1,
  },
  expenseTextAreaInput: {
    height: 200,
    width: '97%',
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'teal',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 50,
    marginTop: 10,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 2,
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  InputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'teal',
    height: 50,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '97%'
  },
  inputIcon: {
    position: 'absolute',
    right: 15,
    top: 10
  },
  expenseButton: {
    backgroundColor: '#CE6F8E',
    width: width - 26,
    height: 50,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 10,
    shadowColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  expenseText: {
    color: 'whitesmoke',
    fontSize: 18,
    fontWeight: '700',
  }
})

function dateShowMode(defaultDate: Date, dateChangeHandler: (ev: any, newDate: any) => void, dateMode: 'date' | 'time') {
  DateTimePickerAndroid.open({
    value: defaultDate,
    onChange: dateChangeHandler,
    mode: dateMode,
    is24Hour: true,
  })
}



const AddExpenseStackNav = createNativeStackNavigator()
function AddExpenseScreen() {
  const [showActivityIndicator, setShowActivityIndicator] = useState(false)
  const [date, setDate] = useState(new Date())
  const bottmSheeetModalRef = useRef<BottomSheetModal>(null)
  const snapPoints = ['30%','40%','50%']

  const dateChangeHandler = (ev: any, newDate: Date) => {
    const currentDate = newDate
    setDate(currentDate)
  }

  const handleAddExpenseModal = useCallback(() => {
    bottmSheeetModalRef.current?.present()
  }, [])
  return (
      <SafeAreaView style={styles.container}>
        {/* <ScrollView> */}
        <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <View style={styles.formContainer}>
            <View style={styles.InputWrapper}>
              <TextInput
                placeholder="27-05-1987"
                style={styles.expenseInput}
                keyboardType="default"
                value={date.toDateString()}
                onFocus={() => {
                  dateShowMode(date, dateChangeHandler, 'date')
                  Keyboard.dismiss()
                }}
              />
              <Ionicons name="calendar" size={24} color="#7576B2" style={styles.inputIcon} />
            </View>
            <View style={styles.InputWrapper}>
              <TextInput
                placeholder="How much did you spend?"
                style={styles.expenseInput}
                keyboardType="numeric"
              />
              <Ionicons name="wallet" size={24} color="#7576B2" style={styles.inputIcon} />
            </View>
            <SelectDropDown
              InputWrapper={styles.InputWrapper}
              ExpenseInput={styles.expenseInput}
              InputIcon={styles.inputIcon}
            />
            <View style={{
              height: 200,
              width: width - 26,
              padding: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              borderWidth: 2,
              borderColor: 'teal',
              paddingVertical: 8,
              paddingHorizontal: 10,
              marginBottom: 50,
              marginTop: 10,
            }}>
              <TextInput
                placeholder="Describe your expense"
                multiline={true}
                numberOfLines={25}
                style={{
                  width: '100%',
                  padding: 10,
                  textAlignVertical: 'top',
                }}
              />
              <Ionicons name="ios-clipboard" size={24} color="#7576B2" style={styles.inputIcon} />
            </View>
            <AppButton
              buttonTitle="Add Expense"
              buttonStyle={styles.expenseButton}
              buttonTextStyle={styles.expenseText}
              buttonAction={handleAddExpenseModal}
              buttonIcon={<SpinningSyncCircle />}
              isSubmitting={false}
              color={'#CE6F8E'}
            />
          </View>
          <BottomSheetModal
            ref={bottmSheeetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 30 }}
            style={{ backgroundColor: 'teal', borderRadius: 30 }}
          >
            <View style={{ borderRadius: 30,
              borderWidth: 4,
              borderColor: '#AA71A8',
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              height: 60,
              alignSelf: 'center',
            }}>
              <Ionicons name="ios-checkmark-sharp" size={40} color="#AA71A8" />
            </View>
            <View style={{ flex: 4, padding: 8, justifyContent: 'center', alignItems: 'center', paddingBottom: 60, backgroundColor: 'white' }}>
              <Text style={{ fontWeight: '900', letterSpacing: .5, fontSize: 16, color: '#AA71A8' }}>Success Message!!!</Text>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>

        </GestureHandlerRootView>
        {/* </ScrollView> */}
      </SafeAreaView>
  )
}


function ExpenseDetailsScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const snapPoints = ['30%','40%','50%']
  
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])


  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
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
          >
            <View style={{ borderRadius: 30, borderColor: 'indigo' }}>
              <Text>Modal Content</Text>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

export default function ExpenseStackScreen() {
  return (
    <AddExpenseStackNav.Navigator>
      <AddExpenseStackNav.Screen name="Add Expense" component={AddExpenseScreen}  options={{ headerStyle: { backgroundColor: 'teal' }, headerTitleStyle: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 24
      }, headerTintColor: 'whitesmoke'}}/>
      <AddExpenseStackNav.Screen name="Expense Details" component={ExpenseDetailsScreen}  options={{ headerStyle: { backgroundColor: 'teal'},
      headerTitleStyle: {
        color: 'whitesmoke',
      },
      headerTintColor: 'whitesmoke'
    }}/>
    </AddExpenseStackNav.Navigator>
  )
}
