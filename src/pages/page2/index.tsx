import React, { memo } from 'react';
import Header from '../../components/Header';
import Content from '../../components/Content';

import { useAsync } from 'react-use';
import { api } from '../../api';

import styles from '../page1/index.module.scss';

const Page2: React.FC = memo(() => {
    const devData = useAsync(async () => {
        return await api.getdevData();
    }, []);
    return (
        <>
            <Header title='page2' active='page2' />
            <div className={styles.content}>
                <Content>
                    <h1 className={styles.title}>本地接口联调（api.py）</h1>
                    <div className={styles['title-content']}>
                        请求数据：<span>{JSON.stringify(devData)}</span>
                    </div>
                </Content>
            </div>
        </>
    );
});
export default Page2;
