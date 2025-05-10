import { LoginForm } from '../components/LoginForm';

export default function LoginPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-theme(spacing.14))] flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
}