import styles from './index.module.scss';

import Logo from '../../images/logo.svg'
import Avatar from '../../images/avatar.svg';

import { Link } from 'react-router-dom';
import HeaderSearchInput from '../header-search-input/HeaderSearchInput';


const Header = () => {
    return (
        <header className={styles.root}>
            <div className='container'>
                <div className={styles.root__body}>
                    <Link className={styles.root__body__logo} to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <HeaderSearchInput />
                    <div className={styles.root__body__profile}>
                        <img src={Avatar} alt="profile" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;