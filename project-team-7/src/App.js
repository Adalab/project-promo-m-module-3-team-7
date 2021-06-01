import "./App.scss";
import logoHeader from "./images/logo-u.png";
import logoFooter from "./images/logo-adalab.png";

function App() {
  return (
    <div className="App">
      <header className="header-design-card">
        <img
          src={logoHeader}
          className="header-design-card__img"
          title="Awesome Profile Cards"
          alt="Awesome Profile
          Cards Logo"
        />
      </header>

      <section className="main__content">
        <section className="main__preview">
          <button className="preview__resetbutton js-reset-btn">
            <i className="far fa-trash-alt"></i> reset
          </button>
          <div className="preview__card">
            <div className="card__line card__line--color">
              <h2 className="card__name card__name--color js-preview-name">
                nombre apellido
              </h2>
              <h3 className="card__job js-preview-job">Front-end developer</h3>
            </div>

            <div className="card__pic js__profile-preview pic_background"></div>

            <ul className="card__contact">
              <li className="contact__icon contact__icon--color">
                <a
                  className="icon icon--color js-preview-phone"
                  href="phone"
                  target="_blank">
                  <i className="contact__icon__pic fas fa-mobile-alt"></i>
                </a>
              </li>
              <li className="contact__icon contact__icon--color">
                <a
                  className="icon icon--color js-preview-mail"
                  href="mailto:"
                  target="_blank">
                  <i className="contact__icon__pic far fa-envelope"></i>
                </a>
              </li>
              <li className="contact__icon contact__icon--color">
                <a
                  className="icon icon--color js-preview-linkedin"
                  href="https://linkedin.com"
                  title="Linkedin contact"
                  target="_blank">
                  <i className="contact__icon__pic fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="contact__icon contact__icon--color">
                <a
                  className="icon icon--color js-preview-github"
                  href=""
                  target="_blank">
                  <i className="contact__icon__pic fab fa-github-alt"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="box-tooltip phone">
            <span className="tooltip phone js-tooltip">
              <a className="contact__icon__pic fas fa-mobile-alt" href=""></a>
              ¿Hablamos?
            </span>
          </div>
        </section>

        <form className="content__form js-form" action="">
          <section className="js-collapsable-container">
            <div className="form__title js-collapsable-header collapsable--close">
              <h2 className="form__text js-collapsable-header">
                <i className="far fa-object-ungroup form__iconL"></i>Diseña
              </h2>
              <i className="fas fa-angle-up form__iconR"></i>
            </div>

            <div className="colorselection hidden__container">
              <legend className="radioTitle">Colores</legend>
              <div className="design__content">
                <input
                  className="coloroption js-palette"
                  type="radio"
                  name="coloroption"
                  id="pallete"
                  value="1"
                />
                <div className="pallete1 a"></div>
                <div className="pallete1 b"></div>
                <div className="pallete1 c"></div>
              </div>

              <div className="design__content">
                <input
                  className="coloroption js-palette"
                  type="radio"
                  name="coloroption"
                  id="pallete"
                  value="2"
                />
                <div className="pallete2 a"></div>
                <div className="pallete2 b"></div>
                <div className="pallete2 c"></div>
              </div>

              <div className="design__content">
                <input
                  className="coloroption js-palette"
                  type="radio"
                  name="coloroption"
                  id="pallete"
                  value="3"
                />
                <div className="pallete3 a"></div>
                <div className="pallete3 b"></div>
                <div className="pallete3 c"></div>
              </div>

              <div className="design__content">
                <input
                  className="coloroption js-palette"
                  type="radio"
                  name="coloroption"
                  id="pallete"
                  value="4"
                />
                <div className="pallete4 a"></div>
                <div className="pallete4 b"></div>
                <div className="pallete4 c"></div>
              </div>

              <div className="design__content">
                <input
                  className="coloroption js-palette"
                  type="radio"
                  name="coloroption"
                  id="pallete"
                  value="5"
                />
                <div className="pallete5 a"></div>
                <div className="pallete5 b"></div>
                <div className="pallete5 c"></div>
              </div>
            </div>

            <div className="form__border"></div>
          </section>

          <section className="fill js-collapsable-container collapsable--close">
            <div className="form__title js-collapsable-header collapsable--close">
              <h2 className="form__text js-collapsable-header">
                <i className="far fa-keyboard form__iconL"></i>Rellena
              </h2>
              <i className="fas fa-angle-up form__iconR"></i>
            </div>

            <div className="form__fill__content hidden__container">
              <label for="fullname" className="form__fill__label">
                Nombre completo{" "}
              </label>
              <input
                type="text"
                name="name"
                id="fullname"
                className="form__fill__input js-name"
                placeholder="Ej: Sally Jill"
              />

              <label for="job" className="form__fill__label">
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

              <label for="email" className="form__fill__label ">
                Email{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form__fill__input js-email"
                placeholder="Ej:sally-hill@gmail.com"
              />

              <label for="phone" className="form__fill__label">
                Teléfono{" "}
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form__fill__input js-phone"
                placeholder="Ej:555-55-55"
              />

              <label for="linkedin" className="form__fill__label">
                Linkedin{" "}
              </label>
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                className="form__fill__input js-linkedin"
                placeholder="Ej: sally-jill"
              />

              <label for="github" className="form__fill__label">
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
          </section>
          <div className="form__border"></div>

          <section className="sharecards js-collapsable-container collapsable--close">
            <div className="form__title js-collapsable-header collapsable--close">
              <h2 className="form__text js-collapsable-header">
                <i className="fas fa-share-alt form__iconL"></i>Comparte
              </h2>
              <i className="fas fa-angle-up form__iconR"></i>
            </div>

            <div className="share__content hidden__container">
              <div className="js-response message hidden"></div>
              <div className="button js-buttonCreateCard js-collapsable-container js-hidden">
                <i className="far fa-address-card button__icon"></i>
                <div className="button__text">Crear tarjeta</div>
              </div>
            </div>

            <div className="form__border"></div>

            <div className="shared hidden js-hiddentw">
              <h3 className="shared__text">La tarjeta ha sido creada:</h3>
              <div className="shared__link js-url"></div>
              <div className="shared__button ">
                <button className="shared__button--twitter js-buttontwiter">
                  <i className="fa fa-twitter" title="Comparte en Twitter"></i>
                  <a
                    href="https://twitter.com/?lang=es"
                    className="share__result--twitterlink js-twitter-link"
                    data-show-count="false"
                    target="_blank">
                    Compartir en twitter
                  </a>
                </button>
              </div>
            </div>
          </section>
          <div className="form__border--share"></div>
        </form>
      </section>

      <footer className="footer">
        <small className="footer__copy">Awesome profile-cards @2021</small>
        <img
          className="footer__logo"
          src={logoFooter}
          alt="Logo Adalab"
          title="Adalab"
        />
      </footer>
    </div>
  );
}

export default App;
