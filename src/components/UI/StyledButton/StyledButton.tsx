import style from "./style.module.css";

type StyledButtonPropType = {
  type: "button" | "submit" | "reset";
  text: string;
};

const StyledButton = ({ type, text }: StyledButtonPropType) => {
  return (
    <button type={type} className={style.button}>
      {text}
    </button>
  );
};

export default StyledButton;
