import { FC, ReactNode } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { store } from '../store';

import { Provider } from 'react-redux';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProviderProps {
    children: ReactNode
}

const Providers: FC<ProviderProps> = ({ children }) => {

    const client = new QueryClient();

    return (
        <BrowserRouter>
            <Provider store={store}>
                <QueryClientProvider client={client}>
                    {children}
                </QueryClientProvider>
            </Provider>
        </BrowserRouter>
    );
}

export default Providers;