import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

function Share() {
  return (
    <>
      <div className="share__content hidden__container">
        <ErrorMessage />

        <div className="button js-buttonCreateCard js-collapsable-container js-hidden">
          <i className="far fa-address-card button__icon"></i>
          <div className="button__text">Crear tarjeta</div>
        </div>
      </div>

      <div className="form__border"></div>

      <SuccessMessage />
    </>
  );
}

export default Share;
