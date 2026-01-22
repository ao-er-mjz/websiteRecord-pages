/// <reference types="vite/client" />

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.jpeg' {
    const content: string;
    export default content;
}

declare module '*.gif' {
    const content: string;
    export default content;
}

declare module '*.webp' {
    const content: string;
    export default content;
}

declare namespace Intl {
    interface SegmenterOptions {
        localeMatcher?: 'best fit' | 'lookup';
        granularity?: 'grapheme' | 'word' | 'sentence';
    }

    interface SegmentData {
        segment: string;
        index: number;
        input: string;
        isWordLike?: boolean;
    }

    class Segmenter {
        constructor(locale?: string | string[], options?: SegmenterOptions);
        segment(input: string): IterableIterator<SegmentData>;
    }
}
