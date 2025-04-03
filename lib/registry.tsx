'use client'

import React, { useState, useEffect } from 'react'
import { StyleSheetManager } from 'styled-components'

// Simplified registry for client-side only rendering on GitHub Pages
export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  
  // Only show content after mounting (client-side)
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // For GitHub Pages, we only need client-side styled-components
  return (
    <>
      {mounted ? (
        <StyleSheetManager enableVendorPrefixes>
          {children}
        </StyleSheetManager>
      ) : (
        <div style={{ visibility: 'hidden' }}>{children}</div>
      )}
    </>
  )
}
