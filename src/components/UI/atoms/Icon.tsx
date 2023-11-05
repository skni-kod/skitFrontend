
interface IIconProps {
  icon: string;
}

const Icon = (props: IIconProps) => {
  return <span className="material-icons">{props.icon}</span>;
};

export default Icon;