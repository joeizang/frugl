import { FlatList, StyleSheet } from 'react-native'
import { ListItem } from './ListItem'


const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
  { id: '9', title: 'Item 9' },
  { id: '10', title: 'Item 10' },
  { id: '11', title: 'Item 11' },
  { id: '12', title: 'Item 12' },
  // ...
]

export default function ExpenseList(props: any) {
  return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ListItem item={item} styles={styles} {...props}/>}
        keyExtractor={item => item.id}
        style={{ flex: 1, width: '100%' }}
      />
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'lightcyan',
    padding: 8,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#5f6a00',
    marginBottom: 4,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    width: '84%'
  },
  listItemCircle: {
    flexDirection: 'row',
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#5f6a00',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
