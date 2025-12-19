import Card from '../Card';
import Button from '../Button';

const cards = [
  {
    name: 'Bronze Vip',
    status: 'Անհատների համար',
    price: '$2',
    sale: 'Անվճար',
    time: '/Ամսեկան',
    services: `Ծառայություններ 0
   Ծառայություններ 1 
   Ծառայություններ 2`,
  },
  {
    name: 'Silver Vip',
    status: 'Միջին թիմերի համար',
    price: '$5',
    sale: 'Անվճար',
    time: '/Ամսեկան',
    services: `Ծառայություններ 2
    Ծառայություններ 3
    Ծառայություններ 4`,
  },
  {
    name: 'Gold Vip',
    status: 'Մեծ թիմերի համար',
    price: '$10',
    sale: '$4',
    time: '/Ամսեկան',
    services: `Ծառայություններ 5
   Ծառայություններ 6
    Ծառայություններ 7`,
  },
];
export default function Cards() {
  return (
    <div className="max-w-7xl mx-auto flex gap-[50px] justify-center pb-[48px] flex-wrap px-4">
      {cards.map((card) => (
        <Card
          key={card.name}
          className="flex flex-col justify-between max-h-[415px]  "
          width={'360px'}
        >
          <div className="max-w-[360px] max-h-[415px] pt-[32px] pl-[24px]  pr-[24px]  pb-[24px]">
            <>
              <h2 className="text-[20px] font-[600] text-[#0D7680]">
                {card.name}
              </h2>
              <p className="text-[18px] font-[500] text-[#737373]">
                {card.status}
              </p>
            </>
            <div className="pb-[32px] pt-[32px] ">
              <span>
                <del className="text-[24px] font-[700] text-[#737373]">
                  {card.price}
                </del>
              </span>
              <div>
                <span className="text-[36px] font-[700]">{card.sale}</span>
                <span className="text-[18px] font-[500] text-[#737373]">
                  {card.time}
                </span>
              </div>
            </div>
            <div className="pb-[32px] w-[200px]">
              <p className=" text-[18px] font-[500] w-[195px]">
                {card.services}
              </p>
            </div>

            <Button className="pt-[12px] pb-[12px] w-[312px] bg-[#0D7680] rounded-[12px]">
              Sign up
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
