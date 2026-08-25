"use client";

import { useState } from "react";

export default function QuickHelp() {
  const [activeItem, setActiveItem] = useState(null);

  const helpItems = [
    {
      id: "account-recovery",
      icon: "bi-person-lock",
      title: "Account Recovery",
      description:
        "Get guidance for recovering access to your SBCGlobal mail account.",
    },
    {
      id: "login-help",
      icon: "bi-box-arrow-in-right",
      title: "Login Help",
      description:
        "Learn what to check when you are unable to sign in to your mailbox.",
    },
    {
      id: "password-help",
      icon: "bi-key",
      title: "Password Assistance",
      description:
        "Find helpful information for common password and account access issues.",
    },
    {
      id: "email-access",
      icon: "bi-envelope-check",
      title: "Email Access",
      description:
        "Get assistance with accessing your inbox and common mail access problems.",
    },
  ];

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const handleGetStarted = (id) => {
    if (id === "account-recovery") {
      window.dispatchEvent(
        new CustomEvent("open-signin-modal")
      );
      return;
    }

    window.dispatchEvent(
      new CustomEvent("open-signin-modal")
    );
  };

  return (
    <section
      id="quick-help"
      className="sg-quick-help"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="sg-quick-bg-orb sg-quick-bg-one"></div>

      <div className="sg-quick-bg-orb sg-quick-bg-two"></div>


      <div className="container position-relative">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="sg-section-heading">

          <span className="sg-section-eyebrow">
            <span></span>
            QUICK HELP
          </span>

          <h2>
            Get help with your
            <span> email account.</span>
          </h2>

          <p>
            Explore quick guidance for account recovery,
            login access, passwords, and other common
            email-related issues.
          </p>

        </div>


        {/* =====================================================
            HELP CARDS
        ====================================================== */}

        <div className="row g-4">

          {helpItems.map((item, index) => (

            <div
              className="col-md-6"
              key={item.id}
            >

              <div
                className={`sg-help-card ${
                  activeItem === item.id
                    ? "sg-help-card-active"
                    : ""
                }`}
              >

                {/* Card Top */}

                <button
                  type="button"
                  className="sg-help-card-button"
                  onClick={() =>
                    toggleItem(item.id)
                  }
                  aria-expanded={
                    activeItem === item.id
                  }
                >

                  <span className="sg-help-icon">
                    <i
                      className={`bi ${item.icon}`}
                    ></i>
                  </span>


                  <span className="sg-help-card-content">

                    <small>
                      0{index + 1}
                    </small>

                    <strong>
                      {item.title}
                    </strong>

                  </span>


                  <span className="sg-help-arrow">

                    <i
                      className={
                        activeItem === item.id
                          ? "bi bi-dash"
                          : "bi bi-plus"
                      }
                    ></i>

                  </span>

                </button>


                {/* Expanded Content */}

                <div
                  className={`sg-help-card-details ${
                    activeItem === item.id
                      ? "sg-help-details-open"
                      : ""
                  }`}
                >

                  <p>
                    {item.description}
                  </p>


                  <button
                    type="button"
                    className="sg-help-action"
                    onClick={() =>
                      handleGetStarted(item.id)
                    }
                  >

                    {item.id === "account-recovery"
                      ? "Start Recovery"
                      : "Get Started"}

                    <i className="bi bi-arrow-up-right"></i>

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}