import { Disclosure } from '@headlessui/react';

export default function AppBar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-xs top-0 inset-x-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex sm:flex-row flex-col sm:justify-between justify-around h-32">
              {/* Logo */}
              <div className="flex items-center">
                <a href="#" className="text-4xl font-bold text-blue-600">
                  Hay<span className="text-gray-800">Fin</span>
                </a>
              </div>

              {/* Desktop Sign In / Sign Up */}
              <div className="hidden sm:flex sm:space-x-1 text-base text-cyan-600 items-center font-semibold mr-4">
                <a href="#" className="hover:text-cyan-700 transition">
                  Sign In
                </a>
                <span>/</span>
                <a href="#" className="hover:text-cyan-700 transition">
                  Sign Up
                </a>
              </div>

              {/* Mobile Sign In / Sign Up */}
              <div className="sm:hidden flex items-start font-semibold space-x-1 sm:hidden text-cyan-600">
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
