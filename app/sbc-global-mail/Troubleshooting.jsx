"use client";

import { useState } from "react";

export default function Troubleshooting() {
  const [activeError, setActiveError] = useState(null);

  const troubleshootingItems = [
    {
      id: "invalid-password",
      number: "01",
      icon: "bi-key-fill",
      title: "Incorrect Password",
      description:
        "If your password is not being accepted, check that it is entered correctly and review the available account recovery options.",
      checks: [
        "Verify the password is entered correctly.",
        "Check that Caps Lock is not enabled.",
        "Use the account recovery option if access remains unavailable.",
      ],
    },
    {
      id: "login-page",
      number: "02",
      icon: "bi-window-stack",
      title: "Login Page Not Working",
      description:
        "If the sign-in page does not load correctly or behaves unexpectedly, a few basic browser checks may help.",
      checks: [
        "Refresh the sign-in page.",
        "Check your internet connection.",
        "Try opening the page in another browser window.",
      ],
    },
    {
      id: "account-access",
      number: "03",
      icon: "bi-person-exclamation",
      title: "Unable to Access Account",
      description:
        "If you cannot access your mailbox, review the account recovery and sign-in guidance before continuing.",
      checks: [
        "Confirm the email address is correct.",
        "Review your account access information.",
        "Use the available recovery guidance.",
      ],
    },
    {
      id: "session-error",
      number: "04",
      icon: "bi-arrow-repeat",
      title: "Repeated Sign-In Errors",
      description:
        "Repeated login errors can occur when account information, browser sessions, or connection conditions need attention.",
      checks: [
        "Close the current browser session.",
        "Open a fresh sign-in session.",
        "Check your account information before trying again.",
      ],
    },
  ];

  const toggleError = (id) => {
    setActiveError(
      activeError === id ? null : id
    );
  };

  const goToLogin = () => {
    document
      .getElementById("hero")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

    setTimeout(() => {
      document
        .querySelector(".sg-login-card")
        ?.classList.add("sg-login-card-focus");

      setTimeout(() => {
        document
          .querySelector(".sg-login-card")
          ?.classList.remove("sg-login-card-focus");
      }, 1400);
    }, 500);
  };

  return (
    <section
      id="troubleshooting"
      className="sg-troubleshooting"
    >

      <div className="sg-troubleshooting-glow"></div>

      <div className="container position-relative">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="sg-troubleshooting-header">

          <div className="sg-troubleshooting-header-copy">

            <span className="sg-section-eyebrow">

              <span></span>

              TROUBLESHOOTING

            </span>

            <h2 className="sg-troubleshooting-title">

              Troubleshooting Common
              <span> Login Errors</span>

            </h2>

          </div>

          <div className="sg-troubleshooting-header-text">

            <p className="sg-troubleshooting-intro">

              Find simple guidance for some of the
              most common problems that can prevent
              successful email account access.

            </p>

          </div>

        </div>


        {/* =====================================================
            TROUBLESHOOTING LIST
        ====================================================== */}

        <div className="sg-troubleshooting-list">

          {troubleshootingItems.map((item) => {

            const isActive =
              activeError === item.id;

            return (
              <div
                key={item.id}
                className={`sg-troubleshooting-item ${
                  isActive
                    ? "sg-troubleshooting-item-active"
                    : ""
                }`}
              >

                {/* Main Row */}

                <button
                  type="button"
                  className="sg-troubleshooting-row"
                  onClick={() =>
                    toggleError(item.id)
                  }
                  aria-expanded={isActive}
                >

                  <span className="sg-error-number">
                    {item.number}
                  </span>


                  <span className="sg-error-icon">

                    <i
                      className={`bi ${item.icon}`}
                    ></i>

                  </span>


                  <span className="sg-error-title">
                    {item.title}
                  </span>


                  <span className="sg-error-toggle">

                    <i
                      className={
                        isActive
                          ? "bi bi-dash"
                          : "bi bi-plus"
                      }
                    ></i>

                  </span>

                </button>


                {/* Details */}

                <div
                  className={`sg-error-details ${
                    isActive
                      ? "sg-error-details-open"
                      : ""
                  }`}
                >

                  <div className="sg-error-details-inner">

                    <p>
                      {item.description}
                    </p>


                    <div className="sg-error-checks">

                      {item.checks.map(
                        (check, checkIndex) => (

                          <div
                            className="sg-error-check"
                            key={checkIndex}
                          >

                            <i className="bi bi-check2-circle"></i>

                            <span>
                              {check}
                            </span>

                          </div>

                        )
                      )}

                    </div>


                    <button
                      type="button"
                      className="sg-troubleshooting-action"
                      onClick={goToLogin}
                    >

                      <span>
                        Continue to sign in
                      </span>

                      <i className="bi bi-arrow-up-right"></i>

                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}