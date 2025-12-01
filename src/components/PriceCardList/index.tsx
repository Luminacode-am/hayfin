import Card from '../Card';
import Button from '../Button';

const cards = [
  {
    name: 'Bronze Vip',
    status: 'For individuals',
    price: '$2',
    sale: 'FREE',
    time: '/month',
    services: `Feature 1
    Feature 2 
    Feature 3`,
  },
  {
    name: 'Silver Vip',
    status: 'For medium teams',
    price: '$5',
    sale: 'FREE',
    time: '/month',
    services: `All the Plan #2 features
    Feature 4 
    Feature 5`,
  },
  {
    name: 'Gold Vip',
    status: 'For large teams',
    price: '$10',
    sale: '$4',
    time: '/month',
    services: `All the Plan #3 features
    Feature 6 
    Feature 7`,
  },
];
export default function Cards() {
  return (
    <div className="flex gap-[50px] justify-center pb-[48px] flex-wrap">
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
              <p className=" text-[18px] font-[500] w-[135px]">
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
