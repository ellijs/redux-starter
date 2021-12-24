import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import store from './store'
import * as actions from './actionTypes'
import { bugAdded } from "./actions"

// state = reducer(state, action)
// notify the subscribers

const unsubscribe = store.subscribe(()=> {
  console.log("Store changed!", store.getState())
})

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload:  {
//     description : "Bug1"
//   }
// })   ==> moved to actions
// changed to below

store.dispatch(bugAdded("Bug 1"))
store.dispatch(bugResolved(1))

unsubscribe()

store.dispatch({
  type: actions.BUG_REMOVED,
  payload : {
    id: 1
  }
})












// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
