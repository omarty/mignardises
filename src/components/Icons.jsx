const base = { width: 20, height: 20, viewBox: '0 0 24 24', 'aria-hidden': true }

export const WhatsApp = (p) => (
  <svg {...base} {...p} fill="currentColor">
    <path d="M12.04 2C6.57 2 2.13 6.43 2.13 11.9c0 1.75.46 3.46 1.33 4.96L2 22l5.27-1.38a9.9 9.9 0 0 0 4.77 1.21h.01c5.46 0 9.9-4.43 9.9-9.9 0-2.65-1.03-5.13-2.9-7A9.83 9.83 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.17.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22a7.45 7.45 0 0 1-1.37-1.71c-.15-.25-.02-.38.1-.5.12-.12.26-.3.38-.45.13-.15.17-.25.25-.42.09-.16.05-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47a.9.9 0 0 0-.66.3c-.22.25-.86.85-.86 2.07 0 1.21.88 2.39 1 2.55.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.6.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.19.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.3Z" />
  </svg>
)

export const Phone = (p) => (
  <svg {...base} {...p} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
)

export const Ghost = (p) => (
  <svg {...base} {...p} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M12 3c3.3 0 5.5 2.5 5.5 5.6v2.1c.6.3 1.3.2 1.9-.1.5.7-.4 1.3-1.6 1.8.3 1.6 1.9 3 3.7 3.5-.2.8-1.4 1-2.6 1.2-.2.5-.2 1.1-.5 1.4-.9 0-1.9-.4-3 .1-1 .5-1.9 1.4-3.4 1.4s-2.4-.9-3.4-1.4c-1.1-.5-2.1-.1-3-.1-.3-.3-.3-.9-.5-1.4-1.2-.2-2.4-.4-2.6-1.2 1.8-.5 3.4-1.9 3.7-3.5-1.2-.5-2.1-1.1-1.6-1.8.6.3 1.3.4 1.9.1V8.6C6.5 5.5 8.7 3 12 3Z" />
  </svg>
)

export const Pin = (p) => (
  <svg {...base} {...p} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const Clock = (p) => (
  <svg {...base} {...p} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const Heart = (p) => (
  <svg {...base} {...p} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" />
  </svg>
)

export const Sparkle = (p) => (
  <svg {...base} {...p} fill="currentColor">
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
  </svg>
)
