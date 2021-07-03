import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './components/App';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'

// const store = createStore(reducers, applyMiddleware(thunk));
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);