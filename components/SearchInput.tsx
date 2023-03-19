import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


export default function () {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." style={styles.searchInput}/>
    </View>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    height: 50,
    width: '90%',
    borderColor: 'gray',
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
  }
})