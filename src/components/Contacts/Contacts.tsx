import { Field } from "formik";
import style from "../../styles/style.module.css";
import { FormikTextField } from "../UI/FormikTextField/FormikTextField";

type ContactsPropType = {
  email: string;
  phone: string;
};
const Contacts = ({ email, phone }: ContactsPropType) => {
  return (
    <>
      <p>
        Телефон и электронная почта могут быть использованы для уведомления об
        изменении условий перевозки, для экстренных сообщений, а также для
        информирования при оформлении УПДЖД для поездки в Калининград
      </p>
      <div className={style.container}>
        <Field
          component={FormikTextField}
          name={email}
          label='Электронная почта'
        />
        <Field component={FormikTextField} name={phone} label='Телефон' />
      </div>
    </>
  );
};

export default Contacts;
