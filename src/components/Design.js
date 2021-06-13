import Palettes from "./Palettes";

function Design(props) {
  return (
    <>
      <div className="colorselection hidden__container">
        <legend className="radioTitle">Colores</legend>
        <Palettes
          value="1"
          updatePalettes={props.updatePalettes}
          dataForm={props.dataForm}
          /*checked={props.dataForm.palette === 1}*/
        />
        <Palettes
          value="2"
          updatePalettes={props.updatePalettes}
          dataForm={props.dataForm}
          /*checked={props.dataForm.palette === 2}*/
        />
        <Palettes
          value="3"
          updatePalettes={props.updatePalettes}
          dataForm={props.dataForm}
          /*checked={props.dataForm.palette === 3}*/
        />
      </div>
      <div className="form__border"></div>
    </>
  );
}

export default Design;
