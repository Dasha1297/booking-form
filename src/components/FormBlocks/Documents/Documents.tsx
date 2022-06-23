import React from "react";
import { FormBlockProps } from "../../../pages/BookingPage";
import { FormikSelect } from "../../UI/FormikSelect/FormikSelect";
import FormikTextField from "../../UI/FormikTextField/FormikTextField";

type DocumentsPropsType = {
  citizenship: string;
  document: string;
  documentNumber: string;
};

export const DocumentsBlock = ({
  citizenship,
  document,
  documentNumber,
  control,
}: DocumentsPropsType & FormBlockProps) => {
  return (
    <div className='container'>
      <FormikSelect
        control={control}
        name={citizenship}
        label='Гражданство'
        menuItems={["Россия", "Беларусь"]}
        rules={{ required: "Обязательное поле" }}
      />
      <FormikSelect
        control={control}
        name={document}
        label='Тип документа'
        menuItems={[
          "Паспорт РФ",
          "Иностранный документ",
          "Паспорт СССР",
          "Свидетельство о рождении",
        ]}
        rules={{ required: "Обязательное поле" }}
      />
      <FormikTextField
        control={control}
        name={documentNumber}
        type='number'
        label='Номер документа'
        rules={{ required: "Обязательное поле" }}
      />
    </div>
  );
};

export const Documents = React.memo(DocumentsBlock);
