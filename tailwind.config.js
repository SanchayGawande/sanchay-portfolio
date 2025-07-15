/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Enhanced for modern UI
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        
        // Secondary Colors - Modern grays with better contrast
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        
        // Accent Colors - Vibrant purples and magentas
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        
        // Success Colors
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        
        // Warning Colors
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        
        // Error Colors
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        
        // Surface & Background - Enhanced for glassmorphism
        surface: {
          light: '#ffffff',
          'light-hover': '#f8fafc',
          'light-glass': 'rgba(255, 255, 255, 0.8)',
          dark: '#0f172a',
          'dark-hover': '#1e293b',
          'dark-glass': 'rgba(15, 23, 42, 0.8)',
        },
        
        // Dark mode specific - Enhanced contrast and readability
        dark: {
          bg: '#020617',
          surface: '#0f172a',
          card: '#1e293b',
          'card-hover': '#334155',
          border: '#334155',
          'border-light': '#475569',
          text: '#f1f5f9',
          'text-muted': '#94a3b8',
          'text-subtle': '#64748b',
        }
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '10xl': ['10rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      
      boxShadow: {
        // Light mode shadows
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.1)',
        'strong': '0 10px 40px 0 rgba(0, 0, 0, 0.12)',
        'glow': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.3)',
        'glow-green': '0 0 30px rgba(16, 185, 129, 0.3)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.3)',
        
        // Enhanced shadows for depth
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
        '4xl': '0 40px 80px -12px rgba(0, 0, 0, 0.4)',
        '5xl': '0 50px 100px -20px rgba(0, 0, 0, 0.5)',
        
        // Glassmorphism effects
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
        
        // Dark mode shadows
        'dark-soft': '0 2px 15px 0 rgba(0, 0, 0, 0.3)',
        'dark-medium': '0 4px 25px 0 rgba(0, 0, 0, 0.4)',
        'dark-strong': '0 10px 40px 0 rgba(0, 0, 0, 0.5)',
        'dark-glow': '0 0 30px rgba(59, 130, 246, 0.4)',
        
        // Magnetic hover effects
        'magnetic': '0 20px 40px rgba(59, 130, 246, 0.3)',
        'magnetic-purple': '0 20px 40px rgba(168, 85, 247, 0.3)',
      },
      
      animation: {
        // Existing animations
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'magnetic': 'magnetic 0.3s ease-out',
        'tilt': 'tilt 0.3s ease-out',
        
        // New advanced animations
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'rotate-fast': 'rotate 10s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'rubber-band': 'rubberBand 1s ease-in-out',
        'blur-in': 'blurIn 0.6s ease-out',
        'slide-in-bottom': 'slideInBottom 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'zoom-in': 'zoomIn 0.6s ease-out',
        'flip-in': 'flipIn 0.6s ease-out',
        'contact-card-expand': 'contactCardExpand 0.3s ease-out',
        'toast-slide-up': 'toastSlideUp 0.3s ease-out',
        'map-draw': 'mapDraw 2s ease-out',
      },
      
      keyframes: {
        // Existing keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-2px, -2px) scale(1.02)' },
        },
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(3deg)' },
        },
        
        // New advanced keyframes
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        rubberBand: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scaleX(1.25) scaleY(0.75)' },
          '40%': { transform: 'scaleX(0.75) scaleY(1.25)' },
          '50%': { transform: 'scaleX(1.15) scaleY(0.85)' },
          '65%': { transform: 'scaleX(0.95) scaleY(1.05)' },
          '75%': { transform: 'scaleX(1.05) scaleY(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        blurIn: {
          '0%': { filter: 'blur(20px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        flipIn: {
          '0%': { transform: 'rotateY(-90deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0deg)', opacity: '1' },
        },
        contactCardExpand: {
          '0%': { width: '60px', height: '60px', borderRadius: '30px' },
          '100%': { width: '380px', height: '520px', borderRadius: '24px' },
        },
        toastSlideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0', scale: '0.8' },
          '100%': { transform: 'translateY(0)', opacity: '1', scale: '1' },
        },
        mapDraw: {
          '0%': { pathLength: '0', opacity: '0' },
          '100%': { pathLength: '1', opacity: '0.4' },
        },
      },
      
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '192': '48rem',
      },
      
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
        'grid-pattern': `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23e2e8f0' fill-opacity='0.4' fill-rule='evenodd'%3e%3cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3e%3c/g%3e%3c/svg%3e")`,
        'grid-pattern-dark': `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23334155' fill-opacity='0.4' fill-rule='evenodd'%3e%3cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3e%3c/g%3e%3c/svg%3e")`,
        'shimmer': 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.5) 50%, transparent 70%)',
        'shimmer-dark': 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
      },
      
      // 3D perspective for cards
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      
      // Custom utilities
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      
      // Glass morphism backdrop
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      
      // Gradients for modern look
      gradientColorStops: {
        'glass-white': 'rgba(255, 255, 255, 0.25)',
        'glass-dark': 'rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    // Custom plugin for 3D transforms
    function({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-1500': {
          perspective: '1500px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.bg-glass-white': {
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.bg-glass-dark': {
          background: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      });
    },
  ],
}