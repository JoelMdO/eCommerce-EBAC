import { getContrastRatio, checkContrast, analyzeThemeContrast } from '../contrastChecker';

describe('Contrast Checker', () => {
  describe('getContrastRatio', () => {
    it('should calculate correct contrast ratio for black and white', () => {
      const ratio = getContrastRatio('#000000', '#ffffff');
      expect(ratio).toBeCloseTo(21, 0);
    });

    it('should calculate correct contrast ratio for same colors', () => {
      const ratio = getContrastRatio('#ffffff', '#ffffff');
      expect(ratio).toBeCloseTo(1, 0);
    });

    it('should handle shorthand hex colors', () => {
      const ratio = getContrastRatio('#000', '#fff');
      expect(ratio).toBeCloseTo(21, 0);
    });
  });

  describe('checkContrast', () => {
    it('should pass AA for sufficient contrast', () => {
      const result = checkContrast('#000000', '#ffffff');
      expect(result.AA).toBe(true);
      expect(result.AAA).toBe(true);
    });

    it('should fail AA for insufficient contrast', () => {
      const result = checkContrast('#cccccc', '#ffffff');
      expect(result.AA).toBe(false);
    });
  });

  describe('analyzeThemeContrast', () => {
    it('should analyze all theme color combinations', () => {
      const results = analyzeThemeContrast();
      expect(results.length).toBeGreaterThan(0);
      
      // Log results for inspection
      console.log('\n=== COLOR CONTRAST ANALYSIS ===\n');
      results.forEach(result => {
        const status = result.AA ? '✓ PASS AA' : '✗ FAIL AA';
        const statusAAA = result.AAA ? '✓ PASS AAA' : '✗ FAIL AAA';
        console.log(`${status} | ${statusAAA} | ${result.ratio.toFixed(2)}:1 | ${result.name}`);
        console.log(`  FG: ${result.fg} on BG: ${result.bg}`);
      });
      console.log('\n=== END ANALYSIS ===\n');
    });
  });
});
