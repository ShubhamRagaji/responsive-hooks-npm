import { useEffect, useState } from "react";

export function useOrientation() {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "portrait"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const update = () => {
      setOrientation(
        window.innerWidth > window.innerHeight ? "landscape" : "portrait"
      );
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return orientation;
}
