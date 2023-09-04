import styles from './index.module.scss';

import { FC } from 'react';

import { Link } from 'react-router-dom';

import { INavigationItem } from '../../navigation.interface';

const NavigationItem: FC<INavigationItem> = ({ label, path, image, widthImage, heightImage }) => {
    return (
        <Link to={path} className={styles.root}>
            <img src={image} alt={label} width={widthImage} height={heightImage} />
            <span>{label}</span>
        </Link>
    );
}

export default NavigationItem;