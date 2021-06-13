import Input from "./Input";
import GetAvatar from "./GetAvatar";

function Fill(props) {
  return (
    <div className="form__fill__content hidden__container">
      <Input
        label="Nombre completo"
        type="text"
        name="name"
        id="name"
        className="js-name"
        placeholder="Ej: Sally Jill"
        handleFormLifting={props.handleFormLifting}
      />

      <Input
        label="Puesto"
        type="text"
        name="job"
        id="job"
        className="js-job"
        placeholder="Ej: Front-end unicorn"
        handleFormLifting={props.handleFormLifting}
      />

      <GetAvatar image={props.image} updateAvatar={props.updateAvatar} />

      <Input
        label="Email"
        type="email"
        name="email"
        id="email"
        className="js-email"
        placeholder="Ej:sally-hill@gmail.com"
        handleFormLifting={props.handleFormLifting}
      />

      <Input
        label="Teléfono"
        type="tel"
        name="phone"
        id="phone"
        className="js-phone"
        placeholder="Ej:555-55-55"
        handleFormLifting={props.handleFormLifting}
      />

      <Input
        label="Linkedin"
        type="text"
        name="linkedin"
        id="linkedin"
        className="js-linkedin"
        placeholder="Ej: sally-jill"
        handleFormLifting={props.handleFormLifting}
      />

      <Input
        label="Github"
        type="text"
        name="github"
        id="github"
        className="js-github"
        placeholder="Ej: @Sally-Jill"
        handleFormLifting={props.handleFormLifting}
      />
    </div>
  );
}

export default Fill;
