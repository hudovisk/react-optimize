
export {} // ensure this is a module

declare global {
    interface Window { 
        google_optimize: any;
        dataLayer: any;
        gtag: any;
    }
}