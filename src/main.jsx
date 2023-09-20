import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './homeApp';
import './style.css';
import {Lista} from './viewData';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App title="Nuevita La Prueba"/>
        <Lista></Lista>
    </React.StrictMode>
)