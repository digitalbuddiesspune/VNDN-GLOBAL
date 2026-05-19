interface AuthPageShellProps {
  children: React.ReactNode;
}

export function AuthPageShell({ children }: AuthPageShellProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-vndn-bg px-4">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
