/**
 * Redmine Modern UI - Theme Toggle (Phase 7)
 * 
 * Handles dark/light mode switching with localStorage persistence
 * and system preference detection.
 */

const STORAGE_KEY = 'redmine-theme';
const THEME_DARK = 'dark';
const THEME_LIGHT = 'light';

/**
 * Get the user's preferred theme from localStorage or system preference
 */
function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return stored;
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEME_DARK;
  }
  
  return THEME_LIGHT;
}

/**
 * Apply the theme to the document
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  
  // Update toggle button state if it exists
  const toggleBtn = document.querySelector('[data-theme-toggle]');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-pressed', theme === THEME_DARK);
    
    // Update icon/text
    const lightIcon = toggleBtn.querySelector('[data-theme-icon="light"]');
    const darkIcon = toggleBtn.querySelector('[data-theme-icon="dark"]');
    
    if (lightIcon && darkIcon) {
      lightIcon.style.display = theme === THEME_DARK ? 'block' : 'none';
      darkIcon.style.display = theme === THEME_LIGHT ? 'block' : 'none';
    }
  }
}

/**
 * Toggle between dark and light theme
 */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
  const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
  
  localStorage.setItem(STORAGE_KEY, newTheme);
  applyTheme(newTheme);
}

/**
 * Initialize theme handling
 */
function initTheme() {
  // Apply theme immediately to prevent flash
  const theme = getPreferredTheme();
  applyTheme(theme);
  
  // Listen for system preference changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only auto-switch if user hasn't set a preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
      }
    });
  }
  
  // Set up toggle button listeners
  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('[data-theme-toggle]');
    if (toggleBtn) {
      e.preventDefault();
      toggleTheme();
    }
  });
  
  // Keyboard support for toggle
  document.addEventListener('keydown', (e) => {
    const toggleBtn = e.target.closest('[data-theme-toggle]');
    if (toggleBtn && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      toggleTheme();
    }
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

// Export for use in other modules
export { toggleTheme, applyTheme, getPreferredTheme };
