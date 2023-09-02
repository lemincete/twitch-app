import { FC, ReactNode } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { store } from '../redux';

import { Provider } from 'react-redux';

interface ProviderProps {
    children: ReactNode
}

const Providers: FC<ProviderProps> = ({ children }) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                {children}
            </Provider>
        </BrowserRouter>
    );
}

export default Providers;