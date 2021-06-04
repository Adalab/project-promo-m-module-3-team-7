function Fill() {
  return (
    <div className="form__fill__content hidden__container">
      <label htmlFor="fullname" className="form__fill__label">
        Nombre completo{" "}
      </label>
      <input
        type="text"
        name="name"
        id="fullname"
        className="form__fill__input js-name"
        placeholder="Ej: Sally Jill"
      />

      <label htmlFor="job" className="form__fill__label">
        Puesto{" "}
      </label>
      <input
        type="text"
        name="job"
        id="job"
        className="form__fill__input js-job"
        placeholder="Ej:Front-end unicorn"
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

      <label htmlFor="email" className="form__fill__label ">
        Email{" "}
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="form__fill__input js-email"
        placeholder="Ej:sally-hill@gmail.com"
      />

      <label htmlFor="phone" className="form__fill__label">
        Teléfono{" "}
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        className="form__fill__input js-phone"
        placeholder="Ej:555-55-55"
      />

      <label htmlFor="linkedin" className="form__fill__label">
        Linkedin{" "}
      </label>
      <input
        type="text"
        name="linkedin"
        id="linkedin"
        className="form__fill__input js-linkedin"
        placeholder="Ej: sally-jill"
      />

      <label htmlFor="github" className="form__fill__label">
        Github{" "}
      </label>
      <input
        type="text"
        name="github"
        id="github"
        className="form__fill__input js-github"
        placeholder="Ej: @Sally-Jill"
      />
    </div>
  );
}

export default Fill;
