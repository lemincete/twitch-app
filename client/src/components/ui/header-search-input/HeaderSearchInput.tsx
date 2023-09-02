import styles from './HeaderSearchInput.module.scss';

import Search from './images/search.svg';

const HeaderSearchInput = () => {
    return (
        <div className={styles.root}>
            <input type="text" placeholder='Search' className={styles.root__input} />
            <button className={styles.root__search}>
                <img src={Search} alt="search" />
            </button>
        </div>
    );
}

export default HeaderSearchInput;