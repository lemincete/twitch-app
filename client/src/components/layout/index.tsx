import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.root__body}>
                <div className='container'>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;