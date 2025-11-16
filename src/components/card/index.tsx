type CardBorder = `solid` | `none`

interface CardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    border?: CardBorder
}

const card: React.FC<CardProps> = ({
    children,
    border = 'none',
    ...props
})=>{
    
}

