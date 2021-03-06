export declare enum ReactTinyLinkType {
    TYPE_AMAZON = "TYPE_AMAZON",
    TYPE_YOUTUBE = "TYPE_YOUTUBE",
    TYPE_AUDIO = "TYPE_AUDIO",
    TYPE_VIDEO = "TYPE_VIDEO",
    TYPE_IMAGE = "TYPE_IMAGE",
    TYPE_DEFAULT = "TYPE_DEFAULT",
    TYPE_INSTAGRAM = "TYPE_INSTAGTAM"
}
export declare type CardSizeType = 'small' | 'large';
export interface IReactTinyLinkProps {
    cardSize: CardSizeType;
    maxLine: number;
    minLine: number;
    url: string;
    header?: string;
    description?: string;
    showGraphic?: boolean;
    autoPlay?: boolean;
    width?: string | number;
    proxyUrl?: string;
    scraper?: (url: string, httpClient: any, defaultMedia: any) => Promise<{
        title: any;
        description: any;
        url: any;
        video: any[];
        image: any[];
        type: ReactTinyLinkType;
    }>;
    defaultMedia?: string;
}
export interface IReactTinyLinkData {
    description: string;
    image: string[];
    title: string;
    type: ReactTinyLinkType;
    video: string[];
    url: string;
}
