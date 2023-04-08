import { ReactNode } from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'

export type ButtonApi = {
  buttonAction: () => void
  buttonStyle: {} & any
  buttonTitle: string
  buttonIcon: ReactNode
  buttonTextStyle: {} & any
  isSubmitting: boolean
}

export function AppButton(props: ButtonApi) {
  return (
    <TouchableOpacity style={{
      backgroundColor: '#CE6F8E',
      width: props.buttonStyle.width,
      height: 50,
      borderRadius: 8,
      shadowOffset: { width: 0, height: 3 },
      elevation: 10,
      shadowColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    }} onPress={props.buttonAction}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text style={props.buttonTextStyle}>{props.buttonTitle}</Text>
          {props.isSubmitting && props.buttonIcon}
      </View>
    </TouchableOpacity>
  )
}

