import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
import App from './main/App';

render(
    <HashRouter> 
        <App /> 
    </HashRouter>, 
    document.getElementById('root'));
registerServiceWorker();
