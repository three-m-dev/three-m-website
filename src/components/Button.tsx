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
  const objectClass = "py-2.5 px-4 bg-primary text-white uppercase rounded-md";
  switch (props.type) {
    case "button":
      return (
        <button onClick={props.onClick} className={objectClass}>
          {props.text}
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
