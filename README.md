# React Screen Responsive Hooks

A simple React hooks library for handling window size, breakpoints, orientation, and media queries in responsive layouts.

---

## ✅ Installation

```bash
npm install react-screen-responsive-hooks
```

## ✅ Usage Example

```js
import {
  useBreakpoint,
  useIsMobile,
  useMediaQuery,
  useOrientation,
  useWindowSize
} from "react-screen-responsive-hooks";

function App() {
  const breakpoint = useBreakpoint();
  const isMobile = useIsMobile();
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const orientation = useOrientation();
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Breakpoint: {breakpoint}</p>
      <p>Is Mobile: {isMobile ? "Yes" : "No"}</p>
      <p>Large Screen: {isLargeScreen ? "Yes" : "No"}</p>
      <p>Orientation: {orientation}</p>
      <p>Window Size: {width} x {height}</p>
    </div>
  );
}

export default App;
```