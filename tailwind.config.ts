import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Habibit Brand Colors
        'desert': {
          50: '#FDF8F3',
          100: '#FAF0E8',
          200: '#F5E1D3',
          300: '#F0D2BE',
          400: '#E8C4A9',
          500: '#DFB394',
          600: '#D4A47F',
          700: '#C8946A',
          800: '#BC8455',
          900: '#B07440',
        },
        'turquoise': {
          50: '#F0FDFF',
          100: '#E1FAFE',
          200: '#C3F5FD',
          300: '#A4F0FC',
          400: '#85EBFB',
          500: '#32C6FC', // Main turquoise
          600: '#1DB4E8',
          700: '#0EA5DB',
          800: '#0891B2',
          900: '#0C7A94',
        },
        'sand': '#F7F3F0', // Soft desert beige background
        'arabic-gold': '#D4AF37',
        'charcoal': '#2C2C2C',
        // Primary Brand Orange - Global variable for warmth and trust
        'brand-orange': {
          50: '#FFF8F1',
          100: '#FEECDC',
          200: '#FCD9BD',
          300: '#FDBA8C',
          400: '#FF8A4C',
          500: '#FF6B35', // Main brand orange
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        // Desert & Islamic Color Palette
        'desert-rose': {
          50: '#FDF4F3',
          100: '#FCE7E6',
          200: '#F9D2CF',
          300: '#F4B4AF',
          400: '#EC8B82',
          500: '#E06B5D', // Main desert rose
          600: '#CD4F3F',
          700: '#AB3F32',
          800: '#8D362E',
          900: '#75312C',
        },
        'islamic-gold': {
          50: '#FFFDF0',
          100: '#FFFADC',
          200: '#FFF4B8',
          300: '#FFEC85',
          400: '#FFE047',
          500: '#FFD700', // Pure Islamic gold
          600: '#D4AF37', // Arabic gold
          700: '#B8941F',
          800: '#9C7A0A',
          900: '#7D6608',
        },
        'sahara': {
          50: '#FEFCF0',
          100: '#FDF8E1',
          200: '#FCF0C3',
          300: '#F9E79F',
          400: '#F6DC7A',
          500: '#F3D155', // Main sahara
          600: '#E6C547',
          700: '#D9B73A',
          800: '#CCA82C',
          900: '#B8951F',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "dune": {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "dune": "dune 8s ease-in-out infinite",
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'arabic': ['Amiri', 'Scheherazade New', 'Noto Sans Arabic', 'system-ui', 'sans-serif'],
        'calligraphy': ['Amiri Quran', 'Scheherazade New', 'Noto Nastaliq Urdu', 'serif'],
        'cairo': ['Cairo', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config; 