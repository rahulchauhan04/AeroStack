/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Technology Palette
        primary: '#1e3a8a',     // Deep blue for buttons, headings
        secondary: '#3b82f6',   // Lighter blue for hover effects and accents
        background: '#f0f4ff',  // Soft light blue for background
        accent: '#2563eb',      // Bright blue for CTAs

        // Neutral Colors
        textPrimary: '#0c0c22',  // Dark gray for main text
        textSecondary: '#4b5563', // Lighter gray for secondary text
        borderLight: '#e5e7eb',   // Light gray for borders

        // Alert Colors
        danger: '#ef4444',       // Red for error/danger
        success: '#10b981',      // Green for success messages
        warning: '#f59e0b',      // Yellow for warnings

        // Button Hover Colors
        hoverPrimary: '#1d4ed8',  // Darker blue for button hover
        hoverSecondary: '#60a5fa', // Lighter blue hover effect
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'], // Consistent typography
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)',
        medium: '0 6px 12px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        xl: '1rem',
      },
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [],
}
