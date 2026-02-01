import Card from '../Card';
import { Circle, Diamond, Triangle } from 'lucide-react';

const cardsData = [
  {
    name: 'Հարմար և հեշտ օգտագործվող համակարգ',
    description:
      'Յուրաքանչյուր ոք կարող է արագ պարզել, թե ինչպես օգտվել կայքից ՝ Պարզ դիզայն, հայկական ինտերֆեյս և արագ արձագանք:',
    icon: <Circle className="dark:stroke-dark-border" size={18} />,
  },
  {
    name: 'Վերահսկեք ձեր ֆինանսները մեկ վայրում։',
    description:
      'Դուք կարող եք հետևել ծախսերին, պլանավորել ձեր բյուջեն և գումարը խնայել առանց բարդ հաշվարկների։',
    icon: <Diamond className="dark:stroke-dark-border" size={18} />,
  },
  {
    name: 'Անվտանգություն և վստահություն',
    description:
      'Բոլոր տվյալները գաղտնի են պահվում, կայքը պաշտպանում է ձեր անձնական տեղեկությունները։',
    icon: <Triangle className="dark:stroke-dark-border" size={18} />,
  },
];

export default function Advantages() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <h1 className="text-4xl  font-medium text-light-text dark:text-dark-text">
            Կայքի առավելությունը և կարևորությունը այսօրվա աշխարհում
          </h1>
        </div>

        <div className="w-full flex flex-col gap-6 ">
          {cardsData.map((card) => (
            <Card
              key={card.name}
              className="p-7 rounded-2xl bg-light-bg dark:bg-dark-bg-primary max-w-[600px]"
            >
              <div className="flex items-center gap-3">
                {card.icon}
                <h3 className=" font-medium  text-2xl text-light-text dark:text-dark-text ">
                  {card.name}
                </h3>
              </div>
              <p className=" font-medium text-base text-light-text-primary dark:text-dark-text-primary">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
