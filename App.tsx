import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from './components/SearchInput'
import ExpenseList from './components/ExpenseList'

const HomeStackNav = createNativeStackNavigator()
function HomeScreen(props: any) {
  console.log({ props })
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchInput />
      </View>
      <View style={styles.expenseList}>
        <ExpenseList />
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
      }}} />
      <HomeStackNav.Screen name="Item Details" component={ItemDetailScreen}  options={{ headerStyle: { backgroundColor: 'teal' }, headerTitleStyle: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 24
      }}}/>
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
      }}}/>
      <ReportStackNav.Screen name="Report Details" component={ReportDetailsScreen}  options={{ headerStyle: { backgroundColor: 'teal' }, headerTitleStyle: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 24
      }}}/>
    </ReportStackNav.Navigator>
  )
}

const AddExpenseStackNav = createNativeStackNavigator()
function AddExpenseScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Add Expense Screen</Text>
      </View>
    </SafeAreaView>
  )
}

function ExpenseDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Expense Details Screen</Text>
      </View>
    </SafeAreaView>
  )
}

function ExpenseStackScreen() {
  return (
    <AddExpenseStackNav.Navigator>
      <AddExpenseStackNav.Screen name="Expense" component={AddExpenseScreen}  options={{ headerStyle: { backgroundColor: 'teal' }, headerTitleStyle: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 24
      }}}/>
      <AddExpenseStackNav.Screen name="Expense Details" component={ExpenseDetailsScreen}  options={{ headerStyle: { backgroundColor: 'teal'},
      headerTitleStyle: {
        color: 'whitesmoke',
      }
    }}/>
    </AddExpenseStackNav.Navigator>
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
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'darkblue',
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
  },
  expenseList: { 
    flex: 1,
    width: '97%',
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
    paddingTop: 15,
    marginBottom: 5,
  }
});
