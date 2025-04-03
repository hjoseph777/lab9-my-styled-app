# My Styled App

Welcome to the My Styled App! This project demonstrates various styling techniques in a Next.js application.
- LAB 9: STYLING IN NEXT.JS [ClICK FOR LINK LIVE PROJECT](https://hjoseph777.github.io/lab9-my-styled-app/)

## Project Structure

The project is organized as follows:

```
my-styled-app/
├── node_modules/
├── src/
│   └── app/            # App directory (Next.js App Router)
│       ├── layout.tsx  # Root layout component
│       ├── page.tsx    # Home page component
│       ├── globals.css # Global CSS styles 
│       └── styled/
│           └── page.tsx # Styled demonstration page
├── styles/
│   └── StyledPage.module.css # CSS module for the styled page
├── components/
│   └── StyledButton.js # Styled button using styled-components
├── public/             # Static assets (e.g., images)
├── .gitignore          # Git ignore rules
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration
├── eslint.config.mjs   # ESLint configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Key Files

Here are the main files used in this application:

- [src/app/layout.tsx](src/app/layout.tsx) - Root layout with global styles
- [src/app/page.tsx](src/app/page.tsx) - Home page with basic navigation
- [src/app/styled/page.tsx](src/app/styled/page.tsx) - Main showcase page for different styling methods
- [src/app/globals.css](src/app/globals.css) - Global styles with Tailwind directives
- [styles/StyledPage.module.css](styles/StyledPage.module.css) - CSS Module for modular styling
- [components/StyledButton.js](components/StyledButton.js) - Reusable styled button component using styled-components




