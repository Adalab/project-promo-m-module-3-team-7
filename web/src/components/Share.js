import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import { useState } from "react";

function Share(props) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCreate = () => {
    fetch("/card/", {
      method: "POST",
      body: JSON.stringify(props.dataForm),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === false) {
          setError(data.error);
        } else if (data.success === true) {
          setSuccess(data.cardURL);
        }
      });
  };
  return (
    <div className="share__content hidden__container">
      <div
        onClick={handleCreate}
        className="button js-buttonCreateCard js-collapsable-container js-hidden">
        <i className="far fa-address-card button__icon"></i>
        <div className="button__text">Crear tarjeta</div>
      </div>
      {error !== "" && <ErrorMessage />}
      {success !== "" && <SuccessMessage cardURL={success} />}
    </div>
  );
}

export default Share;
