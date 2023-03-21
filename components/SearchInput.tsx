import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


export default function (props: any) {
  return (
    <>
    {
      !props.showDateInput ? (
        <View style={styles.container}>
        <TextInput placeholder="Search..." style={styles.searchInput}/>
      </View>
      ) : (
        <View style={styles.dateContainer}>
          <View>
            <TextInput placeholder="01-12-1980" style={styles.dateInput}/>
          </View>
          <View>
            <TextInput placeholder="01-12-2144" style={styles.dateInput}/>
          </View>
        </View>
      )
    }
    </>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    height: 50,
    width: '97%',
    borderColor: 'teal',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20,
    padding: 10
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  dateInput: {
    height: 50,
    width: '100%',
    borderColor: 'teal',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20,
    padding: 10
  }
})