import { Field } from "formik";
import { ChangeEvent } from "react";

import { FormikSelect } from "../UI/FormikSelect/FormikSelect";
import { FormikTextField } from "../UI/FormikTextField/FormikTextField";

import style from "../../styles/style.module.css";

type BasikInformationPropsType = {
  surname: string;
  name: string;
  patronymic: string;
  gender: string;
  birth: string;
  handleChange: (e: ChangeEvent<any>) => void;
};

const BasikInformation = ({
  surname,
  name,
  patronymic,
  gender,
  birth,
  handleChange,
}: BasikInformationPropsType) => {
  return (
    <div className={style.container}>
      <Field component={FormikTextField} name={surname} label='Фамилия' />
      <Field component={FormikTextField} name={name} label='Имя' />
      <Field
        component={FormikTextField}
        name={patronymic}
        label='Отчество при наличие'
      />
      <Field
        component={FormikSelect}
        name={gender}
        value={gender}
        label='Пол'
        menuItems={["Мужской", "Женский"]}
      />
      <Field
        component={FormikTextField}
        name={birth}
        type='date'
        label='Дата рождения'
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export default BasikInformation;
