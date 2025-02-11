import React, { memo } from 'react';

import { Anchor } from 'antd';

import Header from '../../components/Header';
import Content from '../../components/Content';

import ListComponents from './components/list';

import styles from './index.module.scss';

import { currentProjectIdAtom } from '../../state';
import { useRecoilValue } from 'recoil';

import dataList, { listItemType } from '../../const/index';

const HomeContent: React.FC = memo(props => {
    const projectId = useRecoilValue(currentProjectIdAtom);
    const clickLeftItem = (item: listItemType) => {
        console.log(item);
    };
    return (
        <div className={styles.container}>
            <Header className={styles.header} title='系统首页' active='home' />

            <aside className={styles.sidebar}>
                <Anchor
                    items={dataList.map(item => ({
                        ...item,
                        title: <h1 className='font-bold'>{item.title}</h1>,
                    }))}
                />
            </aside>
            <main className={styles.main}>
                <Content>
                    <div className={`${styles.state}`}>
                        <h1 className={``}>状态管理 </h1>
                        <div className={styles['title-content']}>
                            选择的项目id：<span>{projectId}</span>
                        </div>
                    </div>
                </Content>
                {dataList.map(item => {
                    return <ListComponents key={item.key} dataItem={item}></ListComponents>;
                })}
                <footer className={styles.footer}>底部</footer>
            </main>
        </div>
    );
});
export default HomeContent;
