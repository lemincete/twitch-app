import Camera from './images/camera.svg';
import Joystick from './images/joystick.svg';

import { INavigationItem } from './navigation.interface';

export const navigationItemsArr: INavigationItem[] = [
    {
        label: 'Streams',
        path: '/streams',
        image: Camera,
        widthImage: 20,
        heightImage: 20
    },
    {
        label: 'Categories',
        path: '/categories',
        image: Joystick,
        widthImage: 20,
        heightImage: 20
    }
]