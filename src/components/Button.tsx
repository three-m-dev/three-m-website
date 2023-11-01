import { Link } from "react-router-dom";

type BaseProps = {
  text: string;
};

type ButtonProps = BaseProps & {
  type: "button";
  onClick: () => void;
};

type LinkProps = BaseProps & {
  type: "link";
  to: string;
};

type Props = ButtonProps | LinkProps;

const Button = (props: Props) => {
  const objectClass =
    "py-2 px-4 border-2 border-primary uppercase text-primary font-bold text-md hover:text-white hover:bg-primary transition-all duration-300 rounded";
  switch (props.type) {
    case "button":
      return (
        <button onClick={props.onClick} className={objectClass}>
          {props.text}""
        </button>
      );
    case "link":
      return (
        <Link to={props.to} className={objectClass}>
          {props.text}
        </Link>
      );
    default:
      return null;
  }
};

export default Button;
