import { beforeEach, describe, expect, test, vi } from 'vitest';
import { getUsername } from './storage';

describe('getUsername', () => {
  
  // Mock localStorage to simulate data
  beforeEach(() => {
    global.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      clear: vi.fn(),
    };
  });

  // Test 1: Test that it returns the name from the user object in storage
  test('returns the name from the user object in storage', () => {
    const mockUser = { name: 'John Doe' };
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockUser)); // Mock the storage value

    const userName = getUsername();
    expect(userName).toBe('John Doe');
  });

  // Test 2: Test that it returns null when no user exists in storage
  test('returns null when no user exists in storage', () => {
    localStorage.getItem.mockReturnValueOnce(null); // Simulate no user in storage

    const userName = getUsername();
    expect(userName).toBeNull();
  });
});