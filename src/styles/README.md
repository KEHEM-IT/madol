# ERP SCSS Structure

A comprehensive SCSS framework for building modern ERP systems with full theme support (Light/Dark mode) using HSLA color system.

## 📁 File Structure

```
scss/
├── _colors.scss       # HSLA color definitions for light and dark themes
├── _theme.scss        # Theme variables and CSS custom properties
├── _utilities.scss    # Utility classes and helpers
├── _ui.scss          # UI components (cards, tables, badges, etc.)
├── _forms.scss       # Form elements and inputs
├── _buttons.scss     # Button styles and variations
└── main.scss         # Main entry point and ERP-specific components
```

## 🎨 Color System

The framework uses **HSLA (Hue, Saturation, Lightness, Alpha)** color system for:
- Easy theme switching
- Consistent color variations
- Better accessibility
- Semantic color names

### Color Categories:
- **Primary**: Brand colors
- **Secondary**: Supporting colors
- **Semantic**: Success, Warning, Danger, Info
- **Neutral**: Backgrounds, borders, text

## 🌓 Theme Support

### Light Theme (Default)
```html
<body>
  <!-- Light theme active -->
</body>
```

### Dark Theme
```html
<body data-theme="dark">
  <!-- Dark theme active -->
</body>
```

Toggle theme with JavaScript:
```javascript
document.body.setAttribute('data-theme', 'dark');
// or
document.body.removeAttribute('data-theme'); // Switch to light
```

## 📦 Components Included

### UI Components (`_ui.scss`)
- Cards
- Tables
- Badges & Tags
- Alerts
- Modals
- Dropdowns
- Tabs
- Pagination
- Breadcrumbs
- Tooltips

### Form Elements (`_forms.scss`)
- Input fields
- Textareas
- Select dropdowns
- Checkboxes
- Radio buttons
- Toggle switches
- File inputs
- Range sliders
- Form groups & layouts

### Buttons (`_buttons.scss`)
- Primary, Secondary, Success, Warning, Danger, Info
- Outline variants
- Ghost variants
- Sizes: xs, sm, base, lg, xl
- Button groups
- Icon buttons
- Floating action buttons
- Loading states

### ERP-Specific (`main.scss`)
- Sidebar navigation
- Header/Top bar
- Main content area
- Page headers
- Stats cards
- Data grids
- Loading spinners
- Skeleton loaders
- Empty states
- Notification badges
- Theme toggle

## 🚀 Usage

### 1. Compile SCSS
```bash
# Using node-sass
node-sass scss/main.scss css/main.css

# Using sass
sass scss/main.scss css/main.css

# Watch mode
sass --watch scss/main.scss:css/main.css
```

### 2. Include in HTML
```html
<link rel="stylesheet" href="css/main.css">
```

### 3. Use Classes
```html
<!-- Card Example -->
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    Card content goes here
  </div>
</div>

<!-- Button Example -->
<button class="btn btn-primary">Click Me</button>

<!-- Form Example -->
<div class="form-group">
  <label class="label">Email</label>
  <input type="email" class="input" placeholder="Enter email">
</div>

<!-- Stats Card -->
<div class="stat-card stat-card-primary">
  <div class="stat-card-header">
    <div class="icon">📊</div>
  </div>
  <div class="stat-card-label">Total Sales</div>
  <div class="stat-card-value">$124,500</div>
</div>
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Responsive utilities

### Accessibility
- Focus states
- ARIA-friendly
- Keyboard navigation support
- High contrast support

### Customization
Easy to customize via SCSS variables:
```scss
// Override in your custom file
$primary-h: 210;  // Hue
$primary-s: 100%; // Saturation
$primary-l: 50%;  // Lightness

@import 'main';
```

### Theme Variables
All colors are available as CSS custom properties:
```css
.custom-element {
  background-color: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border-light);
}
```

## 📝 Utility Classes

### Spacing
- Margin: `m-xs`, `m-sm`, `m-md`, `m-lg`, `m-xl`, `m-2xl`, `m-3xl`
- Padding: `p-xs`, `p-sm`, `p-md`, `p-lg`, `p-xl`, `p-2xl`, `p-3xl`
- Directional: `mt-*`, `mr-*`, `mb-*`, `ml-*`, `mx-*`, `my-*`

### Typography
- Sizes: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`
- Colors: `text-primary`, `text-secondary`, `text-tertiary`, `text-success`, `text-danger`, etc.
- Alignment: `text-center`, `text-left`, `text-right`
- Weights: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`

### Display & Flexbox
- Display: `d-none`, `d-block`, `d-flex`, `d-grid`
- Flex: `flex-row`, `flex-col`, `justify-center`, `items-center`
- Grid: Built-in 12-column grid system

### Others
- Borders: `border`, `rounded`, `rounded-lg`, `rounded-full`
- Shadows: `shadow-sm`, `shadow-md`, `shadow-lg`
- Backgrounds: `bg-primary`, `bg-surface`, `bg-elevated`

## 🌍 Bangladesh/Global Considerations

This framework is designed for:
- Multi-language support (RTL ready with minor adjustments)
- Global accessibility standards
- Cross-browser compatibility
- Professional business applications

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Development Tips

1. **Customize Colors**: Modify `_colors.scss` to match your brand
2. **Add Components**: Create new partials and import in `main.scss`
3. **Override Defaults**: Create a `_custom.scss` file and import it last
4. **Theme Toggle**: Implement JavaScript to toggle `data-theme` attribute
5. **Performance**: Use CSS minification in production

## 📄 License

This SCSS framework is provided as-is for the Savidoor ERP project.

## 🤝 Contributing

When adding new components:
1. Follow existing naming conventions
2. Support both light and dark themes
3. Use CSS custom properties from `_theme.scss`
4. Document your changes
5. Test in both themes

---

**Built with ❤️ for modern ERP systems**
