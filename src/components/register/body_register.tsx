import { useState } from "react";
import FormRegister from "./form_register";

const BodyRegister = () => {
  //
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);

  //
  return (
    <>
      {registerSuccess ? (
        <div className="register-success_text">
          <span>🛍</span>
          <p>Registro exitoso, serás redirigido al login</p>
        </div>
      ) : (
        <>
          <FormRegister setRegisterSuccess={setRegisterSuccess} />
        </>
      )}
    </>
  );
};

export default BodyRegister;
