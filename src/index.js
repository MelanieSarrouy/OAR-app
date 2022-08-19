import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './React/App'
import { Provider } from 'react-redux'
import { store } from './Redux/store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
