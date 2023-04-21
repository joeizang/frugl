import 'react-native-gesture-handler'
import { Text, View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../components/SearchInput'
import ExpenseList from '../components/ExpenseList'
import { CheckBox } from 'react-native-btr'
import { useState } from 'react'
import { ExpenseDetailsScreen } from '../screens/ExpenseDetail'


const HomeStackNav = createNativeStackNavigator()
function HomeScreen(props: any) {
  const [checked, setChecked] = useState(false)
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={{ marginBottom: 3 }}>
        <SearchInput showDateInput={checked}/>
      </View>
      <View style={{ justifyContent: 'flex-end', alignSelf: 'flex-start', flexDirection: 'row' }}>
        <View style={{ width: '5%', marginLeft: 23, marginBottom: 10, borderRadius: 28, justifyContent: 'flex-end' }}>
          <CheckBox
            disabled={false}
            checked={checked}
            color={'#5F6A00'}
            onPress={() => setChecked(!checked)}
          />
        </View>
          <Text style={{ marginLeft: 5, alignSelf: 'flex-start', padding: 3 }}>Search by Dates</Text>
      </View>
      <View style={styles.expenseList}>
        <ExpenseList {...props}/>
      </View>
    </SafeAreaView>
  )
}

function ItemDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text>Item Details Screen</Text>
    </View>
    </SafeAreaView>
  )
}

export function HomeStackScreen() {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen name="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor: '#5f6a00' }, headerTitleStyle: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 24
      },headerTintColor: 'whitesmoke'}} />
      <HomeStackNav.Screen name="Expense Details" component={ExpenseDetailsScreen}  options={{ headerStyle: { backgroundColor: '#5f6a00' }, headerTitleStyle: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 24
      },
      headerTintColor: 'whitesmoke'
      }}/>
    </HomeStackNav.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  expenseList: { 
    flex: 1,
    width: '100%',
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007767',
    paddingTop: 15,
    borderWidth: 2,
    borderColor: '#00758D'
  }
})
