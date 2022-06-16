import style from "./style.module.css";

type AddFieldPropType = {
  handleClick: () => void;
};

const AddField = ({ handleClick }: AddFieldPropType) => {
  return (
    <button className={style.add__button} onClick={handleClick}>
      <svg
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='30' height='30' rx='5' fill='#E21A1A' />
        <rect x='5' y='14' width='20' height='3' rx='1.5' fill='#F2F2F2' />
        <rect
          x='13'
          y='25'
          width='20'
          height='3'
          rx='1.5'
          transform='rotate(-90 13 25)'
          fill='#F2F2F2'
        />
      </svg>
      <span>Добавить пассажира</span>
    </button>
  );
};

export default AddField;
