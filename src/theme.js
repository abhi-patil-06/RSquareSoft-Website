// theme.js
export const theme = {
  fonts: {
    base: "'Roboto', sans-serif",
    weights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      title: '2rem',        // 48px
      heading: '1.4rem',      // 32px
      subheading: '1.2rem', // 24px
      description: '1rem',  // 16px
      button: '1rem',       // 16px
    },
    lineHeights: {
      title: 1.2,
      heading: 1.3,
      subheading: 1.4,
      description: 1.6,
      button: 1.4,
    },
  },

  colors: {
    primary: '#0073e6',
    secondary: '#005bb5',
    textPrimary: '#333333',
    textSecondary: '#666666',
    background: '#F3F4F6',
    buttonBackground: '#0073e6',
    buttonHoverBackground: '#005bb5',
    buttonText: '#ffffff',
  },

  spacing: {
    basePadding: '1rem',
    buttonPadding: '0.75rem 1.5rem',
    sectionMargin: '2rem 0',
  },
};



export const darkTheme = {
  fonts: lightTheme.fonts, // keep same fonts

  colors: {
    primary: '#ff7f32', // orange shade
    secondary: '#cc5200',
    textPrimary: '#f5f5f5',
    textSecondary: '#cccccc',
    background: '#121212', // dark background
    buttonBackground: '#ff7f32',
    buttonHoverBackground: '#e65c00',
    buttonText: '#ffffff',
  },

  spacing: lightTheme.spacing,
};





















// // src/theme.js

// const brightTheme = {
//   palette: {
//     mode: 'light',
//     background: {
//       default: '#f8fafc', // light gray
//       box: '#ffffff',     // white
//     },
//     primary: {
//       main: '#2563eb',    // bluish
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       main: '#3b82f6',    // lighter blue
//     },
//     accent: {
//       main: '#1e293b',    // navy blue
//     },
//     border: '#e5e7eb',    // light border
//     button: {
//       main: '#2563eb',
//       hover: '#1e40af',
//       text: '#ffffff',
//     },
//     title: '#1e293b',
//     semiTitle: '#2563eb',
//     text: '#334155',
//     hoverText: '#1e40af',
//   },
//   typography: {
//     fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
//     fontSize: 16,
//     title: {
//       fontSize: '2.25rem',      // 36px
//       fontWeight: 700,
//     },
//     semiTitle: {
//       fontSize: '1.5rem',       // 24px
//       fontWeight: 600,
//     },
//     text: {
//       fontSize: '1rem',         // 16px
//       fontWeight: 400,
//     },
//   },
//   shape: {
//     borderRadius: 20,           // px, for boxes
//     buttonRadius: 15,            // px, for buttons
//   },
// };

// const darkTheme = {
//   palette: {
//     mode: 'dark',
//     background: {
//       default: '#000000',    // black
//       box: '#18181b',        // very dark gray
//     },
//     primary: {
//       main: '#f77123',       // orange
//       contrastText: '#000000',
//     },
//     secondary: {
//       main: '#fbbf24',       // amber
//     },
//     accent: {
//       main: '#f77123',       // orange accent
//     },
//     border: '#27272a',       // dark border
//     button: {
//       main: '#f77123',
//       hover: '#ff922b',
//       text: '#000000',
//     },
//     title: '#f77123',
//     semiTitle: '#fbbf24',
//     text: '#f3f4f6',
//     hoverText: '#ff922b',
//   },
//   typography: {
//     fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
//     fontSize: 16,
//     title: {
//       fontSize: '2.25rem',      // 36px
//       fontWeight: 700,
//     },
//     semiTitle: {
//       fontSize: '1.5rem',       // 24px
//       fontWeight: 600,
//     },
//     text: {
//       fontSize: '1rem',         // 16px
//       fontWeight: 400,
//     },
//   },
//   shape: {
//     borderRadius: 16,           // px, for boxes
//     buttonRadius: 8,            // px, for buttons
//   },
// };

// export { brightTheme, darkTheme };
