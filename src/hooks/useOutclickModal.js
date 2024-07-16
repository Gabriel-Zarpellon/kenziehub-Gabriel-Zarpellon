import { useEffect, useRef } from "react";

export function useOutclickModal(callback) {
  let ref = useRef(null);

  useEffect(() => {
    function handleOutclick(event) {
      if (!ref.current?.contains(event.target)) {
        callback();
      }
    }

    window.addEventListener("mousedown", handleOutclick);
    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return ref;
}
