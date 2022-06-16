import { Field } from "formik";

import style from "../../styles/style.module.css";
import { FormikSelect } from "../UI/FormikSelect/FormikSelect";

type RatePropType = {
  rate: string;
  alert: string;
};

const Rate = ({ rate, alert }: RatePropType) => {
  return (
    <div className={style.container}>
      <Field
        label='Тариф'
        name={rate}
        menuItems={["плацкарт", "купе"]}
        component={FormikSelect}
      />
      <label className={style.label}>
        <Field type='checkbox' name={alert} />
        {`Согласен на получение оповещений в случаях чрезвычайных ситуаций на железнодорожном транспорте`}
      </label>
    </div>
  );
};

export default Rate;
