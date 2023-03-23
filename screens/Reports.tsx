import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
})


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

export default function ReportStackScreen() {
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
