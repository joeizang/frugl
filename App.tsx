import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar'
import ExpenseStackScreen from './screens/Expense'
import ReportStackScreen from './screens/Reports'
import { HomeStackScreen } from './screens/Home'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="light" />
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
