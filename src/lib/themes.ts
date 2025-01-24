export const themes = {
  modern: {
    name: 'modern',
    colors: {
      // Brand Colors
      brand: {
        primary: '#2563eb',    // Modern Blue
        secondary: '#4f46e5',  // Deep Indigo
        accent: '#06b6d4',     // Vibrant Cyan
      },
      // Background Scales
      background: {
        default: '#ffffff',
        subtle: '#f9fafb',
        muted: '#f3f4f6',
        emphasized: '#e5e7eb',
      },
      // Foreground Scales
      foreground: {
        default: '#111827',
        subtle: '#374151',
        muted: '#6b7280',
        emphasized: '#9ca3af',
      },
      // State Colors
      state: {
        success: '#059669',
        warning: '#d97706',
        error: '#dc2626',
        info: '#2563eb',
      },
      // Special Effects
      effects: {
        glow: 'rgba(37, 99, 235, 0.15)',
        glass: 'rgba(255, 255, 255, 0.8)',
        overlay: 'rgba(0, 0, 0, 0.5)',
      }
    },
    // Spacing & Layout
    spacing: {
      sidebar: '280px',
      header: '64px',
      containerPadding: '24px',
    },
    // Border Radius
    radius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
    },
    // Shadows
    shadows: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      glow: '0 0 15px rgba(37, 99, 235, 0.15)',
    },
  }
}; 