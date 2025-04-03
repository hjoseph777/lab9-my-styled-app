"use client";

import React, { useEffect } from "react";
import { StyledComponentsRegistry } from "../../lib/registry";

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // More robust GitHub Pages routing
  useEffect(() => {
    const handleGitHubPagesRouting = () => {
      const repo = 'lab9-my-styled-app';
      const isGitHubPages = window.location.hostname.includes('github.io');
      
      if (isGitHubPages) {
        // Handle GitHub Pages path rewriting
        const path = window.location.pathname;
        if (path !== `/${repo}` && path.startsWith(`/${repo}`)) {
          const cleanPath = path.substring(`/${repo}`.length) || '/';
          if (path !== cleanPath) {
            window.history.replaceState({}, document.title, cleanPath);
          }
        }
        
        // Handle GitHub Pages redirect from 404.html
        const search = window.location.search;
        if (search && search.includes('?/')) {
          const redirectedPath = search.substring(2);
          window.history.replaceState({}, document.title, redirectedPath || '/');
        }
      }
    };

    // Apply routing fix after a short delay to ensure DOM is fully loaded
    setTimeout(handleGitHubPagesRouting, 100);
  }, []);

  return (
    <>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </>
  );
}
