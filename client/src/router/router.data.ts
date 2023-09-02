import HomePage from "./pages/HomePage";

import { IRouterItem } from "./router.interface";

const publicRoutesArr: IRouterItem[] = [
    {
        Component: HomePage,
        path: '/'
    }
]

const privateRoutesArr: IRouterItem[] = [

]

const isAuth = localStorage.getItem('jwt');

export const router = isAuth ? privateRoutesArr : publicRoutesArr