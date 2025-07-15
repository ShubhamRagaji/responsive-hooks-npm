import { useEffect, useState } from "react";
export function useMediaQuery(query) {
    var _a = useState(false), matches = _a[0], setMatches = _a[1];
    useEffect(function () {
        // Ensure window is available (client-side only)
        if (typeof window === "undefined")
            return;
        var media = window.matchMedia(query);
        var handleChange = function () { return setMatches(media.matches); };
        handleChange(); // Set initial state
        media.addEventListener("change", handleChange);
        return function () { return media.removeEventListener("change", handleChange); };
    }, [query]);
    return matches;
}
