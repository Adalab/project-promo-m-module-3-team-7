import CollapsableHeader from './CollapsableHeader';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function Form() {
  return (
    <form className="content__form js-form" action="">
      <section className="js-collapsable-container">
        <CollapsableHeader
          title="Diseña"
          icon="far fa-object-ungroup form__iconL"
        />
        <Design />
      </section>

      <section className="fill js-collapsable-container collapsable--close">
        <CollapsableHeader title="Rellena" icon="far fa-keyboard form__iconL" />
        <Fill />
      </section>
      <div className="form__border"></div>

      <section className="sharecards js-collapsable-container collapsable--close">
        <CollapsableHeader
          title="Comparte"
          icon="fas fa-share-alt form__iconL"
        />
        <Share />
      </section>
      <div className="form__border--share"></div>
    </form>
  );
}
export default Form;
