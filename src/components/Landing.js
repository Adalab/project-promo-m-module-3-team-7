import Footer from './Footer';

function Landing() {
  return (
    <>
      <header className="header">
        <img
          src="./assets/images/logo-u.png"
          className="header__img"
          title="Awesome Profile Cards"
          alt="Awesome Profile
    Cards Logo"
        />
      </header>

      <main className="main-index">
        <h1 className="main-index__title">Crea tu tarjeta de visita</h1>
        <p className="main-index__subtitle">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
        <ul className="main-index__options">
          <li className="options__item">
            <i className="item__pic far fa-object-ungroup"></i>
            <h2 className="item__title">Diseña</h2>
          </li>
          <li className="options__item">
            <i className="item__pic far fa-keyboard"></i>
            <h2 className="item__title">Rellena</h2>
          </li>
          <li className="options__item">
            <i className="item__pic fas fa-share-alt"></i>
            <h2 className="item__title">Comparte</h2>
          </li>
        </ul>
        <nav className="main-index__nav">
          <a className="nav__startlink" href="./design-card.html" title="">
            Comenzar
          </a>
        </nav>
      </main>
      <Footer />
    </>
  );
}

export default Landing;