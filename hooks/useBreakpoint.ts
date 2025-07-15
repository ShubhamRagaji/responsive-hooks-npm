import { useWindowSize } from "./useWindowSize";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export function useBreakpoint(): Breakpoint {
  const { width } = useWindowSize();

  if (width < 640) return "xs";
  if (width < 768) return "sm";
  if (width < 1024) return "md";
  if (width < 1280) return "lg";
  if (width < 1536) return "xl";
  return "2xl";
}
