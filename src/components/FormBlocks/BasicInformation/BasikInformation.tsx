import React from "react";
import FormikTextField from "../../UI/FormikTextField/FormikTextField";
import { FormBlockProps } from "../../../pages/BookingPage";
import { FormikSelect } from "../../UI/FormikSelect/FormikSelect";

type BasikInformationPropsType = {
  surname: string;
  name: string;
  patronymic: string;
  gender: string;
  birth: string;
};

export function BasikInformationBlock({
  surname,
  name,
  patronymic,
  gender,
  birth,
  control,
}: BasikInformationPropsType & FormBlockProps) {
  return (
    <div className='container'>
      <FormikTextField
        name={surname}
        rules={{ required: "Данное поле обязательно для заполнения" }}
        control={control}
        label='Фамилия'
        type='string'
      />
      <FormikTextField
        name={name}
        rules={{ required: "Данное поле обязательно для заполнения" }}
        control={control}
        label='Имя'
        type='string'
      />
      <FormikTextField
        name={patronymic}
        label='Отчество при наличие'
        control={control}
        type='string'
      />
      <FormikSelect
        name={gender}
        label='Пол'
        menuItems={["Мужской", "Женский"]}
        control={control}
      />
      <FormikTextField
        name={birth}
        type='date'
        label='Дата рождения'
        control={control}
        InputLabelProps={{ shrink: true }}
      />
    </div>
  );
}

export const BasikInformation = React.memo(BasikInformationBlock);
