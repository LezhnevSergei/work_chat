import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import {applyMiddleware, compose, createStore} from "redux"
import rootReducer from "./redux/reducers/rootRducer"
import thunk from "redux-thunk"
import {BrowserRouter, HashRouter} from "react-router-dom"

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
