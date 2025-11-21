import Card from '../Card';
import Button from '../Button'

const cards = [
    {
        name: "Gold Vip", status: "For individuals", price: "$2", sale: "FREE",time:"/month",
        services:
            `Feature 1
    Feature 2 
    Feature 3`},
    {
        name: "Gold Vip", status: "For individuals", price: "$2", sale: "FREE",time:"/month",
        services:
            `Feature 1
    Feature 2 
    Feature 3`},
    {
        name: "Gold Vip", status: "For individuals", price: "$2", sale: "FREE",time:"/month",
        services:
            `Feature 1
    Feature 2 
    Feature 3`
    }
]
export default function Cards() {
    return (
        <div className="flex gap-[50px] justify-center pb-[48px]  ">
            {cards.map((card) => (
                <Card key={card.name} className="flex flex-col justify-between max-h-[415px]  " >
                    <div className='max-w-[360px] max-h-[415px] pt-[32px] pl-[24px]  pr-[24px]  pb-[24px]'>
                       
                        <div>
                            <h2>{card.name}</h2>
                            <p>{card.status}</p>
                        </div>
                        <div  className='pb-[32px] pt-[32px] '>
                            <span><del>{card.price}</del></span>
                            <div>
                            <span>{card.sale}</span>
                            <span>{card.time}</span>
                            </div>
                        </div>
                        <div className='pb-[32px]'>
                            <p className='w-[80px]'>{card.services}</p>
                        </div>
                       
                        <Button className='pt-[12px] pb-[12px] w-[312px]' >
                            Sign up

                        </Button>
                    </div>


                </Card>
            ))}
        </div>
    )
}