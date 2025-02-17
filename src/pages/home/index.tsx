import React, { memo, useRef, useCallback } from 'react';
import { Anchor, List } from 'antd';
import Header from '../../components/Header';
import Content from '../../components/Content';
import ListComponents from './components/list';
import styles from './index.module.scss';
import { currentProjectIdAtom } from '../../state';
import { useRecoilValue } from 'recoil';
import dataList from '../../const/index';

// 定义HomeContent组件，使用memo进行优化
const HomeContent: React.FC = memo(() => {
    // 获取当前项目的ID
    const projectId = useRecoilValue(currentProjectIdAtom);
    // 创建一个ref列表，用于存储每个列表项的DOM引用
    const liRefList = useRef<HTMLElement[]>([]);

    // 定义一个回调函数，用于设置DOM引用
    const setRef = useCallback((dom: HTMLElement | null) => {
        if (dom) {
            liRefList.current.push(dom);
        }
    }, []);

    // 定义点击事件处理函数，用于平滑滚动到指定的DOM元素
    const handleClick = (href: string) => {
        const dom = liRefList.current.find(item => item.id === href);
        dom!.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            {/* 渲染Header组件 */}
            <Header className={styles.header} title='系统首页' active='home' />
            {/* 渲染侧边栏，包含一个列表 */}
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
            {/* 渲染主要内容区域 */}
            <main id='main_id' className={styles.main}>
                <Content>
                    <div className={`${styles.state}`}>
                        <h1 className={``}>状态管理 </h1>
                        <div className={styles['title-content']}>
                            {/* 显示当前选中的项目ID */}
                            选择的项目id：<span>{projectId}</span>
                        </div>
                    </div>
                </Content>
                {/* 渲染每个数据项的内容 */}
                {dataList.map(item => (
                    <ListComponents key={item.key} dataItem={item} setRef={setRef} />
                ))}
            </main>
            {/* 渲染底部 */}
            <footer className={styles.footer}>底部</footer>
        </div>
    );
});

export default HomeContent;
