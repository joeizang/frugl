import React, { Fragment, useState } from 'react'
import { Keyboard, StyleSheet, TextInput, TouchableOpacity, View, Platform, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SelectList } from 'react-native-dropdown-select-list'

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
    marginHorizontal: 8,
    marginBottom: 1,
    width: '69%'
  },
  dropDownText: { 
    color: 'white',
    fontWeight: '700',
    margin: 5
  }
})

const typesOfExpenses = [
  { key: 'Entertainment', value: 'ENTERTAINMENT', },
  { key: 'Groceries', value: 'GROCERIES' },
  { key: 'Utilities', value: 'UTILITIES' },
  { key: 'FeesOrLevies', value: 'FEESORLEVIES' },
  { key: 'Gifts', value: 'GIFTS' },
  { key: 'Household', value: 'HOUSEHOLD' },
  { key: 'Electronics', value: 'ELECTRONICS' },
  { key: 'Personal', value: 'PERSONAL' },
  { key: 'Carrer', value: 'CAREER' }
]


export default function SelectDropDown(props: any) {
  const [showDropDown, setShowDropDown] = useState(false)
  const [selectedType, setSelectedType] = useState('')
  const width = Dimensions.get('window').width
  return (
    <Fragment>
      <SelectList
        data={typesOfExpenses}
        save={'value'}
        setSelected={setSelectedType}
        boxStyles={{
          borderColor: 'teal',
          borderWidth: 2,
          minWidth: 359,
          maxWidth: width,
          width: width - 26,
        }}
        arrowicon={<Ionicons name="chevron-down-circle" size={24} color="#7576B2" />}
        search={false}
        dropdownStyles={{ borderColor: 'teal', borderWidth: 2 }}
        dropdownItemStyles={{}}
      />
    </Fragment>
  )
}
