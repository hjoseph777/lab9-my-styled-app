import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to My Styled App
        </p>
      </div>

      <div className="animate-bounce mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to My Styled App
        </h1>
        <p className="text-xl mb-8">This is a Next.js application with various styling approaches</p>
      </div>
      
      <div className="mt-6 animate-pulse">
        <Link 
          href="/styled"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Go to Styled Page
        </Link>
      </div>
      
      <footer className="flex justify-center items-center mt-8 text-sm text-gray-500">
        <p>© 2023 My Styled App - An exploration of CSS in Next.js</p>
      </footer>
    </main>
  );
}
