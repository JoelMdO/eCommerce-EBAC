import { useState } from "react";
import FormRegister from "./form_register";
import { REGISTER_BODY } from "../../constants/register_body_register";

const BodyRegister = () => {
  //
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);

  //
  return (
    <>
      {registerSuccess ? (
        <div className="register-success_text">
          <span>{REGISTER_BODY.successEmoji}</span>
          <p>{REGISTER_BODY.successText}</p>
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
