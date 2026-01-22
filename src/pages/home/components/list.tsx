import React, { memo, useCallback } from 'react';
import styles from './list.module.scss';
import { listItemType, itemType } from '@/const/index';
import { ItemCard } from './ItemCard';

interface Props {
    dataItem: listItemType;
    setRef: (dom: HTMLElement | null) => void;
}

const Item: React.FC<Props> = memo(props => {
    // Memoize the click handler to maintain reference stability for child components
    const itemOnClick = useCallback((item: itemType) => {
        if (item.href) {
            window.open(item.href);
        }
    }, []);

    return (
        <>
            <h1 ref={props.setRef} id={props.dataItem.href} className={`${styles.title} font-bold`}>
                {props.dataItem.title}
            </h1>
            <div className={styles.grid_box}>
                {props.dataItem.list.map((item, index) => (
                    <ItemCard key={`${item.name}-${index}`} item={item} onClick={itemOnClick} />
                ))}
            </div>
        </>
    );
});

Item.displayName = 'ListComponents';

export default Item;
