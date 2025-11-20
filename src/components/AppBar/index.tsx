import { Disclosure } from '@headlessui/react';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Prices', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

export default function AppBar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white shadow-xs fixed top-0 inset-x-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <a href="#" className="text-2xl font-bold text-blue-600">
                  Hay<span className="text-gray-800">Fin</span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:space-x-8 items-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700 hover:text-blue-600'
                    } px-3 py-2 text-sm`}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-hidden">
                  {open ? <X size={22} /> : <Menu size={22} />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="sm:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block ${
                    item.current
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  } px-3 py-2 text-base`}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
