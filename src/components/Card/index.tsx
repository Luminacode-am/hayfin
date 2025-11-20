type CardBorder = `solid` | `none`;

interface CardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  border?: CardBorder;
  children?: React.ReactNode;
  key?: string;
}

const Card: React.FC<CardProps> = ({ children, border = "none", key, ...props }) => (
  <div
    key={key}
    className="w-[336px] bg-white max-h-[280px] rounded-[16px] border-[#E6E6E6] border flex flex-col justify-between"
  >
    {children}
  </div>
);

export default Card;