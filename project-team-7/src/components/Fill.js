import Input from './Input';

function Fill() {
  return (
    <div className="form__fill__content hidden__container">
      <Input
        label="Nombre completo"
        type="text"
        name="name"
        id="fullname"
        className="js-name"
        placeholder="Ej: Sally Jill"
      />

      <Input
        label="Puesto"
        type="text"
        name="job"
        id="job"
        className="js-job"
        placeholder="Ej: Front-end unicorn"
      />

      <label className="form__fill__label">Imagen de perfil </label>
      <div className="form__fill__photo">
        <button className="form__fill__photo--bt js__profile-trigger">
          Añadir imagen
        </button>
        <input
          type="file"
          name="photo"
          id="photo"
          className="js__profile-upload-btn hidden js-input-text js-photo"
        />

        <div className="form__fill__photo--preview js__profile-image"></div>
      </div>

      <Input
        label="Email"
        type="email"
        name="email"
        id="email"
        className="js-email"
        placeholder="Ej:sally-hill@gmail.com"
      />

      <Input
        label="Teléfono"
        type="tel"
        name="phone"
        id="phone"
        className="js-phone"
        placeholder="Ej:555-55-55"
      />

      <Input
        label="Linkedin"
        type="text"
        name="linkedin"
        id="linkedin"
        className="js-linkedin"
        placeholder="Ej: sally-jill"
      />

      <Input
        label="Github"
        type="text"
        name="github"
        id="github"
        className="js-github"
        placeholder="Ej: @Sally-Jill"
      />
    </div>
  );
}

export default Fill;
