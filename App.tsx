import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from './components/SearchInput'
import ExpenseList from './components/ExpenseList'
import { CheckBox } from 'react-native-btr'
import { useState } from 'react'
import ExpenseStackScreen from './screens/Expense'

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
            color={'#0F6D6C'}
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

function HomeStackScreen() {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen name="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor: 'teal' }, headerTitleStyle: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 24
      },headerTintColor: 'whitesmoke'}} />
      <HomeStackNav.Screen name="Item Details" component={ItemDetailScreen}  options={{ headerStyle: { backgroundColor: 'teal' }, headerTitleStyle: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 24
      },
      headerTintColor: 'whitesmoke'
      }}/>
    </HomeStackNav.Navigator>
  )
}


const ReportStackNav = createNativeStackNavigator()
function ReportScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Report Screen</Text>
      </View>
    </SafeAreaView>
  )
}

function ReportDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Report Details Screen</Text>
      </View>
    </SafeAreaView>
  )
}

function ReportStackScreen() {
  return (
    <ReportStackNav.Navigator>
      <ReportStackNav.Screen name="Report" component={ReportScreen}  options={{ headerStyle: { backgroundColor: 'teal' }, headerTitleStyle: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 24
      }, headerTintColor: 'whitesmoke'}}/>
      <ReportStackNav.Screen name="Report Details" component={ReportDetailsScreen}  options={{ headerStyle: { backgroundColor: 'teal' }, headerTitleStyle: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 24
      }, headerTintColor: 'whitesmoke'}}/>
    </ReportStackNav.Navigator>
  )
}


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="inverted" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: function({ focused, color, size}) {
            let iconName: keyof typeof Ionicons.glyphMap = 'ios-home-sharp'

            if (route.name === 'Summary') {
              iconName = focused ? 'ios-home-sharp' : 'ios-home-sharp'
            } else if (route.name === 'Expenses') {
              iconName = focused ? 'ios-pricetags' : 'ios-pricetags'
            } else if (route.name === 'Reports') {
              iconName = focused ? 'ios-pie-chart' : 'ios-pie-chart'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarStyle: {
            backgroundColor: 'whitesmoke'
          },
          tabBarActiveTintColor: '#CE6F8E',
          tabBarInactiveTintColor: 'teal',
          headerShown: false
        })}
        
      >
        <Tab.Screen name="Summary" component={HomeStackScreen}  />
        <Tab.Screen name="Expenses" component={ExpenseStackScreen} />
        <Tab.Screen name="Reports" component={ReportStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
    backgroundColor: '#3878A7',
    paddingTop: 15,
    borderWidth: 2,
    borderColor: '#00758D'
  }
});
