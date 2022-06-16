import style from "./style.module.css";

type FormHeaderPropsType = {
  number: number;
  handleClick: () => void;
};

const FormHeader = ({ number, handleClick }: FormHeaderPropsType) => {
  return (
    <div className={style.form__header}>
      <h1>Пассажир №{number}</h1>
      <button onClick={handleClick}>
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='30' height='30' rx='5' fill='#E21A1A' />
          <rect x='5' y='14' width='20' height='3' rx='1.5' fill='#F2F2F2' />
        </svg>

        <span>Удалить пассажира</span>
      </button>
    </div>
  );
};

export default FormHeader;
