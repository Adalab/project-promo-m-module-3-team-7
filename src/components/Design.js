import Palettes from "./Palettes";

function Design() {
  return (
    <>
      <div className="colorselection hidden__container">
        <legend className="radioTitle">Colores</legend>
        <Palettes value="1" />
        <Palettes value="2" />
        <Palettes value="3" />
        <Palettes value="4" />
        <Palettes value="5" />
      </div>
      <div className="form__border"></div>
    </>
  );
}

export default Design;
