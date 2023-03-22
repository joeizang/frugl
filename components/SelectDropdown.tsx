import React, { Fragment, useState } from 'react'
import { Keyboard, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import DropdownMenuItems from './DropdownMenuItems'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownMenu: {
    width: '97%',
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
    width: '97%'
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
      <TouchableOpacity onPress={() => {
        setShowDropDown(!showDropDown)
        Keyboard.dismiss()
      }}>
        <View style={styles.dropdownWrapper}>
          <TextInput
            style={props.ExpenseInput}
            placeholder="Select Expense Type"
            value={selectedType}
            editable={false}
          />
          <Ionicons
            name="chevron-down-circle"
            size={24}
            color="#7576B2"
            style={props.InputIcon}
            onPress={() => setShowDropDown(!showDropDown)}
          />
        </View>
      </TouchableOpacity>
      {showDropDown ?
          <DropdownMenuItems
            dropdownMenu={styles.dropdownMenu}
            dropDownText={styles.dropDownText}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        : null
      }
    </Fragment>
  )
}
