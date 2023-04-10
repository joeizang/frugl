import { ReactNode } from 'react'
import { ColorValue, Dimensions, Text, TouchableOpacity, View } from 'react-native'

export type ButtonApi = {
  buttonAction: () => void
  buttonStyle: {} & any
  buttonTitle: string
  buttonIcon: ReactNode
  buttonTextStyle: {} & any
  isSubmitting: boolean
  height?: number
  color?: ColorValue
}

export function AppButton(props: ButtonApi) {
  return (
    <TouchableOpacity style={{
        backgroundColor: props.color,
        width: props.buttonStyle.width,
        height: props.height || 50,
        borderRadius: 8,
        shadowOffset: { width: 2, height: 3 },
        elevation: 10,
        shadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }} onPress={props.buttonAction}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text style={props.buttonTextStyle}>{props.buttonTitle}</Text>
          {props.isSubmitting && props.buttonIcon}
      </View>
    </TouchableOpacity>
  )
}

