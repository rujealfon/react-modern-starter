import { describe, it, expect, vi, beforeEach } from 'vitest';
import { login, register, logout, getCurrentUser, loginSchema, registerSchema } from './authApi';
import apiClient from '../../../lib/apiClient';

// Mock the apiClient
vi.mock('../../../lib/apiClient', () => ({
  default: {
    post: vi.fn(),
    get: vi.fn(),
  },
}));

describe('authApi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('login', () => {
    it('should call the login endpoint with correct data', async () => {
      const mockResponse = { data: { user: { id: '1', name: 'Test' }, token: 'token' } };
      (apiClient.post as unknown as ReturnType<typeof vi.fn>).mockResolvedValue(mockResponse);

      const data = { email: 'test@example.com', password: 'password123' };
      const result = await login(data);

      expect(apiClient.post).toHaveBeenCalledWith('/auth/login', data);
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('register', () => {
    it('should call the register endpoint with correct data', async () => {
      const mockResponse = { data: { user: { id: '1', name: 'Test' }, token: 'token' } };
      (apiClient.post as unknown as ReturnType<typeof vi.fn>).mockResolvedValue(mockResponse);

      const data = { name: 'Test User', email: 'test@example.com', password: 'password123' };
      const result = await register(data);

      expect(apiClient.post).toHaveBeenCalledWith('/auth/register', data);
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('logout', () => {
    it('should call the logout endpoint', async () => {
      const mockResponse = { data: { success: true } };
      (apiClient.post as unknown as ReturnType<typeof vi.fn>).mockResolvedValue(mockResponse);

      const result = await logout();

      expect(apiClient.post).toHaveBeenCalledWith('/auth/logout');
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('getCurrentUser', () => {
    it('should call the current user endpoint', async () => {
      const mockResponse = { data: { id: '1', name: 'Test User' } };
      (apiClient.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValue(mockResponse);

      const result = await getCurrentUser();

      expect(apiClient.get).toHaveBeenCalledWith('/auth/me');
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('validation schemas', () => {
    it('should validate login input correctly', () => {
      const validInput = { email: 'test@example.com', password: 'password123' };
      const invalidInput = { email: 'invalid-email', password: '123' };

      expect(() => loginSchema.parse(validInput)).not.toThrow();
      expect(() => loginSchema.parse(invalidInput)).toThrow();
    });

    it('should validate register input correctly', () => {
      const validInput = { name: 'Test User', email: 'test@example.com', password: 'password123' };
      const invalidInput = { name: 'T', email: 'invalid-email', password: '123' };

      expect(() => registerSchema.parse(validInput)).not.toThrow();
      expect(() => registerSchema.parse(invalidInput)).toThrow();
    });
  });
});
