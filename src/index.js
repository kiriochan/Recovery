import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './pages/common/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
    (
        <ErrorBoundary>
            <Provider store={store}>
                <App/>
            </Provider>
        </ErrorBoundary>
    ),
    document.getElementById('app-root')
);

serviceWorker.unregister();