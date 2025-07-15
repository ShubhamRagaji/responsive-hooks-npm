import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Ensure window is available (client-side only)
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    const handleChange = () => setMatches(media.matches);

    handleChange(); // Set initial state

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
