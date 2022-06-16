import style from "./style.module.css";

type RowBlockPropsType = {
  title: string;
  children: JSX.Element;
};
const RowBlock = ({ title, children }: RowBlockPropsType) => {
  return (
    <div className={style.row}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default RowBlock;
