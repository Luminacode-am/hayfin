import { Disclosure } from '@headlessui/react';
import RegistrationForm from '../RegForm';

export default function AppBar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-xs top-0 inset-x-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-row">
            <div className="flex flex-row justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <a href="#" className="text-2xl font-bold text-blue-600">
                  Hay<span className="text-gray-800">Fin</span>
                </a>
              </div>

              <div className="flex space-x-1 text-base text-cyan-600 items-center font-semibold">
                <a href="#" className="hover:text-cyan-700 transition">
                  Sign In
                </a>
                <span>/</span>
                <a href="#" className="hover:text-cyan-700 transition">
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
