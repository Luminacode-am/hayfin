import clsx from 'clsx'


interface CardProps extends React.HTMLAttributes<HTMLElement> {
  border?: boolean;
  children?: React.ReactNode;
  key?: string;
  width:string;
}

const Card: React.FC<CardProps> = ({ children, border = "true", key, ...props }) => {
  const baseStayles = "bg-white  rounded-[16px] flex flex-col justify-between "
return(

  <div
    key={key}
    className = {
    clsx(
  baseStayles,
  {"border-[#E6E6E6] border": border},
  
)}

 
  >
    {children}
  </div>)
};

export default Card