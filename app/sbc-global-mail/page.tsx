'use client';

import React from 'react';

export default function Page() {
  return (
    <iframe
      src="/sbc-global-mail/index.html"
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        background: '#ffffff'
      }}
      title="SBCGlobal Mail Login & Support Portal"
    />
  );
}