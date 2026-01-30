import logo from './logo.png';
import Card from '../Card';

const cards = [
  {
    name: 'Sas Supermarket',
    description: 'Supermarket in Armenia',
    href: '#',
    comment:
      'Մենք այս կայքի հետ աշխատում ենք դրա ստեղծումից ի վեր և շատ գոհ ենք։',
  },
  {
    name: 'Yerevan City',
    description: 'Supermarket in Armenia',
    href: '#',
    comment:
      'Ֆինանսական տվյալները ավտոմատ կերպով համաժամեցվում են, ինչը զգալիորեն կրճատել է հաշվապահական աշխատանքի ծավալը։ Մենք անպայման խորհուրդ ենք տալիս այն բոլոր մանրածախ առևտրի բիզնեսներին։',
  },
  {
    name: 'Tsiran Supermarket',
    description: 'Supermarket in Armenia',
    href: '#',
    comment:
      'Վճարումները այժմ կատարվում են առանց ուշացման: Մեզ համար սա բիզնեսի կառավարման ամենահարմար լուծումն է:',
  },
];
export default function Cards() {
  return (
    <div className="flex gap-[50px] justify-center pb-[48px] bg-light-bg dark:bg-dark-bg flex-wrap">
      {cards.map((card) => (
        <Card
          key={card.name}
          className="flex flex-col bg-light-bg dark:bg-dark-bg justify-between w-[382px]"
          width={'382px'}
        >
          <div className="pt-[32px] pr-[32px] pl-[32px]">
            <p className=" font-medium text-lg text-light-text dark:text-dark-text">
              {card.comment}
            </p>
          </div>
          <div className="max-h-[48px] pt-[12px] flex pl-[32px] mb-[32px]">
            <img src={logo} alt="logo" className="pr-16px w-[48px] h-[48px]" />
            <div>
              <div>
                <h3 className="text-base font-medium text-light-text dark:text-dark-text">
                  {card.name}
                </h3>
              </div>
              <div>
                <p className="text-base text-light-text-secondary dark:text-dark-text-secondary font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
