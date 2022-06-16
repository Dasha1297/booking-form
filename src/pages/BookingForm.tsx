import axios from "axios";
import { FieldArray, Form, Formik } from "formik";
import * as yup from "yup";
import AddField from "../components/AddField/AddField";

import BasikInformation from "../components/BasicInformation/BasikInformation";
import Contacts from "../components/Contacts/Contacts";
import Documents from "../components/Documents/Documents";
import FormHeader from "../components/FormHeader/FormHeader";
import Rate from "../components/Rate/Rate";
import RowBlock from "../components/UI/RowBlock/RowBlock";
import StyledButton from "../components/UI/StyledButton/StyledButton";

import style from "../styles/style.module.css";

export type FormType = {
  SNILS: string;
  surname: string;
  name: string;
  patronymic: string;
  gender: "Мужской" | "Женский" | "";
  birth: string;
  citizenship: string;
  document: string;
  documentNumber: string;
  rate: "плацкарт" | "купе";
  alert: boolean;
  phone: string;
  email: string;
};

const BookingForm = () => {
  const initialValue: FormType = {
    SNILS: "",
    surname: "",
    name: "",
    patronymic: "",
    gender: "",
    birth: "0000-00-00",
    citizenship: "",
    document: "",
    documentNumber: "",
    rate: "плацкарт",
    alert: false,
    phone: "",
    email: "",
  };

  const validationSchema = yup.object().shape({
    data: yup.array().of(
      yup.object().shape({
        //SNILS: yup.number().min(11, "Номер снился содержит 11 чисел"),
        surname: yup
          .string()
          .required("Обязательное поле")
          .min(1, "Необходимо вести фамилию"),
        name: yup
          .string()
          .required("Обязательное поле")
          .min(1, "Необходимо вести имя"),
        patronymic: yup.string(),
        birth: yup.date().required("Введите дату"),
        documentNumber: yup.number().required("Обязательное поле"),
        phone: yup
          .string()
          // eslint-disable-next-line no-useless-escape
          .matches(/^[\d\+][\d\(\)\ -]{4,14}\d$/, "Введите номер телефона"),
        email: yup.string().email("Введите почту"),
      })
    ),
  });

  return (
    <>
      <Formik
        initialValues={{ data: [initialValue] }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await axios.post(
            "https://webhook.site/3e5e5a71-087b-4e2a-8539-e5dec3570967",
            values
          );
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className={style.form}>
            <FieldArray name='data'>
              {({ push, remove }) => (
                <div>
                  {values.data && values.data.length > 0
                    ? values.data.map((passenger, index) => (
                        <div key={index}>
                          <FormHeader
                            number={index + 1}
                            handleClick={() => remove(index)}
                          />
                          <RowBlock title='Основная информация'>
                            <BasikInformation
                              surname={`data[${index}].surname`}
                              name={`data[${index}].name`}
                              birth={`data[${index}].birth`}
                              patronymic={`data[${index}].patronymic`}
                              gender={`data[${index}].gender`}
                              handleChange={handleChange}
                            />
                          </RowBlock>
                          <RowBlock title='Документы'>
                            <Documents
                              citizenship={`data[${index}]. citizenship`}
                              document={`data[${index}].document`}
                              documentNumber={`data[${index}].documentNumber`}
                            />
                          </RowBlock>
                          <RowBlock title='Тариф'>
                            <Rate
                              rate={`data[${index}].rate`}
                              alert={`data[${index}].alert`}
                            />
                          </RowBlock>
                          {values.data[index].alert && (
                            <RowBlock title='Контакты'>
                              <Contacts
                                phone={`data[${index}].phone`}
                                email={`data[${index}].email`}
                              />
                            </RowBlock>
                          )}
                        </div>
                      ))
                    : null}
                  <AddField handleClick={() => push(initialValue)} />
                  <StyledButton type='submit' text='Сохранить' />
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BookingForm;
