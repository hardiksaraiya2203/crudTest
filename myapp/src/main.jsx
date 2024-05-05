import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CrudWithApiParent from './CrudWithApiParent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CrudWithApiParent />
  </React.StrictMode>,
)
