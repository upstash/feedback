import React from 'react'
import ReactDOM from 'react-dom'
import FeedbackWidget from './package/index'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <FeedbackWidget>
      <button>aç/kapa</button>
    </FeedbackWidget>
  </React.StrictMode>,
  document.getElementById('root')
)
