'use client'

import React, { useState, useEffect } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Create stylesheet instance
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
  const [isClient, setIsClient] = useState(false)
  
  // Handle client-side detection
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // Handle server-side styles
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
  
  // Fix for GitHub Pages - ensure registry works on both client and server
  if (isClient) {
    return (
      <StyleSheetManager enableVendorPrefixes>
        {children}
      </StyleSheetManager>
    )
  }
  
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance} enableVendorPrefixes>
      {children}
    </StyleSheetManager>
  )
}
