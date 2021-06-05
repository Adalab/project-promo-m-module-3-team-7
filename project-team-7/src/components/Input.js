function Input(props) {
  return (
    <>
      <label htmlFor={props.id} className="form__fill__label">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className={'form__fill__input ' + props.className}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default Input;
