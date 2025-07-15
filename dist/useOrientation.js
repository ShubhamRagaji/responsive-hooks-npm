import { useEffect, useState } from "react";
export function useOrientation() {
    var _a = useState("portrait"), orientation = _a[0], setOrientation = _a[1];
    useEffect(function () {
        if (typeof window === "undefined")
            return;
        var update = function () {
            setOrientation(window.innerWidth > window.innerHeight ? "landscape" : "portrait");
        };
        update();
        window.addEventListener("resize", update);
        return function () { return window.removeEventListener("resize", update); };
    }, []);
    return orientation;
}
