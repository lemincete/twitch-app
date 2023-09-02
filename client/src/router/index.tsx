import { Routes, Route } from 'react-router-dom';

import { router } from './router.data';

const Router = () => {
    return (
        <Routes>
            {router.map(({ Component, path }) =>
                <Route path={path} Component={Component} key={path} />
            )}
        </Routes>
    );
}

export default Router;