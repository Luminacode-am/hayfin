import { Disclosure } from '@headlessui/react';
import RegistrationForm from '../RegForm';

export default function AppBar() {
  return (
    <Disclosure as="nav" className="bg-light-bg dark:bg-dark-bg shadow-xs top-0 inset-x-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-row">
            <div className="flex flex-row justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <a href="#" className="text-2xl font-bold text-light-link dark:text-dark-link">
                  Hay<span className="text-gray-800 dark:text-dark-text-secondary">Fin</span>
                </a>
              </div>

              <div className="flex space-x-1 text-base text-light-link dark:text-dark-link items-center font-semibold">
                <a href="#" className="hover:text-light-link-hover active:text-light-link-active hover:text-dark-link-hover active:text-dark-link-active transition">
                  Sign In
                </a>
                <span>/</span>
                <a href="#" className="hover:text-light-link-hover active:text-light-link-active hover:text-dark-link-hover active:text-dark-link-active transition">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
