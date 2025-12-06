import React from 'react';

const Errors: React.FC = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-light-bg dark:bg-dark-bg px-6 py-24 sm:py-32 lg:px-8 h-screen">
        <div className="text-center">
          <p className="text-9xl font-semibold taxt-cyan-700 text-light-text dark:text-dark-text">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-light-text dark:text-dark-text sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-light-text-primary dark:text-dark-text-primary sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-light-link dark:bg-dark-link px-3.5 py-2.5 text-sm font-semibold text-light-text-tertiary dark:text-dark-text-secondary shadow-xs hover:bg-light-link-hover dark:hover:bg-dark-link-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-link dark:focus-visible:outline-dark-link"
            >
              Go back home
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-light-text dark:text-dark-text hover:text-light-link-hover dark:hover:text-dark-link-hover"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Errors;
