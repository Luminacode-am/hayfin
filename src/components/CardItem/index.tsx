import { Description } from "@headlessui/react";
import { Circle} from 'lucide-react';
import React from "react";

const cardsData = [
  {
    name:'Easy-to-use system' ,
     description:'Everyone can quickly understand how to use the site:simple design,Armenian interface,and fast response.',
  },
  {
    name:'Control your finances is one place',
    description:'You can track expenses,plan your budget,and save money wihout complicated calculations.',
  },
  {
    name:'Security and Trust',
    description:'All data is kept confidential, the site proctects your personal information.',
  }
]

export default function SectionWithCards() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <div className="flex justify-between items-stretch gap-6">
       
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <h1 className="text-4xl font-sans text-slate-800">The advantage and importance 
            ofthis website intoday's world</h1>
        </div>

        
       <div className="w-full flex flex-col gap-6">
        {cardsData.map((card) => (
          <div key={card.name} className=" border-slate-100 rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="font-serif text-slate-900 text-xl">
              <Circle size={18} strokeWidth={2} />
              {card.name}</h3>
                 <p className="font-serif text-slate-600 text-sm mt-2">
                {card.description}
              </p>
            </div>
          ))} 
        </div>

      </div>
    </section>
  );
}