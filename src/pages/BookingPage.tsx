import axios from "axios";
import { Control, FieldErrors } from "react-hook-form";
import BookingForm from "../components/BookingForm/BookingForm";

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
export interface FormBlockProps {
  control: Control<{ passengers: FormType[] }>;
  errors?: FieldErrors<{ passengers: FormType[] }>;
}

export const initialValue: FormType = {
  SNILS: "",
  surname: "",
  name: "",
  patronymic: "",
  gender: "",
  birth: "2001-01-01",
  citizenship: "",
  document: "",
  documentNumber: "",
  rate: "плацкарт",
  alert: false,
  phone: "",
  email: "",
};

const BookingPage = () => {
  const submitForm = async (values: object) => {
    await axios.post(
      "https://webhook.site/3e5e5a71-087b-4e2a-8539-e5dec3570967",
      values
    );
  };

  return <BookingForm values={initialValue} submitCallback={submitForm} />;
  /*
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
        {({ values, handleChange, handleSubmit, handleBlur }) => (
          <Form onSubmit={handleSubmit} className={style.form}>
            <FieldArray name='data'>
              {({ push, remove }) => (
                <div>
                  {values.data.length > 0
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
                              handleBlur={handleBlur}
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
  );*/
};

export default BookingPage;
