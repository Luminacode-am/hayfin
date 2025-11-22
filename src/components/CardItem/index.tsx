import { Description } from "@headlessui/react";
import React from "react";

const cardsData = [
  {
    name:'Easy-to-use system',
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
       
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-sans">The advantage and importance 
            ofthis website intoday's world</h1>
        </div>

        
       <div className="w-full flex flex-col gap-6">
        {cardsData.map((card) => (
          <div key={card.name} className=" border-slate-200 rounded-2xl bg-gray-200 p-6">
            <h3 className="font-serif text-zinc-950 text-xl">
              {card.name}</h3>
                 <p className="font-serif text-gray-500text-sm mt-2">
                {card.description}
              </p>
            </div>
          ))} 
        </div>

      </div>
    </section>
  );
}