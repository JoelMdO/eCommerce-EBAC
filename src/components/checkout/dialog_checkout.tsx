import { useDispatch, useSelector } from "react-redux";
import ShipmentDataForm from "./shipment_dataForm";
import type { RootState } from "../../redux/store/store";

const DialogCheckout = () => {
  //
  const dispatch = useDispatch();
  const errors = useSelector(
    (state: RootState) => state.order.status === "failed",
  );
  const errorsText = useSelector((state: RootState) => state.order.error);
  //
  return (
    <>
      <dialog className="shipment-data_dialog" aria-modal="true" role="dialog">
        <ShipmentDataForm dispatch={dispatch} />
        {errors && (
          <p className="shipment-data_dialog-error">
            There was an error {errorsText} processing your order. Please try
            again.
          </p>
        )}
      </dialog>
    </>
  );
};

export default DialogCheckout;
