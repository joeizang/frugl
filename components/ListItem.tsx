import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function ListItem(props: any) {
  return (
    <TouchableOpacity onPress={() => {
        props.navigation.navigate('Item Details')
      }}
      style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={props.styles.listItemCircle}>
        <Text style={{ color: 'whitesmoke', fontWeight: '600',}}>E</Text>
      </View>
      <View style={props.styles.listItem}>
        <Text>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}
