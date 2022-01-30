import React from 'react'
import ReactDOM from 'react-dom'
import FeedbackWidget from './package/index'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="list">
      <FeedbackWidget type="full" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
