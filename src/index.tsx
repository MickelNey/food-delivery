import React from 'react';
import { createRoot } from 'react-dom/client';

import './static/css/fonts.css';
import './static/css/vars.scss';
import './static/css/normalize.scss';
import './index.css';

import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
