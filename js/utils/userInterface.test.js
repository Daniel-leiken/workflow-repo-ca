import { describe, expect, test } from 'vitest';
import { isActivePath } from './userInterface.js';

describe('isActivePath', () => {
  
  // Test 1: Returns true when current path matches href exactly
  test('returns true when current path matches href exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });

  // Test 2: Returns true for root path ("/") when path is "/" or "/index.html"
  test('returns true for root path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  // Test 3: Returns true when current path includes the href
  test('returns true when current path includes the href', () => {
    expect(isActivePath('/products', '/products/shoes')).toBe(true);
  });

  // Test 4: Returns false when paths don’t match
  test('returns false when paths don’t match', () => {
    expect(isActivePath('/about', '/contact')).toBe(false);
  });

});