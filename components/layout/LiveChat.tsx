"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __lc: {
      license?: number;
      integration_name?: string;
      product_name?: string;
      asyncInit?: boolean;
    };

    LiveChatWidget?: {
      call: (method: string) => void;
      on?: (...args: unknown[]) => void;
      off?: (...args: unknown[]) => void;
      once?: (...args: unknown[]) => void;
      get?: (...args: unknown[]) => void;
    };
  }
}

export default function LiveChat() {
  useEffect(() => {
    window.__lc = window.__lc || {};

    window.__lc.license = 19881537;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";

    (function (n: Window, t: Document, c: typeof Array.prototype.slice) {
      function i(args: unknown[]) {
        return e._h ? e._h.apply(null, args) : e._q.push(args);
      }

      const e: any = {
        _q: [],
        _h: null,
        _v: "2.0",
        on() {
          i(["on", c.call(arguments)]);
        },
        once() {
          i(["once", c.call(arguments)]);
        },
        off() {
          i(["off", c.call(arguments)]);
        },
        get() {
          if (!e._h) {
            throw new Error(
              "[LiveChatWidget] You can't use getters before load."
            );
          }
          return i(["get", c.call(arguments)]);
        },
        call() {
          i(["call", c.call(arguments)]);
        },
        init() {
          const s = t.createElement("script");
          s.async = true;
          s.type = "text/javascript";
          s.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(s);
        },
      };

      if (!n.__lc.asyncInit) {
        e.init();
      }

      n.LiveChatWidget = n.LiveChatWidget || e;
    })(window, document, [].slice);

    return () => {
      // Do nothing - keep LiveChat loaded for the whole app
    };
  }, []);

  return null;
}