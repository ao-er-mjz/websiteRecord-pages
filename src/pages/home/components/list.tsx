import React, { memo } from 'react';

import { Image } from 'antd';

import styles from './list.module.scss';

import { listItemType, itemType } from '../../../const/index';

interface Props {
    dataItem: listItemType;
    setRef: (dom: HTMLElement | null) => void;
}

const Item: React.FC<Props> = memo(props => {
    const itemOnClick = (item: itemType) => {
        item.href && window.open(item.href);
    };

    // 验证图片链接是否有效
    const isValidImageUrl = (url: string | undefined | null): boolean => {
        if (!url || url.trim() === '') return false;
        // 检查常见图片扩展名
        return /\.(jpg|jpeg|png|webp|svg|gif|bmp|ico)(\?.*)?$/i.test(url);
    };

    const renderImage = (item: itemType) => {
        const isValid = isValidImageUrl(item.img);

        if (isValid) {
            return <Image className={styles.image} width={80} height={80} src={item.img} preview={false} />;
        }

        return <div className={styles.fallback_image}>{item.img ? item.img : item.name}</div>;
    };

    return (
        <>
            <h1 ref={props.setRef} id={props.dataItem.href} className={`${styles.title} font-bold`}>
                {props.dataItem.title}
            </h1>
            <div className={styles.grid_box}>
                {props.dataItem.list.map((item, index) => {
                    return (
                        <div
                            className={`${styles.item} flex a-i_c  j-c_s-b`}
                            key={index}
                            onClick={() => itemOnClick(item)}
                        >
                            {renderImage(item)}
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
