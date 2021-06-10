import React, { useState } from 'react';
import Preview from './Preview';
import Form from './Form';

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

  const updateAvatar = (image) => {
    setImage(image);
    setdataForm({ ...dataForm, photo: image });
  };

  const handleFormLifting = (inputValue, inputId) => {
    //1.- accedemos al objeto dataForm con los tres puntos (...) y el nombre del objeto (dataForm)
    //2.- con los corchetes de inputId accedemos a la propiedad del objeto que coincide con el Id del input sobre el que estamos trabajando
    //3.- con inputvalue agregamos el valor que el usuario introduce en el input del formulario
    setdataForm({ ...dataForm, [inputId]: inputValue });
  };

  return (
    <section className="main__content">
      <Preview image={image} dataForm={dataForm} />
      <Form
        image={image}
        updateAvatar={updateAvatar}
        handleFormLifting={handleFormLifting}
      />
    </section>
  );
}

export default Main;
