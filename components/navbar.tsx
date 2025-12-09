'use client';

import React from 'react';
import Link from 'next/link';
import { Session } from 'next-auth';
import { logout } from '@/lib/auth-actions';

export default function Navbar({ session }: { session: Session | null }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className='bg-slate-800 border-b border-slate-700 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='h-16 flex justify-between'>
          <div className='flex items-center'>
            <Link href='/' className='text-primary text-xl font-bold'>
              Event Planner
            </Link>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <Link
              href='/events'
              className='text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors'
            >
              Events
            </Link>
            {session ? (
              <>
                <Link
                  href='/events/create'
                  className='text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors'
                >
                  Create Event
                </Link>
                <Link
                  href='/dashboard'
                  className='text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors'
                >
                  Dashboard
                </Link>
                <div className='flex items-center space-x-2'>
                  <button
                    onClick={logout}
                    className='bg-primary text-background hover:bg-primary/90 px-3 py-2 rounded-md text-sm font-medium transition-colors'
                  >
                    Sign out
                  </button>
                </div>
              </>
            ) : (
              <div className='flex items-center space-x-2'>
                <Link
                  href='/login'
                  className='bg-primary text-background hover:bg-primary/90 px-3 py-2 rounded-md text-sm font-medium transition-colors'
                >
                  Sign in with GitHub
                </Link>
              </div>
            )}
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-foreground hover:text-primary focus:outline-none focus:text-primary'
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link
                href='/events'
                className='text-foreground hover:text-primary px-3 py-2 rounded-md text-base block font-medium transition-colors'
              >
                Events
              </Link>
              <Link
                href='/events/create'
                className='text-foreground hover:text-primary px-3 py-2 rounded-md text-base block font-medium transition-colors'
              >
                Create Event
              </Link>
              <Link
                href='/dashboard'
                className='text-foreground hover:text-primary px-3 py-2 rounded-md text-base block font-medium transition-colors'
              >
                Dashboard
              </Link>
              <div className='flex items-center space-x-2'>
                <Link
                  href='/login'
                  className='bg-primary text-background hover:bg-primary/90 px-3 py-2 rounded-md text-sm font-medium transition-colors'
                >
                  Sign in with GitHub
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
