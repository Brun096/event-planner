import { GithubSignInButton } from '@/components/github-sign-in-button';

export default async function LoginPage() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-md space-y-8'>
        <div className='text-center'>
          <h1 className='text-foreground font-bold text-3xl'> Welcome</h1>
          <p className='text-muted mt-2'>Sign in or create an account to continue.</p>
        </div>
        <div className='card p-8'>
          <div className='space-y-6'>
            <div className='text-center'>
              <p className='text-muted mb-6'>Use your GitHub account to sign in or create a new account.</p>
            </div>
            <GithubSignInButton />
            <div className='text-center'>
              <p className='text-sm text-muted'>By signing in, you agree to our terms of service and privacy policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
