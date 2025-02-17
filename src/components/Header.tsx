import React, { memo } from 'react';

import styles from '../styles/header.module.scss';
import { Select, Space } from 'antd';
import { Link } from 'react-router-dom';
import { currentProjectIdAtom } from '../state';
import { useRecoilState } from 'recoil';

const { Option } = Select;

interface Props {
    className?: string;
    title: string;
    active: string;
    children?: React.ReactNode;
}

const Header: React.FC<Props> = memo(props => {
    const options = [
        {
            label: '项目1',
            value: 1,
        },
        {
            label: '项目2',
            value: 2,
        },
        {
            label: '项目3',
            value: 3,
        },
    ];

    const routerList = [
        { path: '/', name: '系统首页', id: 'home' },
        { path: '/page1', name: '页面1', id: 'page1' },
        { path: '/page2', name: '页面2', id: 'page2' },
        { path: '/page3', name: '页面3', id: 'page3' },
        { path: '/page4', name: '页面4', id: 'page4' },
    ];

    const [projectId, setProjectId] = useRecoilState(currentProjectIdAtom);

    return (
        <div className={`${styles.header} ${props.className}`}>
            <div className={styles['header-center-navigation']}>
                <div className={styles.navigation}>
                    {routerList.map(item => {
                        return (
                            <Link to={item.path} key={item.id}>
                                <div
                                    className={`${styles['navigation-item']} ${
                                        props.active === item.id ? styles['active'] : ''
                                    }`}
                                >
                                    {item.name}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className={styles['header-toolbar']}>
                <Space>
                    <div>
                        <Select
                            className={styles['project-select']}
                            placeholder='选择项目（状态管理）'
                            popupClassName={styles['scene-list-men']}
                            value={projectId}
                            onChange={(value: any) => {
                                setProjectId(value);
                            }}
                        >
                            {options &&
                                options?.length > 0 &&
                                options.map(({ label, value }, index) => {
                                    return (
                                        <Option key={`project_${index}`} value={value}>
                                            {label}
                                        </Option>
                                    );
                                })}
                        </Select>
                    </div>
                </Space>
            </div>
        </div>
    );
});
export default Header;
