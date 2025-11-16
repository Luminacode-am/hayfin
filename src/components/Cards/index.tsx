import Logo from './logo.png'

const cards = [
  { name: "Sas Supermarket", description: "Supermarket in Armenia", href: "#", comment: "Payments are now made without delay.For us, this is the most convenient solution in business management", },
  { name: "Yerevan City", description: "Supermarket in Armenia", href: "#", comment: "Payments are now made without delay.For us, this is the most convenient solution in business management" },
  { name: "Tsiran Supermarket", description: "Supermarket in Armenia", href: "#", comment: "Payments are now made without delay.For us, this is the most convenient solution in business management" }
];
export default function Cards() {
  return (
    <div className="flex gap-[50px]  justify-center pb-[48px] ">
      {cards.map((card) => (
        <div
          key={card.name}
          className="w-[336px] bg-white max-h-[280px] rounded-[16px] border-[#E6E6E6] border"

        >
          <div className="p-[32px] ">
            <div>
              <p className=" font-medium text-lg">{card.comment}</p>

            </div>
            <div className="max-h-[48px] pt-[12px] flex" >
              <div>
              <img src="logo.png" alt="logo" className='pr-16px' />
              </div>
<div>
              <div>
                <h3 className="text-base font-medium">
                  {card.name}
                </h3>
              </div>
              <div>
                <p className="text-base text-[#DCDCDC] font-medium">
                  {card.description}
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      )
      )
      }
    </div>
  )
}
