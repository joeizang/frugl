import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'


function HomeScreen(props: any) {
  console.log({ props })
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Expense') } style={{ 
        backgroundColor: 'indigo',
        padding: 12,
        marginTop: 10,
        borderRadius: 10
        }}>
        <Text style={{ color: 'whitesmoke', fontWeight: '600' }}>Add New Expense</Text>
      </TouchableOpacity>
    </View>
  )
}

function ReportScreen() {
  return (
    <View style={styles.container}>
      <Text>Report Screen</Text>
    </View>
  )
}


function AddExpenseScreen() {
  return (
    <View style={styles.container}>
      <Text>Add Expense Screen</Text>
    </View>
  )
}
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: function({ focused, color, size}) {
            let iconName: keyof typeof Ionicons.glyphMap

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home-sharp' : 'ios-home-sharp'
            } else if (route.name === 'Expense') {
              iconName = focused ? 'ios-pricetags' : 'ios-pricetags'
            } else if (route.name === 'Report') {
              iconName = focused ? 'ios-pie-chart' : 'ios-pie-chart'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'darkblue'
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Expense" component={AddExpenseScreen} />
        <Tab.Screen name="Report" component={ReportScreen} />
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
});
