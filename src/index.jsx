import { render } from 'react-dom';
import * as React from 'react';

import { CssBaseline } from '@material-ui/core';

import "./stylesheets/index.scss";

import { App } from "./components/App";

render(
    <>
        <CssBaseline />
        <App />
    </>,
    document.querySelector('#root')
);
