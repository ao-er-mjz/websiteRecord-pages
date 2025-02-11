import React, { memo, useRef, useCallback } from 'react';
import { Anchor, List } from 'antd';
import Header from '../../components/Header';
import Content from '../../components/Content';
import ListComponents from './components/list';
import styles from './index.module.scss';
import { currentProjectIdAtom } from '../../state';
import { useRecoilValue } from 'recoil';
import dataList from '../../const/index';

const HomeContent: React.FC = memo(() => {
    const projectId = useRecoilValue(currentProjectIdAtom);
    const liRefList = useRef<HTMLElement[]>([]);

    const setRef = useCallback((dom: HTMLElement | null) => {
        if (dom) {
            liRefList.current.push(dom);
        }
    }, []);

    const handleClick = (href: string) => {
        const dom = liRefList.current.find(item => item.id === href);
        dom!.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            <Header className={styles.header} title='系统首页' active='home' />
            <aside className={styles.sidebar}>
                <List
                    bordered
                    dataSource={dataList}
                    renderItem={item => (
                        <List.Item className='cursor-po' onClick={() => handleClick(item.href)}>
                            <h1 className='font-bold '>{item.title}</h1>
                        </List.Item>
                    )}
                />
            </aside>
            <main id='main_id' className={styles.main}>
                <Content>
                    <div className={`${styles.state}`}>
                        <h1 className={``}>状态管理 </h1>
                        <div className={styles['title-content']}>
                            选择的项目id：<span>{projectId}</span>
                        </div>
                    </div>
                </Content>
                {dataList.map(item => (
                    <ListComponents key={item.key} dataItem={item} setRef={setRef} />
                ))}
            </main>
            <footer className={styles.footer}>底部</footer>
        </div>
    );
});

export default HomeContent;
