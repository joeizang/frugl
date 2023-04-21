import { createContext } from 'react'

export type FruglContextType = {
  accessToken: string
  userInfo: any
}

const FruglContext = createContext<any>({})

const FruglProvider = FruglContext.Provider

export { FruglContext, FruglProvider }