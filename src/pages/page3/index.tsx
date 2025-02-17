import React from 'react';

import styles from './index.module.scss';

const App: React.FC = () => (
    <div className={styles.container}>
        {Array.from({ length: 6 }).map((item: any, index: number) => (
            <div className={styles[`item-${index}`]} key={index}>
                {index}
            </div>
        ))}
    </div>
);

export default App;
