import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import '../styles/git.css'

import Top from './Top'
import Side from './Side'
import Repos from './Repos'

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Top />
        <Side />
        <Repos />
      </div>
    </Provider>
  )
}

export default App
