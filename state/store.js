import { proxy } from "valtio";

export const defaultStore = proxy({
    debug: false,
    router: null,
    deviceDetector: { size: 'not defined' },
    headerHeight: 0,
    footerHeight: 0,
    base: {
        siteName: '',
        lang: ''
    },
    current: {
        url: '',
        scrollY: 0,
        scrollYProgress: 0
    },
    cookies: {
        allowed: undefined,
    },
    theme: {
        accessible: false,
        negative: true,
    }

})