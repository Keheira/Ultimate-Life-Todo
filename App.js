import React from 'react'
import {Provider} from 'react-redux'
import AppNavigation from './AppNavigation'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFF',
    accent: '#FFA500'
  }
}
export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <AppNavigation/>
          </PaperProvider>
        </PersistGate>
      </Provider>
    )
  }
}
