#!/usr/bin/env node

/**
 * Standalone contrast analysis script
 * Analyzes color contrast ratios in the eCommerce theme
 */

function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');
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

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) {
    return 0;
  }
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

function checkContrast(color1, color2) {
  const ratio = getContrastRatio(color1, color2);
  
  return {
    ratio: Math.round(ratio * 100) / 100,
    AA: ratio >= 4.5,
    AAA: ratio >= 7,
    AALarge: ratio >= 3,
    AAALarge: ratio >= 4.5
  };
}

// Theme colors from global_styles.ts
const theme = {
  headerBackground: "#333",
  red: "#cc0000",  // Updated for better contrast
  white: "#fff",
  black: "#000",
  blue: "#042e5e",
  cartBackground: "#87c7e0",
  bannerH2: "#0a58ea",
  buttonAdd: "#e8b408",
  buttonAddActive: "#83e808",
  menuBackgroundColor: "#f5f5f5",
  shopItem: "#efd121",
};

// Color combinations to test
const tests = [
  { name: "Header text on header background", fg: theme.white, bg: theme.headerBackground, element: "Header" },
  { name: "Button text (black) on buttonAdd (yellow)", fg: theme.black, bg: theme.buttonAdd, element: "Product Add Button" },
  { name: "Button text (black) on buttonAddActive (green)", fg: theme.black, bg: theme.buttonAddActive, element: "Active Add Button" },
  { name: "Banner H2 on white background", fg: theme.bannerH2, bg: theme.white, element: "Banner Heading" },
  { name: "Login button text (white) on blue", fg: theme.white, bg: theme.bannerH2, element: "Login/Register Button" },
  { name: "Register link text (black) on buttonAdd", fg: theme.black, bg: theme.buttonAdd, element: "Register Link" },
  { name: "Cart text (black) on cart background", fg: theme.black, bg: theme.cartBackground, element: "Cart Content" },
  { name: "Cart badge text (white) on red", fg: theme.white, bg: theme.red, element: "Cart Badge" },
  { name: "Menu text (black) on menu background", fg: theme.black, bg: theme.menuBackgroundColor, element: "Menu Items" },
  { name: "Product text (black) on white", fg: theme.black, bg: theme.white, element: "Product Info" },
  { name: "Error text (red) on white", fg: theme.red, bg: theme.white, element: "Error Messages" },
  { name: "Error text (red) on cart background", fg: theme.red, bg: theme.cartBackground, element: "Cart Error" },
  { name: "Success text (black) on buttonAddActive", fg: theme.black, bg: theme.buttonAddActive, element: "Success Message" },
  { name: "Checkout button text (black) on green", fg: theme.black, bg: theme.buttonAddActive, element: "Checkout Button" },
  { name: "Checkout nav button text (white) on blue", fg: theme.white, bg: theme.blue, element: "Checkout Nav" },
];

console.log('\n' + '='.repeat(100));
console.log('COLOR CONTRAST ACCESSIBILITY ANALYSIS - eCommerce EBAC');
console.log('WCAG 2.1 Standards: AA (4.5:1 normal, 3:1 large) | AAA (7:1 normal, 4.5:1 large)');
console.log('='.repeat(100) + '\n');

const failures = [];
const warnings = [];
const passes = [];

tests.forEach((test, index) => {
  const result = checkContrast(test.fg, test.bg);
  
  let status = '';
  if (result.AAA) {
    status = '✓✓ EXCELLENT (AAA)';
    passes.push({ ...test, result });
  } else if (result.AA) {
    status = '✓  PASS (AA)';
    passes.push({ ...test, result });
  } else if (result.AALarge) {
    status = '⚠  WARNING (Large text only)';
    warnings.push({ ...test, result });
  } else {
    status = '✗  FAIL';
    failures.push({ ...test, result });
  }
  
  console.log(`${(index + 1).toString().padStart(2)}. ${status}`);
  console.log(`    Element: ${test.element}`);
  console.log(`    Contrast Ratio: ${result.ratio.toFixed(2)}:1`);
  console.log(`    Colors: ${test.fg} on ${test.bg}`);
  console.log(`    Standards: AA=${result.AA ? 'PASS' : 'FAIL'} | AAA=${result.AAA ? 'PASS' : 'FAIL'} | AA-Large=${result.AALarge ? 'PASS' : 'FAIL'}`);
  console.log('');
});

console.log('='.repeat(100));
console.log('SUMMARY');
console.log('='.repeat(100) + '\n');
console.log(`Total Tests: ${tests.length}`);
console.log(`✓ Passes (AA or better): ${passes.length}`);
console.log(`⚠ Warnings (Large text only): ${warnings.length}`);
console.log(`✗ Failures: ${failures.length}`);
console.log('');

if (failures.length > 0) {
  console.log('CRITICAL ISSUES (Must Fix):');
  console.log('-'.repeat(100));
  failures.forEach(f => {
    console.log(`  • ${f.element}: ${f.result.ratio.toFixed(2)}:1 (needs ${(4.5 / f.result.ratio * 100).toFixed(0)}% improvement)`);
    console.log(`    Current: ${f.fg} on ${f.bg}`);
  });
  console.log('');
}

if (warnings.length > 0) {
  console.log('WARNINGS (Improve if possible):');
  console.log('-'.repeat(100));
  warnings.forEach(w => {
    console.log(`  • ${w.element}: ${w.result.ratio.toFixed(2)}:1 (acceptable for large text only)`);
    console.log(`    Current: ${w.fg} on ${w.bg}`);
  });
  console.log('');
}

console.log('RECOMMENDATIONS:');
console.log('-'.repeat(100));

if (failures.length === 0 && warnings.length === 0) {
  console.log('  ✓ All color combinations meet WCAG AA standards!');
  console.log('  ✓ Consider improving to AAA for even better accessibility.');
} else {
  console.log('  1. Fix all critical failures to meet minimum WCAG AA standards');
  console.log('  2. Consider darkening or lightening colors that only pass for large text');
  console.log('  3. Test with actual users who have visual impairments');
  console.log('  4. Use browser extensions like "WAVE" or "axe DevTools" for validation');
}

console.log('\n' + '='.repeat(100) + '\n');
