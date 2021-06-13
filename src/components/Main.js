import React, { useState, useEffect } from "react";
import Preview from "./Preview";
import Form from "./Form";

function Main() {
  const [image, setImage] = useState("");
  const [dataForm, setdataForm] = useState({
    palette: 1,
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: "",
  });

  const updateAvatar = (image) => {
    setImage(image);
    setdataForm({ ...dataForm, photo: image });
  };

  const [ColorPreview, setColorPreview] = useState("palette-preview1");
  const updatePalettes = (radioButton) => {
    setdataForm({ ...dataForm, palette: radioButton });
    if (radioButton === 1) {
      setColorPreview("palette-preview1");
    } else if (radioButton === 2) {
      setColorPreview("palette-preview2");
    } else if (radioButton === 3) {
      setColorPreview("palette-preview3");
    }
  };

  const handleReset = () => {
    setdataForm({
      palette: 1,
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    setImage("");
    /*Despintar value en inputs del form*/
  };

  /*useEffect(() => {});*/

  const handleFormLifting = (inputValue, inputId) => {
    //1.- accedemos al objeto dataForm con los tres puntos (...) y el nombre del objeto (dataForm)
    //2.- con los corchetes de inputId accedemos a la propiedad del objeto que coincide con el Id del input sobre el que estamos trabajando
    //3.- con inputvalue agregamos el valor que el usuario introduce en el input del formulario
    setdataForm({ ...dataForm, [inputId]: inputValue });
  };

  return (
    <section className="main__content">
      <Preview
        image={image}
        dataForm={dataForm}
        reset={handleReset}
        ColorPreview={ColorPreview}
      />
      <Form
        image={image}
        dataForm={dataForm}
        updateAvatar={updateAvatar}
        updatePalettes={updatePalettes}
        handleFormLifting={handleFormLifting}
      />
    </section>
  );
}

export default Main;
