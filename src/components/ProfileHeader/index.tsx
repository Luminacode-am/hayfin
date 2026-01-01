import { Disclosure } from '@headlessui/react';
import { Menu } from 'lucide-react';
import { useState } from 'react';

function PHeader(){
    {/*Desktop vershion*/}
     function Burger(){
        const items = ["Settings", "Contacts", "Notifications"];
        return(
                <div className="flex items-center">
                  <ol className="text-lg gap-32px">
                    {items?.map((item, index) => (
                     <li key={index} className="text-cyan-600 hover:text-cyan-700 transition">
                           <a href="#">
                              {item}
                          </a>
                        </li>
                    ))}
                  </ol>
              </div>
        )
    Burger()
    }
    {/*Mobile vershion*/}
    function Dropdown(){
        const [open, setOpen] = useState(false);

        const items = ["Settings", "Contacts", "Notifications"];

        const App = () => {
        return(
            <div onClick={() => setOpen(!open)}>
                <Menu />

                {open && (
                  <div className='flex flex-col bg-gray-50 max-w-200px max-h-300px'>
                    <ol className="text-lg gap-32px">
                      {items?.map((item, index) => (
                          <li key={index} className="text-cyan-600 hover:text-cyan-700 transition">
                              <a href="#">
                                 {item}
                              </a>
                           </li>
                       ))}
                    </ol>
                  </div>
                )}
            </div>
        )
    }
    Dropdown()
    }

    return(
        <Disclosure as="nav" className="bg-white shadow-xs">
        {({ open }) => (
            <>
            {/*My profile*/}
         <header className="flex sm:justify-around">
              <div className="flex items-center">
                  <p className="text-xl">
                   My <span className="text-cyan-600">account</span>
                 </p>
              </div>
          </header>

          {/*Mobile*/}
            <header className="flex sm:justify-around">
              <div className="flex items-center">
                  <p className="text-lg">
                   My <span className="text-cyan-600">account</span>
                 </p>
              </div>
          </header>
          </>
          )}
        </Disclosure>
    );
}

PHeader()