import { FormType, initialValue } from "../../pages/BookingPage";
import { useFieldArray, useForm } from "react-hook-form";
import StyledButton from "../UI/StyledButton/StyledButton";
import FormHeader from "./FormHeader/FormHeader";
import RowBlock from "../UI/RowBlock/RowBlock";
import { BasikInformation } from "../FormBlocks/BasicInformation/BasikInformation";
import { Documents } from "../FormBlocks/Documents/Documents";
import Rate from "../FormBlocks/Rate/Rate";
import Contacts from "../FormBlocks/Contacts/Contacts";
import AddField from "../UI/AddField/AddField";

type BookingFormPropsType = {
  values: FormType;
  submitCallback: (data: object) => Promise<void>;
};

const BookingForm = ({ values, submitCallback }: BookingFormPropsType) => {
  const {
    handleSubmit,
    control,
    formState: { isDirty, isValid },
    getValues,
  } = useForm({
    mode: "all",
    defaultValues: { passengers: [values] },
  });

  const { append, remove, fields } = useFieldArray({
    control,
    name: "passengers",
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      await submitCallback(data);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form onSubmit={onSubmit} className='form'>
      {fields.map((passenger, index) => {
        return (
          <div key={index}>
            <FormHeader number={index + 1} handleClick={() => remove(index)} />
            <RowBlock title='Основная информация'>
              <BasikInformation
                surname={`passengers[${index}].surname`}
                name={`passengers[${index}].name`}
                birth={`passengers[${index}].birth`}
                patronymic={`passengers[${index}].patronymic`}
                gender={`passengers[${index}].gender`}
                control={control}
              />
            </RowBlock>

            <RowBlock title='Документы'>
              <Documents
                citizenship={`passengers[${index}].citizenship`}
                document={`passengers[${index}].document`}
                documentNumber={`passengers[${index}].documentNumber`}
                control={control}
              />
            </RowBlock>
            <RowBlock title='Тариф'>
              <Rate
                rate={`passengers[${index}].rate`}
                alert={`passengers[${index}].alert`}
                control={control}
              />
            </RowBlock>
            {getValues().passengers[index].alert === true && (
              <RowBlock title='Контакты'>
                <Contacts
                  phone={`passengers[${index}].phone`}
                  email={`passengers[${index}].email`}
                  control={control}
                />
              </RowBlock>
            )}
          </div>
        );
      })}
      <AddField handleClick={() => append(initialValue)} />
      <StyledButton
        type='submit'
        disabled={!isDirty || !isValid}
        text='Сохранить'
      />
    </form>
  );
};

export default BookingForm;
