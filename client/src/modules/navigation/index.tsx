import styles from './index.module.scss';

import { navigationItemsArr } from './navigation.data';

import NavigationItem from './components/navigation-item';

const Navigation = () => {
    return (
        <nav className={styles.root}>
            {navigationItemsArr.map((item) =>
                <NavigationItem {...item} />
            )}
        </nav>
    );
}

export default Navigation;