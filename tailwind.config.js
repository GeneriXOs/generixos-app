module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        
        // Primary colors
        "base-color": "#132D46",
        "contrast-color": "##01C38E",
        
        // Darks and Lights colors
        "dark": "#1A1E29",
        "light": "#F7F8FC",

        "deep-black": "#000000",
        "deep-white": "#FFFFFF",
        
        // Shadows colors
        "light-black": "#2C2F3F",
        "light-gray": "#C4C4C4",
        
        // Glassmorphism colors
        "glassmorphism-color": "rgba(255,255,255,0.17)",
        
        // Logo colors and highlights
        "pink-logo": "#D68B96 ",
        "blue-logo": "#85cbf8",
        "vanilla-logo": "#f2f2f2",
        
        // Alerts colors
        "success-alert": "#01C38E ",
        "success-alert-soft": "#01C38E80 ",
        "info-alert": "#66B6FF ",
        "info-alert-soft": "#66B6FF80 ",
        "warning-alert": "#F5A623  ",
        "warning-alert-soft": "#F5A62380 ",
        "danger-alert": "#E57373  ",
        "danger-alert-soft": "#E5737380 ",
        
        // Modal colors 
        "modal-background": "#132d4680",
      },
    },
  },
  plugins: [],
};
