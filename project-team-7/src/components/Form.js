import CollapsableHeader from "./CollapsableHeader";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Form() {
  return (
    <form className="content__form js-form" action="">
      <section className="js-collapsable-container">
        <CollapsableHeader title="Diseña" />
        <Design />
      </section>

      <section className="fill js-collapsable-container collapsable--close">
        <CollapsableHeader title="Rellena" />
        <Fill />
      </section>
      <div className="form__border"></div>

      <section className="sharecards js-collapsable-container collapsable--close">
        <CollapsableHeader title="Comparte" />
        <Share />
      </section>
      <div className="form__border--share"></div>
    </form>
  );
}
export default Form;
