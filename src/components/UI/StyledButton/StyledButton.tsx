import style from "./style.module.css";

type StyledButtonPropType = {
  type: "button" | "submit" | "reset";
  text: string;
  disabled: boolean;
};

const StyledButton = ({ type, text, disabled }: StyledButtonPropType) => {
  return (
    <button type={type} className={style.button} disabled={disabled}>
      {text}
    </button>
  );
};

export default StyledButton;
