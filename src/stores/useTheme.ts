import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

/**
 * Theme types
 */
export type Theme = 'light' | 'dark';

/**
 * Theme Store using Pinia
 * Manages light/dark mode with localStorage persistence
 * Syncs theme across browser tabs
 */
export const useThemeStore = defineStore('theme', () => {
  const STORAGE_KEY = 'erp-theme-preference';
  
  // State
  const theme = ref<Theme>('light');
  
  // Getters
  const isDark = computed(() => theme.value === 'dark');
  const isLight = computed(() => theme.value === 'light');

  /**
   * Get the system's preferred color scheme
   */
  const getSystemTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  /**
   * Get saved theme from localStorage or use system preference
   */
  const getSavedTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    return saved || getSystemTheme();
  };

  /**
   * Apply theme to DOM
   */
  const applyTheme = (newTheme: Theme) => {
    if (typeof document === 'undefined') return;

    if (newTheme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      document.body.removeAttribute('data-theme');
      document.documentElement.classList.remove('dark');
    }
  };

  /**
   * Set the theme
   */
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;
    applyTheme(newTheme);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newTheme);
    }
  };

  /**
   * Toggle between light and dark theme
   */
  const toggleTheme = () => {
    const newTheme: Theme = theme.value === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  /**
   * Set theme to light
   */
  const setLightTheme = () => {
    setTheme('light');
  };

  /**
   * Set theme to dark
   */
  const setDarkTheme = () => {
    setTheme('dark');
  };

  /**
   * Use system preference
   */
  const useSystemTheme = () => {
    const systemTheme = getSystemTheme();
    setTheme(systemTheme);
  };

  /**
   * Initialize theme
   */
  const initTheme = () => {
    const savedTheme = getSavedTheme();
    setTheme(savedTheme);

    // Watch for system theme changes
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        // Only update if user hasn't manually set a preference
        const hasManualPreference = localStorage.getItem(STORAGE_KEY);
        if (!hasManualPreference) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
      }

      // Listen for localStorage changes (cross-tab synchronization)
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === STORAGE_KEY && e.newValue) {
          const newTheme = e.newValue as Theme;
          theme.value = newTheme;
          applyTheme(newTheme);
        }
      };

      window.addEventListener('storage', handleStorageChange);
    }
  };

  // Watch theme changes
  watch(theme, (newTheme) => {
    applyTheme(newTheme);
  });

  return {
    // State
    theme,
    
    // Getters
    isDark,
    isLight,

    // Actions
    setTheme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    useSystemTheme,
    initTheme,
    getSystemTheme,
  };
});
