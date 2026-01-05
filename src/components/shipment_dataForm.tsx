import { CreditCard, House, Phone, UserRound } from "lucide-react";
import type { AppDispatch } from "../store/store";
import { useForm } from "react-hook-form";
import { formPayment } from "../utils/form_submission";
import type { ShipmentDataType } from "../types/form_type";

const ShipmentDataForm = ({
  dispatch,
  closeDialog,
}: {
  dispatch: AppDispatch;
  closeDialog: () => void;
}) => {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShipmentDataType>();
  const onsubmit = () => formPayment(dispatch, closeDialog);
  //
  return (
    <>
      <form className="checkout-form" onSubmit={handleSubmit(onsubmit)}>
        <h2>Datos de envío</h2>
        <div className="checkout-form_name">
          <UserRound size={16} />
          <input
            type="text"
            placeholder="Nombre completo"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="checkout-form-error">Nombre incorrecto</p>
          )}
        </div>
        <div className="checkout-form_address">
          <House size={16} />
          <input
            type="text"
            placeholder="Dirección"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <p className="checkout-form-error">Dirección incorrecta</p>
          )}
        </div>
        <div className="checkout-form_card">
          <CreditCard size={16} />
          <input
            type="text"
            placeholder="Credit Card"
            {...register("creditCard", { required: true })}
          />
          {errors.creditCard && (
            <p className="checkout-form-error">Tarjeta incorrecta</p>
          )}
        </div>
        <div className="checkout-form_phone">
          <Phone size={16} />
          <input
            type="tel"
            placeholder="Telefono"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <p className="checkout-form-error">Teléfono incorrecto</p>
          )}
        </div>
        <button className="checkout-form_submit-button" type="submit">
          Pagar
        </button>
      </form>
    </>
  );
};
export default ShipmentDataForm;
