import FormikTextField from "../../UI/FormikTextField/FormikTextField";
import { FormBlockProps } from "../../../pages/BookingPage";

type ContactsPropType = {
  email: string;
  phone: string;
};
const Contacts = ({
  email,
  phone,
  control,
}: ContactsPropType & FormBlockProps) => {
  return (
    <>
      <p>
        Телефон и электронная почта могут быть использованы для уведомления об
        изменении условий перевозки, для экстренных сообщений, а также для
        информирования при оформлении УПДЖД для поездки в Калининград
      </p>
      <div className='container'>
        <FormikTextField
          name={email}
          label='Электронная почта'
          control={control}
          type='email'
        />
        <FormikTextField
          name={phone}
          label='Телефон'
          control={control}
          type='tel'
        />
      </div>
    </>
  );
};

export default Contacts;
