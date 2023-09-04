import { ChangeEvent } from 'react';

import styles from './HeaderSearchInput.module.scss';

import Search from './images/search.svg';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { changeSearchAction } from '../../../../store/reducers/search';

const HeaderSearchInput = () => {

    const dispatch = useAppDispatch();

    const { search } = useAppSelector(state => state.search);



    return (
        <div className={styles.root}>
            <input type="text" placeholder='Search' className={styles.root__input} value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(changeSearchAction(e.target.value))} />
            <button className={styles.root__search}>
                <img src={Search} alt="search" />
            </button>
        </div>
    );
}

export default HeaderSearchInput;