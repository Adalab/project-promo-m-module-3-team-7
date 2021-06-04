function CollapsableHeader(props) {
  return (
    <div className="form__title js-collapsable-header collapsable--close">
      <h2 className="form__text js-collapsable-header">
        <i className="far fa-object-ungroup form__iconL"></i>
        {props.title}
      </h2>
      <i className="fas fa-angle-up form__iconR"></i>
    </div>
  );
}
export default CollapsableHeader;
