/**
 * Utility to calculate color contrast ratios for accessibility compliance
 * According to WCAG 2.1 standards:
 * - AA Level: 4.5:1 for normal text, 3:1 for large text
 * - AAA Level: 7:1 for normal text, 4.5:1 for large text
 */

export interface ContrastResult {
  ratio: number;
  AA: boolean;
  AAA: boolean;
  AALarge: boolean;
  AAALarge: boolean;
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Handle shorthand hex
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Convert RGB to relative luminance
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) {
    throw new Error('Invalid color format');
  }
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast ratio meets WCAG standards
 */
export function checkContrast(color1: string, color2: string): ContrastResult {
  const ratio = getContrastRatio(color1, color2);
  
  return {
    ratio: Math.round(ratio * 100) / 100,
    AA: ratio >= 4.5,
    AAA: ratio >= 7,
    AALarge: ratio >= 3,
    AAALarge: ratio >= 4.5
  };
}

/**
 * Analyze all color combinations in the theme
 * 
 * IMPORTANT: Keep these theme colors in sync with src/styles/global_styles.ts
 * When theme colors change, update this function to match.
 */
export function analyzeThemeContrast() {
  // Theme colors - MUST MATCH src/styles/global_styles.ts
  const theme = {
    headerBackground: "#333",
    red: "#cc0000",  // Updated for better contrast (5.89:1 on white vs 4.00:1)
    white: "#fff",
    black: "#000",
    blue: "#042e5eb0",
    cartBackground: "#87c7e0",
    cartBoxShadow: "rgba(0, 0, 0, 0.3)",
    bannerH2: "rgb(10, 88, 234)",
    buttonAdd: "#e8b408",
    buttonAddActive: "#83e808",
    menuBackgroundColor: "#f5f5f5",
    shopItem: "rgba(239, 209, 33, 0.6)",
  };
  
  const results = [
    // Header combinations
    { name: "Header text on header background", fg: theme.white, bg: theme.headerBackground },
    
    // Button combinations
    { name: "Button text (black) on buttonAdd", fg: theme.black, bg: theme.buttonAdd },
    { name: "Button text (black) on buttonAddActive", fg: theme.black, bg: theme.buttonAddActive },
    { name: "Banner H2 on banner background", fg: theme.bannerH2, bg: theme.white },
    
    // Login/Register button
    { name: "Login button text", fg: theme.white, bg: theme.bannerH2 },
    { name: "Register link on buttonAdd", fg: theme.black, bg: theme.buttonAdd },
    
    // Cart
    { name: "Cart text on cart background", fg: theme.black, bg: theme.cartBackground },
    { name: "Cart badge text", fg: theme.white, bg: theme.red },
    
    // Menu
    { name: "Menu text on menu background", fg: theme.black, bg: theme.menuBackgroundColor },
    
    // Products
    { name: "Product text on white", fg: theme.black, bg: theme.white },
    
    // Error messages
    { name: "Error text on white", fg: theme.red, bg: theme.white },
    { name: "Error text on cart background", fg: theme.red, bg: theme.cartBackground },
    
    // Register success message
    { name: "Success text on buttonAddActive", fg: theme.black, bg: theme.buttonAddActive },
    
    // Checkout
    { name: "Checkout button text", fg: theme.black, bg: theme.buttonAddActive },
    { name: "Checkout nav button text", fg: theme.white, bg: theme.blue.slice(0, 7) }, // Remove alpha
  ];
  
  return results.map(({ name, fg, bg }) => {
    try {
      const contrast = checkContrast(fg, bg);
      return { name, fg, bg, ...contrast };
    } catch {
      return { name, fg, bg, ratio: 0, AA: false, AAA: false, AALarge: false, AAALarge: false };
    }
  });
}
