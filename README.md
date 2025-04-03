# My Styled App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

The project is organized as follows:

```
my-styled-app/
├── node_modules/
├── pages/
│   ├── _app.js          # Custom App component
│   ├── index.js         # Home page
│   └── styled.js        # Styled page
├── styles/
│   ├── globals.css      # Global CSS styles
│   └── StyledPage.module.css # CSS module for the styled page
├── components/
│   └── StyledButton.js  # Reusable styled button component
├── public/              # Static assets (e.g., images)
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
├── eslint.config.mjs    # ESLint configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Key Files

Here are the main files used in this application:

- [pages/_app.js](/pages/_app.js) - Custom App component that wraps all pages
- [pages/index.js](/pages/index.js) - Home page with basic navigation
- [pages/styled.js](/pages/styled.js) - Main showcase page for different styling methods
- [styles/globals.css](/styles/globals.css) - Global styles applied throughout the application
- [styles/StyledPage.module.css](/styles/StyledPage.module.css) - CSS Module for modular styling
- [components/StyledButton.js](/components/StyledButton.js) - Reusable styled button component using styled-components

## Implementation Details

This project demonstrates different styling methods in React and Next.js:

### 1. Initial State and Components Setup
- Setup initial state in `styled.js` for managing dynamic styling
- Organized component structure with proper separation of concerns
- Implemented responsive design principles for various screen sizes

### 2. Header Inline Styles Implementation
- Applied React inline styles to header elements for direct styling
- Used dynamic inline styles that change based on application state
- Demonstrated style object creation and application to JSX elements

### 3. CSS Modules for Button and Container
- Created modular styles in `StyledPage.module.css` 
- Implemented button styling using CSS Modules to avoid style leaking
- Applied container styles with responsive design considerations
- Demonstrated class composition and conditional class application

### 4. Styled-Components with Dynamic Styling
- Implemented styled-components in `StyledButton.js` for component-level styling
- Created dynamic styling that responds to props and state changes
- Added theme-based styling with styled-components ThemeProvider
- Demonstrated extending styled components and global style application

## UI Enhancements

The application includes modern UI design elements:

- **Gradient Backgrounds**: Subtle gradient backgrounds enhance visual appeal
- **Card Elevation**: Section elements have card-like elevation with shadows
- **Spacing & Layout**: Increased spacing between elements and grid layout for better organization
- **Animations**: Subtle fade-in and slide-up animations when components mount
- **Icons**: Section titles include icons for visual hierarchy
- **Color Scheme**: Implemented a complementary color scheme throughout the app
- **Border Radius**: Modern rounded corners on all interactive elements
- **Hover Effects**: Interactive hover states with subtle animations

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GitHub Pages Deployment

This project is specifically configured to work with GitHub Pages:

### Deployment Process

1. The project uses a special setup to handle GitHub Pages' limitations:
   - Client-side routing with custom 404.html redirect
   - Asset prefixing for proper path resolution
   - Base path configuration for repository subpath

2. To deploy the project:
   ```bash
   npm run deploy

