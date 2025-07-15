import { useWindowSize } from "./useWindowSize";
export function useBreakpoint() {
    var width = useWindowSize().width;
    if (width < 640)
        return "xs";
    if (width < 768)
        return "sm";
    if (width < 1024)
        return "md";
    if (width < 1280)
        return "lg";
    if (width < 1536)
        return "xl";
    return "2xl";
}
