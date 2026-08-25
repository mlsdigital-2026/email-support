"use client";

export default function Requirements() {
  const requirements = [
    {
      icon: "bi-envelope-at",
      number: "01",
      title: "Active Email Address",
      description:
        "Have the email address you want to use for accessing your mailbox available before starting the sign-in process.",
    },
    {
      icon: "bi-key",
      number: "02",
      title: "Account Password",
      description:
        "Keep your current account password ready. Make sure it is entered carefully when prompted.",
    },
    {
      icon: "bi-wifi",
      number: "03",
      title: "Stable Internet Connection",
      description:
        "A reliable internet connection helps the sign-in page and account access process work smoothly.",
    },
    {
      icon: "bi-browser-chrome",
      number: "04",
      title: "Updated Browser",
      description:
        "Use a modern, updated web browser for the best experience when accessing your email account.",
    },
  ];

  const goToLogin = () => {
    document
      .getElementById("hero")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

    setTimeout(() => {
      const card = document.querySelector(".sg-login-card");

      if (!card) return;

      card.classList.add("sg-login-card-focus");

      setTimeout(() => {
        card.classList.remove("sg-login-card-focus");
      }, 1400);
    }, 500);
  };

  return (
    <section
      id="requirements"
      className="sg-requirements"
    >
      <div className="sg-requirements-orb sg-requirements-orb-one"></div>
      <div className="sg-requirements-orb sg-requirements-orb-two"></div>

      <div className="container position-relative">

        {/* Section heading */}

        <div className="sg-section-heading">

          <span className="sg-section-eyebrow">
            <span></span>
            REQUIREMENTS
          </span>

          <h2>
            Requirements Before
            <span> SBCGlobal Mail Login</span>
          </h2>

          <p>
            Have these basic details and resources ready
            before starting your email account sign-in.
          </p>

        </div>


        {/* Requirement cards */}

        <div className="row g-4">

          {requirements.map((item) => (
            <div
              className="col-lg-3 col-md-6"
              key={item.number}
            >
              <div className="sg-requirement-card">

                <div className="sg-requirement-top">

                  <span className="sg-requirement-number">
                    {item.number}
                  </span>

                  <span className="sg-requirement-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <span className="sg-requirement-line"></span>

              </div>
            </div>
          ))}

        </div>


        {/* Bottom CTA */}

        <div className="sg-requirements-cta">

          <div className="sg-requirements-cta-icon">
            <i className="bi bi-shield-check"></i>
          </div>

          <div className="sg-requirements-cta-content">
            <strong>
              Ready to access your account?
            </strong>

            <span>
              Continue to the secure sign-in area.
            </span>
          </div>

          <button
            type="button"
            onClick={goToLogin}
            className="sg-requirements-cta-button"
          >
            Continue to Login
            <i className="bi bi-arrow-up-right"></i>
          </button>

        </div>

      </div>
    </section>
  );
}