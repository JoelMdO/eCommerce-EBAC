import { useDispatch } from "react-redux";
import ShipmentDataForm from "./shipment_dataForm";

const DialogCheckout = () => {
  //
  const dispatch = useDispatch();

  //
  return (
    <>
      <dialog className="shipment-data_dialog" aria-modal="true" role="dialog">
        <ShipmentDataForm
          dispatch={dispatch}
          closeDialog={() => {
            const dialog = document.querySelector(
              ".shipment-data_dialog",
            ) as HTMLDialogElement;
            dialog.close();
          }}
        />
      </dialog>
    </>
  );
};

export default DialogCheckout;
