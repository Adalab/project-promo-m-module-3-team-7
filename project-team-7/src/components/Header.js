import logoHeader from '../images/logo-u.png';

function Header() {
  return (
    <header className='header-design-card'>
      <img
        src={logoHeader}
        className='header-design-card__img'
        title='Awesome Profile Cards'
        alt='Awesome Profile
    Cards Logo'
      />
    </header>
  );
}

export default Header;
