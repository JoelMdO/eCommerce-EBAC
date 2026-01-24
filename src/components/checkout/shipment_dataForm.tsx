import { CreditCard, House, Phone, UserRound } from "lucide-react";
import type { AppDispatch } from "../../redux/store/store";
import { useForm } from "react-hook-form";
import { formPayment } from "../../utils/form_submission";
import type { ShipmentDataType } from "../../types/form_type";
import { CHECKOUT_SHIPMENT } from "../../constants/checkout_shipment_dataForm";

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
        <h2 lang="es">{CHECKOUT_SHIPMENT.heading}</h2>
        <div className="checkout-form_name">
          <UserRound size={16} />
          <input
            type="text"
            placeholder={CHECKOUT_SHIPMENT.placeholderName}
            aria-label={CHECKOUT_SHIPMENT.ariaName}
            aria-placeholder={CHECKOUT_SHIPMENT.placeholderName}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="checkout-form-error">{CHECKOUT_SHIPMENT.nameError}</p>
          )}
        </div>
        <div className="checkout-form_address">
          <House size={16} />
          <input
            type="text"
            placeholder={CHECKOUT_SHIPMENT.placeholderAddress}
            aria-label={CHECKOUT_SHIPMENT.placeholderAddress}
            aria-placeholder={CHECKOUT_SHIPMENT.placeholderAddress}
            {...register("address", { required: true })}
          />
          {errors.address && (
            <p className="checkout-form-error">
              {CHECKOUT_SHIPMENT.addressError}
            </p>
          )}
        </div>
        <div className="checkout-form_card">
          <CreditCard size={16} />
          <input
            type="text"
            placeholder={CHECKOUT_SHIPMENT.placeholderCard}
            aria-label={CHECKOUT_SHIPMENT.placeholderCard}
            aria-placeholder={CHECKOUT_SHIPMENT.placeholderCard}
            {...register("creditCard", { required: true })}
          />
          {errors.creditCard && (
            <p className="checkout-form-error" lang="es">
              {CHECKOUT_SHIPMENT.cardError}
            </p>
          )}
        </div>
        <div className="checkout-form_phone">
          <Phone size={16} />
          <input
            type="tel"
            placeholder={CHECKOUT_SHIPMENT.placeholderPhone}
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <p className="checkout-form-error" lang="es">
              {CHECKOUT_SHIPMENT.phoneError}
            </p>
          )}
        </div>
        <button className="checkout-form_submit-button" type="submit" lang="es">
          {CHECKOUT_SHIPMENT.payButton}
        </button>
      </form>
    </>
  );
};
export default ShipmentDataForm;
