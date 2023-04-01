import './Main.scss';

function Main() {
  return (
    <main className="main">
      <section className="caption">
        <h2 className="caption__text">
          Зарабатывайте больше
        </h2>
        <span className="caption__span">
          с WELBEX
        </span>
        <span className="caption__subscribe">
          Развиваем и контролируем продажи за вас
        </span>
      </section>
      <section className="promo">
        <h3 className="promo__title">
          Вместе с 
          <span className="promo__span">
            {' бесплатной консультацией '}
          </span>
          мы дарим:
        </h3>
        <ul className="promo__cards">
          <li className="promo__card">
            <h3 className="promo__card-title">
              Виджеты
            </h3>
            <span className="promo__card-text">
              30 готовых решений
            </span>
          </li>
          <li className="promo__card">
            <h3 className="promo__card-title">
              Dashboard
            </h3>
            <span className="promo__card-text">
              с показателями вашего бизнеса
            </span>
          </li>
          <li className="promo__card">
            <h3 className="promo__card-title">
              Skype Аудит
            </h3>
            <span className="promo__card-text">
              отдела продажи CRM системы
            </span>
          </li>
          <li className="promo__card">
            <h3 className="promo__card-title">
              35 дней
            </h3>
            <span className="promo__card-text">
              использования CRM
            </span>
          </li>
        </ul>
        <button className="promo__btn">Получить консультацию</button>
        <div className="promo__cards_mobile">
          <span className="promo__card_mobile">Skype аудит</span>
          <span className="promo__card_mobile">30 виджетов</span>
          <span className="promo__card_mobile">Dashboard</span>
          <span className="promo__card_mobile">Месяц аmoCRM</span>
        </div>
      </section>
    </main>
  );
}

export default Main;