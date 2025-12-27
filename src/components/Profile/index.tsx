import { Disclosure } from '@headlessui/react';


export default function PHeader(){
    return(
        <Disclosure>
        {({ open }) => (    
         <header>
              <div>
                  <h1>
                   My <span>account</span> 
                 </h1>
              </div>
              <div>
                  <ol>
                     <li><a href="#">Settings</a></li>
                     <li><a href="#">Contacts</a></li>
                     <li><a href="#">Notifications</a></li>
                  </ol>
              </div>
          </header>
          )}
        </Disclosure>
    );
}