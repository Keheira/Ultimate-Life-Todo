import React from 'react'
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import AppNavigation from './AppNavigation'
import reducer from './reducers/index'

export default class App extends React.Component {
  render(){
    return(
      <Provider store={createStore(reducer)}>
        <AppNavigation/>
      </Provider>
    )
  }
}
