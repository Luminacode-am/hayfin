import { Disclosure } from '@headlessui/react';
import { Menu } from 'lucide-react';


export default function PHeader(){
     function Burger(){
        const items = ["Settings", "Contacts", "Notifications"];
    }
    return(
        <Disclosure as="nav" className="bg-white shadow-xs">
        {({ open }) => ( 
            <>  
            {/*Desktop*/}
         <header className="flex sm:justify-around">
              <div className="flex items-center">
                  <p className="text-xl">
                   My <span className="text-cyan-600">account</span> 
                 </p>
              </div>
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
          </header>
          

          </> 
          )}
        </Disclosure>
    );
}