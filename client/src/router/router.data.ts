import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

import { IRouterItem } from "./router.interface";

const publicRoutesArr: IRouterItem[] = [
    {
        Component: HomePage,
        path: '/'
    },
    {
        Component: UserPage,
        path: '/:channel'
    }
]

const privateRoutesArr: IRouterItem[] = [

]

const isAuth = localStorage.getItem('jwt');

export const router = isAuth ? privateRoutesArr : publicRoutesArr