import { useLayoutEffect, useState } from "react";
/*Grabbed from here: 
https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react */
/*Used to rerender the page after a resize
 to toggle the use of modals in the project
 section on desktop */
export function useWindowSize() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
