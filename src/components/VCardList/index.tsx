import Card from '../Card';

const cards = [
  {
    name: 'Gold Vip',
    status: 'For individuals',
    price: '$2',
    sale: 'FREE/month',
    services: `Feature 1
    Feature 2 
    Feature 3`,
  },
  {
    name: 'Gold Vip',
    status: 'For individuals',
    price: '$2',
    sale: 'FREE/month',
    services: `Feature 1
    Feature 2 
    Feature 3`,
  },
  {
    name: 'Gold Vip',
    status: 'For individuals',
    price: '$2',
    sale: 'FREE/month',
    services: `Feature 1
    Feature 2 
    Feature 3`,
  },
];
export default function Cards() {
  return (
    <div className="flex gap-[50px] justify-center pb-[48px]  ">
      {cards.map((card) => (
        <Card key={card.name} className="flex flex-col justify-between">
          <div>
            <h2>{card.name}</h2>
          </div>
        </Card>
      ))}
    </div>
  );
}
