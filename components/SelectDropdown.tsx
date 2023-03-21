import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownMenu: {
    width: '100%',
    paddingLeft: 15,
    borderColor: 'teal',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#3878A7',
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'teal',
    height: 50,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 1,
  },
  dropDownText: { 
    color: 'white',
    fontWeight: '700',
    margin: 5
  }
})


export default function SelectDropDown(props: any) {
  const [showDropDown, setShowDropDown] = useState(false)
  const [selectedType, setSelectedType] = useState('')
  return (
    <Fragment>
      <View style={styles.dropdownWrapper}>
        <TextInput
          style={props.ExpenseInput}
          placeholder="Select Expense Type"
          value={selectedType}
          onFocus={() => setShowDropDown(true)}
          onBlur={() => setShowDropDown(false)}
        />
        <Ionicons
          name="chevron-down-circle"
          size={24}
          color="teal"
          style={props.InputIcon}
          onPress={() => setShowDropDown(!showDropDown)}
        />
      </View>
      {showDropDown ? <View style={styles.dropdownMenu}>
        <View>
          <Text style={styles.dropDownText}>Pick the type of Expense</Text>
        </View>
        <View>
          <Text style={styles.dropDownText}>Groceries</Text>
        </View>
        <View>
          <Text style={styles.dropDownText}>Market Shopping</Text>
        </View>
        <View>
          <Text style={styles.dropDownText}>Entertainment</Text>
        </View>
        <View>
          <Text style={styles.dropDownText}>Electronics</Text>
        </View>
      </View> : null}
    </Fragment>
  )
}
