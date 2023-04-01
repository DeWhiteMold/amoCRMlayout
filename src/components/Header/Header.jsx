import './Header.scss';
import logo from '../../images/logo.svg'
import viberIcon from '../../images/viber.svg'
import telegramIcon from '../../images/telegram.svg'
import whatsappIcon from '../../images/whatsapp.svg'

function Header() {
  return (
    <header className="header">
      <div className="header__upper-bar">
        <img src={logo} alt="logo" className="header__logo" />
        <nav className="header__menu">
          <button className="header__btn">Услуги</button>
          <button className="header__btn">Виджеты</button>
          <button className="header__btn">Интеграции</button>
          <button className="header__btn">Кейсы</button>
          <button className="header__btn">Сертификаты</button>
        </nav>
        <div className="header__contacts">
          <button className="header__btn">+7 555 555-55-55</button>
          <img src={telegramIcon} alt="telegram" className="header__social-icon" />
          <img src={viberIcon} alt="viber" className="header__social-icon" />
          <img src={whatsappIcon} alt="whats app" className="header__social-icon" />
        </div>
      </div>
      <span className="header__caption">
        крупный интегратор CRM в Росcии и ещё 8 странах
      </span>
    </header>
  );
}

export default Header;