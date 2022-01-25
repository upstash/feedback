import React from 'react'
import ReactDOM from 'react-dom'
import FeedbackWidget from './package/index'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="list">
      <FeedbackWidget type="form">
        <button>form</button>
      </FeedbackWidget>

      <hr />

      <FeedbackWidget type="rate">
        <button>rate</button>
      </FeedbackWidget>

      <hr />

      <FeedbackWidget type="rate" user="asd">
        <button>rate + user</button>
      </FeedbackWidget>

      <hr />

      <FeedbackWidget type="full">
        <button>full</button>
      </FeedbackWidget>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
