import defaultAvatar from "../images/preview2.png";

function Preview(props) {
  const avatar = props.image === "" ? defaultAvatar : props.image;

  return (
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

        <div
          className="card__pic js__profile-preview pic_background"
          style={{ backgroundImage: `url(${avatar})` }}></div>

        <ul className="card__contact">
          <li className="contact__icon contact__icon--color">
            <a
              className="icon icon--color js-preview-phone"
              href="phone"
              target="_blank"
              rel="noreferrer">
              <i className="contact__icon__pic fas fa-mobile-alt"></i>
            </a>
          </li>
          <li className="contact__icon contact__icon--color">
            <a
              className="icon icon--color js-preview-mail"
              href="mailto:"
              target="_blank"
              rel="noreferrer">
              <i className="contact__icon__pic far fa-envelope"></i>
            </a>
          </li>
          <li className="contact__icon contact__icon--color">
            <a
              className="icon icon--color js-preview-linkedin"
              href="https://linkedin.com"
              title="Linkedin contact"
              target="_blank"
              rel="noreferrer">
              <i className="contact__icon__pic fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="contact__icon contact__icon--color">
            <a
              className="icon icon--color js-preview-github"
              href=""
              target="_blank"
              rel="noreferrer">
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
  );
}
export default Preview;
