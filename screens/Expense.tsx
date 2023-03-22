import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator, Animated, StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import SelectDropDown from '../components/SelectDropdown'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { useState } from 'react'

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
    paddingHorizontal: 8,
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
    width: '97%',
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

  const dateChangeHandler = (ev: any, newDate: Date) => {
    const currentDate = newDate
    setDate(currentDate)
  }
  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.expenseTextAreaInput}>
          <TextInput
            placeholder="Describe your expense"
            multiline={true}
            numberOfLines={25}
            style={{ width: '100%', padding: 10, textAlignVertical: 'top' }}
          />
          <Ionicons name="ios-clipboard" size={24} color="#7576B2" style={styles.inputIcon} />
        </View>
        <TouchableOpacity style={styles.expenseButton}>
          <View style={{ flexDirection: 'row', gap: 15}}>
            <Text
              style={styles.expenseText}
            >
              Add Expense
            </Text>
            {showActivityIndicator ? <ActivityIndicator /> : null}
          </View>
          <Ionicons name="ios-checkmark-circle-sharp" size={24} color="white" style={styles.inputIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function ExpenseDetailsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View>
        <Text>Expense Details Screen</Text>
      </View>
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
