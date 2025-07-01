import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Login/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

async function enableMocking () {
    if (process.env.NODE_ENV === 'development') {
        const {worker} = await import("./mocks/browser");

        return worker.start();
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {
    root.render(<QueryClientProvider client={queryClient}>
        <Login />
    </QueryClientProvider>);
})
