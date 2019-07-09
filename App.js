import React from 'react'
import {Provider} from 'react-redux'
import AppNavigation from './AppNavigation'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation/> 
        </PersistGate>
      </Provider>
    )
  }
}
