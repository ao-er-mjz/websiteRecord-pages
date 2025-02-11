import { ReactNode } from 'react';
export type itemType = {
    name: string;
    text: string;
    img: string;
    href: string;
};
export interface listItemType {
    key: string;
    href: string;
    title: ReactNode;
    list: itemType[];
}

const list: listItemType[] = [];

interface modulesFilesType {
    [key: string]: any;
}
const modulesFiles: modulesFilesType = import.meta.glob('./*.json', { eager: true });

for (const key in modulesFiles) {
    if (Object.prototype.hasOwnProperty.call(modulesFiles, key)) {
        // 使用正则表达式提取文件名中的部分
        const match = key.match(/(?:\.\/)([^.]+)\.json/);
        if (match && match[1]) {
            const title = match[1];
            const element = modulesFiles[key].default;
            list.push({ key: title, href: `#${title}`, title, list: element });
        }
    }
}

export default [...list];
