import React, { memo } from 'react';

import styles from '@/styles/content.module.scss';

interface Props {
    children?: React.ReactNode;
}
const Content: React.FC<Props> = memo(props => {
    return <div className={styles.content}>{props.children}</div>;
});
export default Content;
