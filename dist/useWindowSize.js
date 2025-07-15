import { useEffect, useState } from "react";
export function useWindowSize() {
    var _a = useState({ width: 0, height: 0 }), size = _a[0], setSize = _a[1];
    useEffect(function () {
        if (typeof window === "undefined")
            return;
        var updateSize = function () {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return function () { return window.removeEventListener("resize", updateSize); };
    }, []);
    return size;
}
