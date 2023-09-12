import clsx from "clsx";

interface IconProps {
  name: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = ({ name, id, className, style, ...props }: IconProps) => {
  const iconClass = clsx({
    [`${className}`]: className,
    icon: true,
    ni: true,
    [`ni-${name}`]: true,
  });
  return <em className={iconClass} id={id} style={style} {...props}></em>;
};
