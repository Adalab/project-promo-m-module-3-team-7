function Palettes(props) {
  return (
    <div className="design__content">
      <input
        className="coloroption js-palette"
        type="radio"
        name="coloroption"
        id="pallete"
        value={props.value}
      />
      <div className={"pallete" + props.value + " a"}></div>
      <div className={"pallete" + props.value + " b"}></div>
      <div className={"pallete" + props.value + " c"}></div>
    </div>
  );
}

export default Palettes;
