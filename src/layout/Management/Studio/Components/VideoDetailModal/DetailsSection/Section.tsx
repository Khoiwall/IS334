import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  id?: string;
}
export default function Section({ children, title, description, id }: Props) {
  if (id)
    return (
      <div className="px-10 pt-9" id={id}>
        <h3 className="font-['Poppins'] font-bold text-20 mb-3">{title}</h3>
        <h4 className="text-[14px] leading-[22px] mb-9 text-white/70 font-medium">
          {description}
        </h4>
        {children}
      </div>
    );
  else
    return (
      <div className="px-10 pt-9">
        <h3 className="font-['Poppins'] font-bold text-20 mb-3">{title}</h3>
        <h4 className="text-[14px] leading-[22px] mb-9 text-white/70 font-medium">
          {description}
        </h4>
        {children}
      </div>
    );
}
