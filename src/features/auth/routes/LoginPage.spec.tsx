import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import { LoginForm } from '../components/LoginForm';

// Mock the LoginForm component
vi.mock('../components/LoginForm', () => ({
  LoginForm: vi.fn(() => <div data-testid="login-form">Login Form</div>),
}));

describe('LoginPage', () => {
  it('renders the login form', () => {
    render(<LoginPage />);

    expect(screen.getByTestId('login-form')).toBeInTheDocument();
    expect(LoginForm).toHaveBeenCalled();
  });

  it('has the correct layout classes', () => {
    render(<LoginPage />);

    const container = screen.getByTestId('login-form').parentElement;
    expect(container).toHaveClass(
      'container',
      'mx-auto',
      'flex',
      'min-h-[calc(100vh-theme(spacing.14))]',
      'flex-col',
      'items-center',
      'justify-center'
    );
  });
});
