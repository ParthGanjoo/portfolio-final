import React, { useLayoutEffect, useRef } from "react";
import "../styles/blob.css";

export const BlobComponent = () => {
  const blobRef = useRef(null);

  useLayoutEffect(() => {
    const blob = blobRef.current;

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handlePointerMove);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  return (
    <div className="background">
      <div id="blob" ref={blobRef} />
    </div>
  );
};

export default BlobComponent;