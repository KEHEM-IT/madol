import { ref, onMounted, watch } from 'vue';

/**
 * Theme types
 */
export type Theme = 'light' | 'dark';

/**
 * Theme composable for managing light/dark mode
 * Persists theme preference in localStorage
 * Syncs theme across browser tabs
 */
export function useTheme() {
  const STORAGE_KEY = 'erp-theme-preference';
  const theme = ref<Theme>('light');
  const isDark = ref(false);

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
    } else {
      document.body.removeAttribute('data-theme');
    }
  };

  /**
   * Set the theme
   */
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;
    isDark.value = newTheme === 'dark';
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
   * Listen for system theme changes
   */
  const watchSystemTheme = () => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const hasManualPreference = localStorage.getItem(STORAGE_KEY);
      if (!hasManualPreference) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  };

  /**
   * Listen for localStorage changes (cross-tab synchronization)
   */
  const syncThemeAcrossTabs = () => {
    if (typeof window === 'undefined') return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        const newTheme = e.newValue as Theme;
        theme.value = newTheme;
        isDark.value = newTheme === 'dark';
        applyTheme(newTheme);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  };

  /**
   * Initialize theme on mount
   */
  onMounted(() => {
    const savedTheme = getSavedTheme();
    setTheme(savedTheme);

    // Watch for system theme changes
    const unwatchSystem = watchSystemTheme();

    // Sync theme across tabs
    const unwatchStorage = syncThemeAcrossTabs();

    // Cleanup on unmount
    return () => {
      unwatchSystem?.();
      unwatchStorage?.();
    };
  });

  /**
   * Watch theme changes and update isDark
   */
  watch(theme, (newTheme) => {
    isDark.value = newTheme === 'dark';
  });

  return {
    // State
    theme,
    isDark,

    // Actions
    setTheme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    useSystemTheme,

    // Utilities
    getSystemTheme,
  };
}

/**
 * Export type for TypeScript
 */
export type UseThemeReturn = ReturnType<typeof useTheme>;
