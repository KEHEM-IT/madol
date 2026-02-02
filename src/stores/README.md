# useTheme Composable

A Vue 3 composable for managing light/dark theme switching in your ERP application.

## Features

✅ **Light & Dark Theme Support** - Toggle between light and dark modes  
✅ **Persistent Storage** - Saves theme preference to localStorage  
✅ **Cross-Tab Sync** - Theme changes sync across browser tabs  
✅ **System Preference Detection** - Automatically detects OS theme preference  
✅ **System Theme Watching** - Updates when OS theme changes  
✅ **SSR Safe** - Works with server-side rendering  
✅ **TypeScript Support** - Full type safety  

## Installation

Place the `useTheme.ts` file in your `composables/` directory.

```
composables/
└── useTheme.ts
```

## Basic Usage

### In a Vue Component

```vue
<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

const { theme, isDark, toggleTheme } = useTheme();
</script>

<template>
  <div>
    <p>Current theme: {{ theme }}</p>
    <button @click="toggleTheme">
      Toggle Theme ({{ isDark ? 'Dark' : 'Light' }})
    </button>
  </div>
</template>
```

### Theme Toggle Button Component

```vue
<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle"
    :class="{ dark: isDark }"
    aria-label="Toggle theme"
  >
    <span v-if="isDark">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  width: 60px;
  height: 32px;
  background-color: var(--bg-hover);
  border-radius: var(--radius-full);
  position: relative;
  cursor: pointer;
  transition: all var(--transition-base);
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
}
</style>
```

## API Reference

### Returned Properties

#### `theme`
- Type: `Ref<'light' | 'dark'>`
- The current active theme

#### `isDark`
- Type: `Ref<boolean>`
- Boolean indicating if dark theme is active

### Returned Methods

#### `setTheme(theme: 'light' | 'dark')`
Set a specific theme directly.

```typescript
const { setTheme } = useTheme();

// Set to dark
setTheme('dark');

// Set to light
setTheme('light');
```

#### `toggleTheme()`
Toggle between light and dark themes.

```typescript
const { toggleTheme } = useTheme();

toggleTheme(); // Switches theme
```

#### `setLightTheme()`
Convenience method to set light theme.

```typescript
const { setLightTheme } = useTheme();

setLightTheme();
```

#### `setDarkTheme()`
Convenience method to set dark theme.

```typescript
const { setDarkTheme } = useTheme();

setDarkTheme();
```

#### `useSystemTheme()`
Set theme based on system preference.

```typescript
const { useSystemTheme } = useTheme();

useSystemTheme(); // Uses OS preference
```

#### `getSystemTheme()`
Get the current system theme preference without applying it.

```typescript
const { getSystemTheme } = useTheme();

const systemTheme = getSystemTheme(); // Returns 'light' or 'dark'
```

## Advanced Usage

### Theme Selector Component

```vue
<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

const { theme, setLightTheme, setDarkTheme, useSystemTheme } = useTheme();

const options = [
  { value: 'light', label: 'Light', icon: '☀️' },
  { value: 'dark', label: 'Dark', icon: '🌙' },
  { value: 'system', label: 'System', icon: '💻' },
];

const handleThemeChange = (value: string) => {
  if (value === 'light') setLightTheme();
  else if (value === 'dark') setDarkTheme();
  else if (value === 'system') useSystemTheme();
};
</script>

<template>
  <div class="theme-selector">
    <label class="label">Theme Preference</label>
    <div class="button-group">
      <button
        v-for="option in options"
        :key="option.value"
        @click="handleThemeChange(option.value)"
        :class="{ active: theme === option.value }"
        class="btn btn-ghost-primary"
      >
        <span>{{ option.icon }}</span>
        <span>{{ option.label }}</span>
      </button>
    </div>
  </div>
</template>
```

### Settings Page Integration

```vue
<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

const { theme, isDark, toggleTheme, useSystemTheme } = useTheme();
</script>

<template>
  <div class="settings-section">
    <h3>Appearance</h3>
    
    <div class="form-group">
      <label class="label">Theme Mode</label>
      <div class="toggle">
        <input 
          type="checkbox" 
          :checked="isDark" 
          @change="toggleTheme"
        />
        <span class="toggle-label">
          {{ isDark ? 'Dark Mode' : 'Light Mode' }}
        </span>
      </div>
    </div>

    <button @click="useSystemTheme" class="btn btn-outline-primary">
      Use System Preference
    </button>
  </div>
</template>
```

### Header Component with Theme Toggle

```vue
<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <header class="header">
    <div class="header-left">
      <h1>Savidoor ERP</h1>
    </div>
    
    <div class="header-right">
      <button 
        @click="toggleTheme" 
        class="btn btn-icon-only btn-ghost-primary"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <svg v-if="isDark" class="btn-icon" fill="currentColor" viewBox="0 0 20 20">
          <!-- Moon icon -->
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg v-else class="btn-icon" fill="currentColor" viewBox="0 0 20 20">
          <!-- Sun icon -->
          <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </header>
</template>
```

## How It Works

### 1. **Initial Load**
- Checks localStorage for saved preference
- Falls back to system preference if no saved preference
- Applies theme to DOM

### 2. **Theme Application**
- Sets `data-theme="dark"` attribute on `<body>` for dark mode
- Removes attribute for light mode
- CSS custom properties automatically update

### 3. **Persistence**
- Saves preference to localStorage with key `erp-theme-preference`
- Persists across sessions and page reloads

### 4. **Cross-Tab Sync**
- Listens to `storage` events
- Automatically syncs theme when changed in another tab

### 5. **System Theme Watching**
- Monitors OS theme preference changes
- Only auto-updates if user hasn't manually set preference

## localStorage Key

The composable uses the key: `erp-theme-preference`

To change this, modify the `STORAGE_KEY` constant:

```typescript
const STORAGE_KEY = 'your-custom-key';
```

## SSR Compatibility

The composable is SSR-safe and checks for `window` and `document` availability before accessing browser APIs.

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Supports `prefers-color-scheme` media query
- ✅ Fallback for older browsers

## TypeScript

Full TypeScript support with exported types:

```typescript
import type { Theme, UseThemeReturn } from '@/composables/useTheme';

const { theme, isDark, toggleTheme }: UseThemeReturn = useTheme();
```

## Testing

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { useTheme } from '@/composables/useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with light theme by default', () => {
    const { theme } = useTheme();
    expect(theme.value).toBe('light');
  });

  it('should toggle theme', () => {
    const { theme, toggleTheme } = useTheme();
    expect(theme.value).toBe('light');
    
    toggleTheme();
    expect(theme.value).toBe('dark');
    
    toggleTheme();
    expect(theme.value).toBe('light');
  });
});
```

## Tips

1. **Use in App.vue**: Initialize theme early in your app lifecycle
2. **Combine with Vuex/Pinia**: For global state management if needed
3. **Add Transition**: Add CSS transitions for smooth theme changes
4. **Respect User Choice**: Don't force a theme on users
5. **Test Both Themes**: Always test your UI in both light and dark modes

---

**Built for Savidoor ERP System** 🚀
