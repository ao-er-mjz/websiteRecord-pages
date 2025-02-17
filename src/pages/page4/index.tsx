import React from 'react';
import styles from './index.module.scss';

const Page4: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>Left Sidebar</div>
            <div className={styles.main}>Main Content</div>
            <div className={styles.right}>Right Sidebar</div>
        </div>
    );
};

export default Page4;