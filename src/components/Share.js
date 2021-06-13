import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

function Share() {
  const handleCreate = () => {};
  return (
    <div className="share__content hidden__container">
      <div
        onClick={handleCreate}
        className="button js-buttonCreateCard js-collapsable-container js-hidden">
        <i className="far fa-address-card button__icon"></i>
        <div className="button__text">Crear tarjeta</div>
      </div>
      <ErrorMessage />
      <SuccessMessage />
    </div>
  );
}

export default Share;
