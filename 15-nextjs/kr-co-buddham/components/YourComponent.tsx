"use client";

import { useEffect, useState } from "react";
import ClientOnly from "./ClientOnly";

export default function YourComponent() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <ClientOnly>
      <div>Window width: {windowWidth}px</div>
    </ClientOnly>
  );
}
