import React, { useState, memo, useMemo } from 'react';
import { Image } from 'antd';
import styles from './list.module.scss';
import { itemType } from '../../../const/index';

interface ImageWithFallbackProps {
    /** Item data containing image URL/Base64 and fallback name */
    item: itemType;
}

/**
 * Image component with intelligent fallback handling
 * Supports URL, Base64, and fallback to text/name
 */
export const ImageWithFallback: React.FC<ImageWithFallbackProps> = memo(({ item }) => {
    const [imgError, setImgError] = useState(false);

    // Validation logic memoized to avoid recalculation on re-renders
    const { isBase64, isUrl, isImage } = useMemo(() => {
        const url = item.img;
        if (!url || url.trim() === '') {
            return { isBase64: false, isUrl: false, isImage: false };
        }

        const base64Regex = /^data:image\/(png|jpg|jpeg|gif|webp|bmp|svg\+xml);base64,([A-Za-z0-9+/=]+)$/;
        const _isBase64 = base64Regex.test(url);
        
        let _isUrl = false;
        try {
            const parsedUrl = new URL(url);
            _isUrl = ['http:', 'https:'].includes(parsedUrl.protocol);
        } catch {
            _isUrl = false;
        }

        const _isImage = /\.(jpg|jpeg|png|webp|svg|gif|bmp|ico)(\?.*)?$/i.test(url);

        return { isBase64: _isBase64, isUrl: _isUrl, isImage: _isImage };
    }, [item.img]);

    const handleImageError = () => {
        setImgError(true);
    };

    // Case 1: Valid image source (Base64 or URL) and no error -> Show Image
    if ((isBase64 || isImage) && !imgError) {
        return (
            <Image
                className={styles.image}
                width={80}
                height={80}
                src={item.img}
                preview={false}
                onError={handleImageError}
                alt={item.name}
                placeholder={
                    <div className={styles.fallback_image} aria-busy="true">
                        Loading...
                    </div>
                }
            />
        );
    }

    // Case 2: Non-empty string but not a valid image format -> Show raw text
    // Only if it's not a valid URL (to avoid showing raw URLs which are ugly)
    if (item.img && !isUrl && !isImage && !isBase64) {
        return (
            <div 
                className={styles.fallback_image} 
                role="img" 
                aria-label={item.img}
                title={item.img}
            >
                {item.img}
            </div>
        );
    }

    // Case 3: Fallback -> Show name or default text
    return (
        <div 
            className={styles.fallback_image} 
            role="img" 
            aria-label={item.name || 'No Image'}
        >
            {item.name || '暂无名称'}
        </div>
    );
});

ImageWithFallback.displayName = 'ImageWithFallback';
