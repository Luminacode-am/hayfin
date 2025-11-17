import logo from "./logo.png";
import Card from "../Card";

const cards = [
  {
    name: 'Sas Supermarket',
    description: 'Supermarket in Armenia',
    href: '#',
    comment:
      'We have been working with this website since its creation and are very satisfied.',
  },
  {
    name: 'Yerevan City',
    description: 'Supermarket in Armenia',
    href: '#',
    comment:
      'Financial Data is automatically synchronized, which has significantly reduced the amount of accounting work. We definitely recommend it to all retail businesses',
  },
  {
    name: 'Tsiran Supermarket',
    description: 'Supermarket in Armenia',
    href: '#',
    comment:
      'Payments are now made without delay.For us, this is the most convenient solution in business management',
  },
];
export default function Cards() {
  return (
    <div className="flex gap-[50px] justify-center pb-[48px] ">
      {cards.map((card) => (
        <Card key={card.name}>
          <div className="p-[32px]">
            <div>
              <p className=" font-medium text-lg">{card.comment}</p>
            </div>
            <div className="max-h-[48px] pt-[12px] flex">
              <img src={logo} alt="logo" className="pr-16px" />
              <div>
                <div>
                  <h3 className="text-base font-medium">{card.name}</h3>
                </div>
                <div>
                  <p className="text-base text-[#DCDCDC] font-medium">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
