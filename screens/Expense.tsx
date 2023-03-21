import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import SelectDropDown from '../components/SelectDropdown'

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
  formContainer: {
    width: '100%',
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: 'center',
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
  },
  textAreaStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'teal',
    height: 50,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20
  },
  inputIcon: {
    position: 'absolute',
    right: 15
  },
  expenseButton: {
    backgroundColor: '#CE6F8E',
    width: '97%',
    height: 50,
    borderRadius: 8,
    elevation: 10,
    shadowColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expenseText: {
    color: 'whitesmoke',
    fontSize: 18,
    fontWeight: '700',
  }
})




const AddExpenseStackNav = createNativeStackNavigator()
function AddExpenseScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.InputWrapper}>
          <TextInput
            placeholder="27-05-1987"
            style={styles.expenseInput}
          />
          <Ionicons name="calendar" size={24} color="teal" style={styles.inputIcon} />
        </View>
        <View style={styles.InputWrapper}>
          <TextInput
            placeholder="How much did you spend?"
            style={styles.expenseInput}
          />
          <Ionicons name="wallet" size={24} color="teal" style={styles.inputIcon} />
        </View>
        <SelectDropDown
          InputWrapper={styles.InputWrapper}
          ExpenseInput={styles.expenseInput}
          InputIcon={styles.inputIcon}
        />
        <View style={styles.textAreaStyle}>
          <TextInput
            placeholder="Describe your expense"
            style={styles.expenseInput}
            multiline={true}
            numberOfLines={15}
            
          />
          <Ionicons name="ios-clipboard" size={24} color="teal" style={styles.inputIcon} />
        </View>
        <View style={styles.expenseButton}>
          <Text
            style={styles.expenseText}
          >
            Add Expense
          </Text>
          <Ionicons name="ios-checkmark-circle-sharp" size={24} color="white" style={styles.inputIcon} />
        </View>
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
