import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { ListItem } from './ListItem'


const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  // ...
]

export default function ExpenseList(props: any) {
  return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ListItem item={item} styles={styles} {...props}/>}
        keyExtractor={item => item.id}
        style={{ flex: 1, width: '90%' }}
      />
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'lightcyan', // Light teal color
    padding: 16,
    borderRadius: 14, // Add rounded corners
    borderWidth: 2, // Add thick borders
    borderColor: 'teal', // Border color
    marginBottom: 4, // Small margin bottom
    marginTop: 4, // Small margin top
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemCircle: {
    flexDirection: 'row',
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
