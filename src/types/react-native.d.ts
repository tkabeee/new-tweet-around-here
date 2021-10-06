import * as React from 'react'
import AppRegistry from 'react-native'

declare module '@types/react-native/index' {
  namespace AppRegistry {
    function getApplication(appName: string): any
  }
}
