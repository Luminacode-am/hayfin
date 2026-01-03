import Card from "../Card";
import Button from '../Button';

const cards = [
    {
        name: 'Pay debt',
        textColor: 'text-green-500',
        plus1: 'Pay off existing debt',
        plus2: 'Fast and secure payment',
        plus3: 'No extra fees',
        buttenText: 'Buy debt'
    },
    {
        name: 'New debt',
        textColor: 'text-cyan-700',
        plus1: 'Pay off existing debt',
        plus2: 'Fast and secure payment',
        plus3: 'No extra fees',
        buttonText: 'New debt'
    }
]

export default function PCards(){
    return(
        <div className="flex gap-70px justify-center pb-59px">
            {cards.map((card => 
                <Card key={card.name} className="flex flex-col justify-between items-center max-w-513px max-h-624px">
                    <div className="max-w-513px max-h-624px pt-45px pl-20px pb-59px pr-20px">
                       <>
                          <h2 className="text-20px font-700">
                             {card.name}
                          </h2>
                          <p className="text-15px pt-22px gap-35px">
                            {card.plus1}
                          </p>
                          <p className="text-15px gap-35px">
                            {card.plus2}
                          </p>
                          <p className="text-15px gap-35px">
                            {card.plus3}
                          </p>
                          <Button className="pt-28px pb-28px max-w-420">
                            {card.buttenText}
                          </Button>
                       </>
                    </div>
                </Card>
            ))}
        </div>
    )
}