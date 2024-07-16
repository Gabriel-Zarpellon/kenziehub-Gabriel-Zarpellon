import { useEffect, useRef } from "react";

export function useKeydownModal(keyId, callback) {
  let ref = useRef(null);

  useEffect(() => {
    function handleKeydown(event) {
      if (event.key == keyId) {
        callback(ref.current);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return ref;
}
