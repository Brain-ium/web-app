import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from './pages/errorBoundary';

const root = document.getElementById('root');

createRoot(root).render(
    <ErrorBoundary>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ErrorBoundary>
);