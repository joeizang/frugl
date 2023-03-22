import { Animated, ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function (props: any) {
  return (
    <ScrollView style={{ width: '99%', paddingLeft: 7}}>
      <View style={props.dropdownMenu}>
        <TouchableOpacity onPress={() => console.warn('clicked on dropdown item!!!')}>
          <View>
            <Text style={props.dropDownText}>Pick the type of Expense</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.warn('clicked on dropdown item!!!')}>
          <View>
            <Text style={props.dropDownText}>Groceries</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.warn('clicked on dropdown item!!!')}>
          <View>
            <Text style={props.dropDownText}>Market Shopping</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.warn('clicked on dropdown item!!!')}>
          <View>
            <Text style={props.dropDownText}>Entertainment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.warn('clicked on dropdown item!!!')}>
          <View>
            <Text style={props.dropDownText}>Electronics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.warn('clicked on dropdown item!!!')}>
          <View>
            <Text style={props.dropDownText}>Electronics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.warn('clicked on dropdown item!!!')}>
          <View>
            <Text style={props.dropDownText}>Electronics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.warn('clicked on dropdown item!!!')}>
          <View>
            <Text style={props.dropDownText}>Electronics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.warn('clicked on dropdown item!!!')}>
          <View>
            <Text style={props.dropDownText}>Electronics</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}