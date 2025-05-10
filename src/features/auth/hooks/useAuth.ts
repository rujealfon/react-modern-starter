import { useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '../store/authStore';
import { login as loginApi, register as registerApi, logout as logoutApi } from '../api/authApi';
import type { LoginInput, RegisterInput } from '../api/authApi';

interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

export function useAuth() {
  const navigate = useNavigate();
  const { user, isAuthenticated, login: loginStore, logout: logoutStore } = useAuthStore();

  const login = useCallback(async (data: LoginInput) => {
    const response = await loginApi(data) as AuthResponse;
    loginStore(response.user, response.token);
    navigate({ to: '/dashboard' });
    return response;
  }, [loginStore, navigate]);

  const register = useCallback(async (data: RegisterInput) => {
    const response = await registerApi(data) as AuthResponse;
    loginStore(response.user, response.token);
    navigate({ to: '/dashboard' });
    return response;
  }, [loginStore, navigate]);

  const logout = useCallback(async () => {
    await logoutApi();
    logoutStore();
    navigate({ to: '/' });
  }, [logoutStore, navigate]);

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout,
  };
}