import { FormikSelect } from "../../UI/FormikSelect/FormikSelect";
import { FormBlockProps } from "../../../pages/BookingPage";
import CheckBox from "../../UI/CheckBox/CheckBox";

type RatePropType = {
  rate: string;
  alert: string;
};

const Rate = ({ rate, alert, control }: RatePropType & FormBlockProps) => {
  return (
    <div className='container'>
      <FormikSelect
        label='Тариф'
        name={rate}
        menuItems={["плацкарт", "купе"]}
        control={control}
      />
      <CheckBox
        name={alert}
        control={control}
        label={`Согласен на получение оповещений в случаях чрезвычайных ситуаций на железнодорожном транспорте`}
      />
    </div>
  );
};

export default Rate;
