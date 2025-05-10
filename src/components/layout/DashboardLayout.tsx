import { Outlet } from '@tanstack/react-router';
import { Sidebar } from '../shared/Sidebar';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-semibold">Dashboard</h2>
              </div>
              <div className="flex items-center space-x-4">
                {/* Add user menu or other header items here */}
              </div>
            </div>
          </header>
          <main className="container py-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}