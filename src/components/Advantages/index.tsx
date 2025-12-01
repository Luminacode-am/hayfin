import Card from '../Card';
import { Circle, Diamond, Triangle } from 'lucide-react';

const cardsData = [
  {
    name: 'Easy-to-use system',
    description:
      'Everyone can quickly understand how to use the site:simple design,Armenian interface,and fast response.',
    icon: <Circle size={18} />,
  },
  {
    name: 'Control your finances is one place',
    description:
      'You can track expenses,plan your budget,and save money wihout complicated calculations.',
    icon: <Diamond size={18} />,
  },
  {
    name: 'Security and Trust',
    description:
      'All data is kept confidential, the site proctects your personal information.',
    icon: <Triangle size={18} />,
  },
];

export default function Advantages() {
  return (
    <div className="max-w-7xl  mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row   md:justify-between gap-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <h1 className="text-4xl  font-medium text-slate-950">
            The advantage and importance ofthis website intodays world
          </h1>
        </div>

       <div className="w-full flex flex-col gap-6 ">
          {cardsData.map((card) => (
            <Card
              key={card.name}
              className="p-7  rounded-2xl bg-slate-100 bg-with">
              <div className="flex items-center gap-3">
                {card.icon}
                <h3 className=" font-medium  text-2xl text-neutral-950 ">
                  {card.name}
                </h3>
              </div>
              <p className=" font-medium text-base text-slate-600">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
