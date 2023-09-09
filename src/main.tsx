import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import DoggiesApp from './DoggiesApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DoggiesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
