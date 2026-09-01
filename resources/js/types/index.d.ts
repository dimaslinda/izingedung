export interface SharedData {
    [key: string]: unknown;
}

declare global {
    interface Window {
        gtag_report_conversion?: (url?: string, target?: string) => boolean;
    }
}
