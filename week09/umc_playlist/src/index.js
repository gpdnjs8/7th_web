import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store/store'

const portalElement = document.getElementById("portal");
if (!portalElement) {
    const newPortalElement = document.createElement("div");
    newPortalElement.id = "portal";
    document.body.appendChild(newPortalElement);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>  
        <App />
    </Provider>
);


