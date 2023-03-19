import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function ListItem(props: any) {
  return (
    <TouchableOpacity onPress={() => {
        props.navigation.navigate('Item Details')
      }}>
      <View style={props.styles.listItem}>
        <View style={props.styles.listItemCircle}>
          <Text style={{ color: 'whitesmoke', fontWeight: '600',}}>E</Text>
        </View>
        <Text>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}
