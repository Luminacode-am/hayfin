import clsx from 'clsx'


interface CardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  border?: boolean;
  children?: React.ReactNode;
  key?: string;
  width?:boolean;
}

const Card: React.FC<CardProps> = ({ children, border = "true", width = "true", key, ...props }) => {
  const BaseStayles = "bg-white  rounded-[16px] flex flex-col justify-between"
return(
  <div
    key={key}
    className = {
    clsx(
  BaseStayles,
  {"border-[#E6E6E6] border": border},
  width ? "w-[360px]" : "w-[336px]" 
)}
  >
    {children}
  </div>)
};

export default Card