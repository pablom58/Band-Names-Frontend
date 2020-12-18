import React from 'react'
import { render } from 'react-dom'
import { SocketProvider } from './context/SocketContext'

import App from './App'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

render(
    <SocketProvider>
        <App />
    </SocketProvider>
    ,
    document.getElementById('App')
)