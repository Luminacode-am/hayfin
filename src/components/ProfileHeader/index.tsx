import { Disclosure } from '@headlessui/react';


export default function PHeader(){
    return(
        <Disclosure as="nav" className="bg-white shadow-xs">
        {({ open }) => (    
         <header className="flex sm:justify-around">
              <div className="flex items-center">
                  <p className="text-xl">
                   My <span className="text-cyan-600">account</span> 
                 </p>
              </div>
              <div className="flex items-center">
                  <ol className="text-lg gap-32px">
                     <li className="text-cyan-600 hover:text-cyan-700 transition"><a href="#">Settings</a></li>
                     <li className="text-cyan-600 hover:text-cyan-700 transition"><a href="#">Contacts</a></li>
                     <li className="text-cyan-600 hover:text-cyan-700 transition"><a href="#">Notifications</a></li>
                  </ol>
              </div>
          </header>
          )}
        </Disclosure>
    );
}