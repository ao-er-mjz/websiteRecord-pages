import React, { memo } from 'react';

import { Image } from 'antd';

import styles from './list.module.scss';

import { listItemType, itemType } from '../../../const/index';

interface Props {
    dataItem: listItemType;
}

const Item: React.FC<Props> = memo(props => {
    const itemOnClick = (item: itemType) => {
        item.href && window.open(item.href);
    };
    return (
        <>
            <h2 id={props.dataItem.key} className={styles.title}>
                {props.dataItem.title}
            </h2>
            <div className={styles.grid_box}>
                {props.dataItem.list.map((item, index) => {
                    return (
                        <div
                            className={`${styles.item} flex a-i_c  j-c_s-b`}
                            key={index}
                            onClick={() => itemOnClick(item)}
                        >
                            <Image className={styles.image} width={80} height={80} src={item.img} preview={false} />
                            <div className={`m-l-10 flex-1`}>
                                <h2>{item.name}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
});

export default Item;
