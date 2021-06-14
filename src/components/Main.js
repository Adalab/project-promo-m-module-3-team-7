import React, { useState, useEffect } from 'react';
import Preview from './Preview';
import Form from './Form';
import ls from '../services/localStorage';

function Main() {
  const [image, setImage] = useState('');
  const [dataForm, setdataForm] = useState({
    palette: 1,
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  useEffect(() => {
    const userInput = ls.get('user');
    if (userInput) {
      setdataForm(userInput);
    }
  }, []);

  // Photo
  const updateAvatar = (image) => {
    setImage(image);
    setdataForm({ ...dataForm, photo: image });
    ls.set('user', dataForm);
  };

  // Palettes
  const [ColorPreview, setColorPreview] = useState(
    `palette-preview${dataForm.palette}`
  );
  const updatePalettes = (radioButton) => {
    setdataForm({ ...dataForm, palette: radioButton });
    if (radioButton === 1) {
      setColorPreview('palette-preview1');
    } else if (radioButton === 2) {
      setColorPreview('palette-preview2');
    } else if (radioButton === 3) {
      setColorPreview('palette-preview3');
    }
    ls.set('user', dataForm);
  };

  // Inputs
  const handleFormLifting = (inputValue, inputId) => {
    //1.- accedemos al objeto dataForm con los tres puntos (...) y el nombre del objeto (dataForm)
    //2.- con los corchetes de inputId accedemos a la propiedad del objeto que coincide con el Id del input sobre el que estamos trabajando
    //3.- con inputvalue agregamos el valor que el usuario introduce en el input del formulario
    setdataForm({ ...dataForm, [inputId]: inputValue });
    ls.set('user', dataForm);
  };

  // Reset

  const handleReset = () => {
    setdataForm({
      palette: 1,
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: '',
    });
    setImage('');
    ls.clear();
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
