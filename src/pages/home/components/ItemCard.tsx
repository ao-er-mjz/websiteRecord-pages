import React, { memo } from 'react';
import styles from './list.module.scss';
import { itemType } from '@/const/index';
import { ImageWithFallback } from './ImageWithFallback';

interface ItemCardProps {
    /** Item data to display */
    item: itemType;
    /** Click handler for the card */
    onClick: (item: itemType) => void;
}

/**
 * Card component displaying individual item details
 * Memoized to prevent unnecessary re-renders when parent list updates
 */
export const ItemCard: React.FC<ItemCardProps> = memo(({ item, onClick }) => {
    return (
        <div
            className={`${styles.item} flex a-i_c j-c_s-b`}
            onClick={() => onClick(item)}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick(item);
                }
            }}
            aria-label={`Open ${item.name}`}
        >
            <ImageWithFallback item={item} />
            <div className={`m-l-10 flex-1`}>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
            </div>
        </div>
    );
});

ItemCard.displayName = 'ItemCard';
