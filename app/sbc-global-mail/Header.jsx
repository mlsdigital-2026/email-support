"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          TOP INFORMATION BAR
      ====================================================== */}

      <div className="sg-topbar">
        <div className="container">
          <div className="sg-topbar-inner">

            <div className="sg-topbar-status">
              <span className="sg-status-dot"></span>

              <span>
                Email services are currently operational
              </span>
            </div>

            <div className="sg-topbar-right">

              <span className="sg-topbar-item">
                <i className="bi bi-shield-check"></i>
                Secure &amp; Reliable
              </span>

              <span className="sg-topbar-divider"></span>

              <a
                href="tel:+18000000000"
                className="sg-topbar-phone"
              >
                <i className="bi bi-telephone"></i>
                <span>+1 (800) 000-0000</span>
              </a>

            </div>

          </div>
        </div>
      </div>


      {/* =====================================================
          MAIN HEADER
      ====================================================== */}

      <header className="sg-header">

        <div className="container">

          <div className="sg-header-inner">

            {/* LOGO */}

            <button
              type="button"
              className="sg-brand"
              onClick={() => scrollToSection("hero")}
              aria-label="SBCGlobal Mail home"
            >

              <span className="sg-brand-mark">

                <span className="sg-brand-mark-inner">
                  <i className="bi bi-envelope-fill"></i>
                </span>

              </span>

              <span className="sg-brand-text">

                <strong>SBCGlobal</strong>

                <small>MAIL</small>

              </span>

            </button>


            {/* DESKTOP NAVIGATION */}

            <nav className="sg-desktop-nav">

              <button
                type="button"
                className="sg-nav-link"
                onClick={() => scrollToSection("hero")}
              >
                Sign In
              </button>

              <button
                type="button"
                className="sg-nav-link"
                onClick={() => scrollToSection("quick-help")}
              >
                Quick Help
              </button>

              <button
                type="button"
                className="sg-nav-link"
                onClick={() => scrollToSection("troubleshooting")}
              >
                Troubleshooting
              </button>

              <button
                type="button"
                className="sg-nav-link"
                onClick={() => scrollToSection("requirements")}
              >
                Requirements
              </button>

            </nav>


            {/* DESKTOP ACTIONS */}

            <div className="sg-header-actions">

              <a
                href="tel:+18000000000"
                className="sg-call-button"
              >
                <span className="sg-call-icon">
                  <i className="bi bi-telephone-fill"></i>
                </span>

                <span className="sg-call-content">

                  <small>Need assistance?</small>

                  <strong>Call Now</strong>

                </span>

              </a>

<button
  type="button"
  className="btn btn-primary rounded-pill px-4"
  onClick={() => {
    if (
      typeof window !== "undefined" &&
      window.LiveChatWidget
    ) {
      window.LiveChatWidget.call("maximize");
    }
  }}
>
  <i className="bi bi-chat-dots-fill me-2"></i>
  Live Chat
</button>

            </div>


            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              className={`sg-mobile-toggle ${
                mobileOpen ? "active" : ""
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >

              <span></span>
              <span></span>
              <span></span>

            </button>

          </div>

        </div>


        {/* =================================================
            MOBILE NAVIGATION
        ================================================== */}

        <div
          className={`sg-mobile-menu ${
            mobileOpen ? "open" : ""
          }`}
        >

          <div className="container">

            <div className="sg-mobile-menu-inner">

              <button
                type="button"
                className="sg-mobile-link"
                onClick={() => scrollToSection("hero")}
              >

                <span className="sg-mobile-link-icon">
                  <i className="bi bi-box-arrow-in-right"></i>
                </span>

                <span>
                  <strong>Sign In</strong>
                  <small>Access your mailbox</small>
                </span>

                <i className="bi bi-chevron-right"></i>

              </button>


              <button
                type="button"
                className="sg-mobile-link"
                onClick={() => scrollToSection("quick-help")}
              >

                <span className="sg-mobile-link-icon">
                  <i className="bi bi-lightning-charge-fill"></i>
                </span>

                <span>
                  <strong>Quick Help</strong>
                  <small>Find quick solutions</small>
                </span>

                <i className="bi bi-chevron-right"></i>

              </button>


              <button
                type="button"
                className="sg-mobile-link"
                onClick={() => scrollToSection("troubleshooting")}
              >

                <span className="sg-mobile-link-icon">
                  <i className="bi bi-tools"></i>
                </span>

                <span>
                  <strong>Troubleshooting</strong>
                  <small>Resolve common issues</small>
                </span>

                <i className="bi bi-chevron-right"></i>

              </button>


              <button
                type="button"
                className="sg-mobile-link"
                onClick={() => scrollToSection("requirements")}
              >

                <span className="sg-mobile-link-icon">
                  <i className="bi bi-check2-circle"></i>
                </span>

                <span>
                  <strong>Requirements</strong>
                  <small>Check before signing in</small>
                </span>

                <i className="bi bi-chevron-right"></i>

              </button>

              <div className="sg-mobile-actions">

                <a
                  href="tel:+18000000000"
                  className="sg-mobile-call"
                >

                  <i className="bi bi-telephone-fill"></i>

                  <span>
                    <small>Call us</small>
                    <strong>+1 (800) 000-0000</strong>
                  </span>

                </a>


                <button
                  type="button"
                  className="sg-mobile-chat"
                  onClick={() => {
                    setMobileOpen(false);

                    window.dispatchEvent(
                      new CustomEvent("open-live-chat")
                    );
                  }}
                >

                  <i className="bi bi-chat-dots-fill"></i>

                  Live Chat

                </button>

              </div>

            </div>

          </div>

        </div>

                {/* =================================================
            HEADER MICRO DETAILS
        ================================================== */}

        <div className="sg-header-bottom-line">
          <div className="sg-header-glow"></div>
        </div>

      </header>

     
    </>
  );
}