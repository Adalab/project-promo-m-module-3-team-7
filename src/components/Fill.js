import Input from "./Input";
import GetAvatar from "./GetAvatar";

function Fill(props) {
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
      <GetAvatar image={props.image} updateAvatar={props.updateAvatar} />

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
