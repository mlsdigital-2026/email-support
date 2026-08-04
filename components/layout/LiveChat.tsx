"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __lc: {
      license?: number;
      integration_name?: string;
      product_name?: string;
    };
  }
}

export default function LiveChat() {
  useEffect(() => {
    window.__lc = window.__lc || {};

    window.__lc.license = 19881537;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.livechatinc.com/tracking.js";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}