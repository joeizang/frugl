import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AppButton } from '../components/AppButton'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory-native'

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingVertical: 10
  },
  dateTime: {
    width: width-20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainSection: {
    flex: 2,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  graphSection: {
    width: width-20,
    flex: 1,
    marginBottom: -30
  }
})

export function ExpenseDetailsScreen(props: any) {  
  const handleNavigation = () => {
    // console.log('navigating', props)
    props.navigation.navigate('Expenses')
  }
  const barData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
]

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.dateTime}>
              <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                // backgroundColor: 'teal',
                borderRadius: 10,
                padding: 10,
              }}>
                <Text style={{ color: 'black', fontWeight: '700', fontSize: 15}}>Date: </Text>
                <Text style={{ color: 'black', fontWeight: '700', fontSize: 15}}>April 9th, 2023</Text>
              </View>
              <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                // backgroundColor: 'black',
                borderRadius: 10,
                padding: 10,
              }}>
                <Text style={{ color: 'black', fontWeight: '700', fontSize: 15}}>Time: </Text>
                <Text style={{ color: 'black', fontWeight: '700', fontSize: 15}}>23:47:22pm</Text>
              </View>
            </View>
          <View style={styles.mainSection}>
            <View style={{ width: width - 20, height: 400 }}>
              <View style={{
                height: 300,
                width: width - 26,
                padding: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                borderWidth: 2,
                borderColor: '#5f6a00',
                paddingVertical: 8,
                paddingHorizontal: 10,
                marginBottom: 30,
                marginTop: 10,
              }}>
                <TextInput
                  multiline={true}
                  numberOfLines={25}
                  editable={false}
                  style={{
                    width: '100%',
                    padding: 10,
                    textAlignVertical: 'top',
                  }}
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: '700', }}>This Expense's Total: </Text>
                <Text style={{ fontWeight: '700', }}>$1,000.00</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'flex-start', marginLeft: 220}}>
              <AppButton
                buttonTitle="Update Expense"
                buttonAction={() => {handleNavigation()}}
                buttonStyle={{ backgroundColor: '5f6a00', width: 150, borderRadius: 8, marginTop: 0 }}
                buttonTextStyle={{ color: 'white', fontSize: 16, fontWeight: '900' }}
                buttonIcon={<Ionicons name="ios-add" size={24} color="white" />}
                isSubmitting={false}
                height={30}
                color={'#474838'}
              />
            </View>
          </View>
          <View style={styles.graphSection}>
            <VictoryChart theme={VictoryTheme.material} domainPadding={20} height={200}>
              <VictoryAxis
                tickValues={[1, 2, 3, 4, ]}
                tickFormat={["M", "T", "W", "T", ]}
              />  
              <VictoryAxis
                dependentAxis tickFormat={(x) => (`$${x}`)}
              />
              <VictoryBar
                data={barData}
                x="label"
                y="value"
              />
            </VictoryChart>
          </View>
    </SafeAreaView>
  )
}
