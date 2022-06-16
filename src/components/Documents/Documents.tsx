import { Field } from "formik";
import style from "../../styles/style.module.css";
import { FormikSelect } from "../UI/FormikSelect/FormikSelect";
import { FormikTextField } from "../UI/FormikTextField/FormikTextField";

type DocumentsPropsType = {
  citizenship: string;
  document: string;
  documentNumber: string;
};
const Documents = ({
  citizenship,
  document,
  documentNumber,
}: DocumentsPropsType) => {
  return (
    <div className={style.container}>
      <Field
        component={FormikSelect}
        name={citizenship}
        value={citizenship}
        label='Гражданство'
        menuItems={["Россия", "Беларусь"]}
      />
      <Field
        component={FormikSelect}
        name={document}
        value={document}
        label='Тип документа'
        menuItems={[
          "Паспорт РФ",
          "Иностранный документ",
          "Паспорт СССР",
          "Свидетельство о рождении",
        ]}
      />
      <Field
        component={FormikTextField}
        name={documentNumber}
        type='number'
        label='Номер документа'
      />
    </div>
  );
};

export default Documents;
