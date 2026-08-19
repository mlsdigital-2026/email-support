'use client';

import React from 'react';

export default function AolMailPage() {
  return (
    <iframe
      src="/aol-mail/index.html"
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
      title="AOL Mail Login & Support Portal"
    />
  );
}
