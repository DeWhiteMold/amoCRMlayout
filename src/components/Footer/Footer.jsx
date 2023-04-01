import './Footer.scss';
import viberIcon from '../../images/viber.svg'
import telegramIcon from '../../images/telegram.svg'
import whatsappIcon from '../../images/whatsapp.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__about">
          <h3 className="footer__title">О компании</h3>
          <div className="footer__block-box">
            <button className="footer__btn">Партнёрская программа</button>
            <button className="footer__btn">Вакансии</button>
          </div>
        </div>
        <div className="footer__menu">
          <h3 className="footer__title">Меню</h3>
          <div className="footer__block-box">
            <button className="footer__btn">Расчёт стоимости</button>
            <button className="footer__btn">Услуги</button>
            <button className="footer__btn">Виджеты</button>
            <button className="footer__btn">Интеграции</button>
            <button className="footer__btn">Наши клиенты</button>
            <button className="footer__btn">Кейсы</button>
            <button className="footer__btn">Благодарственные письма</button>
            <button className="footer__btn">Сертификаты</button>
            <button className="footer__btn">Блог на Youtube</button>
            <button className="footer__btn">Вопрос / Ответ</button>
          </div>
        </div>
        <div className="footer__contacts">
          <h3 className="footer__title">Контакты</h3>
          <span className="footer__contacts-text">+7 555 555-55-55</span>
          <div className="footer__social">
            <img src={telegramIcon} alt="telegram" className="footer__social-icon" />
            <img src={viberIcon} alt="viber" className="footer__social-icon" />
            <img src={whatsappIcon} alt="whats app" className="footer__social-icon" />
          </div>
          <span className="footer__contacts-text">Москва, Путевой проезд 3с1, к 902</span>
        </div>
      </div>
      <div className="footer__copyrigth">
        <span className="footer__copyrigth-caption">©WELBEX 2022. Все права защищены.</span>
        <a href='#' className="footer__copyrigth-link">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}

export default Footer;