function SuccessMessage(props) {
  return (
    <div className="shared  js-hiddentw">
      <h3 className="shared__text">La tarjeta ha sido creada:</h3>
      <div className="shared__link js-url">
        <a href={props.cardURL} target="_blank">
          {props.cardURL}
        </a>
      </div>
      <div className="shared__button ">
        <button className="shared__button--twitter js-buttontwiter">
          <i className="fa fa-twitter" title="Comparte en Twitter"></i>
          <a
            href={`https://twitter.com/intent/tweet?url=${props.cardURL}`}
            className="share__result--twitterlink js-twitter-link"
            data-show-count="false"
            target="_blank"
            rel="noreferrer">
            Compartir en twitter
          </a>
        </button>
      </div>
    </div>
  );
}

export default SuccessMessage;
