import React from 'react';
import ReactDOM from 'react-dom/client'
import { getAllPosts } from './api';
import { BrowserRouter } from "react-router-dom";
import { App } from './components'

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);