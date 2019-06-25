import React from 'react'
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import AppNavigation from './AppNavigation'
import reducer from './reducers/reducer'

const store = createStore(reducer)

export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <AppNavigation/>
      </Provider>
    )
  }
}
