export function SgServices() {
  return (
    <section className="sg-section sg-services" id="services">
      <div className="sg-container">
        <div className="sg-section-heading sg-reveal">
          <div>
            <span className="sg-section-number">01</span>
            <span className="sg-eyebrow sg-eyebrow--dark">Наши услуги</span>
          </div>
          <h2 className="sg-h2">Строим комплексно.<br /><em>От идеи до новоселья</em></h2>
          <p>Одна команда отвечает за весь объект — так качество не теряется между разными подрядчиками.</p>
        </div>

        <div className="sg-service-grid">
          <article className="sg-service-card sg-service-card--primary sg-reveal">
            <div className="sg-service-card__number">01</div>
            <div className="sg-service-icon" aria-hidden="true">⌂</div>
            <h3>Дома под ключ</h3>
            <p>Каменные, каркасные и монолитные дома по готовому или индивидуальному проекту.</p>
            <ul>
              <li>Проектирование</li>
              <li>Фундамент и коробка</li>
              <li>Чистовая отделка</li>
            </ul>
            <a href="#contacts">Обсудить проект <span>→</span></a>
          </article>

          <article className="sg-service-card sg-reveal">
            <div className="sg-service-card__number">02</div>
            <div className="sg-service-icon" aria-hidden="true">▦</div>
            <h3>Коммерческие объекты</h3>
            <p>Офисы, магазины, кафе и производственные помещения с учётом норм и потока посетителей.</p>
            <a href="#contacts">Узнать подробнее <span>→</span></a>
          </article>

          <article className="sg-service-card sg-reveal">
            <div className="sg-service-card__number">03</div>
            <div className="sg-service-icon" aria-hidden="true">◇</div>
            <h3>Ремонт и отделка</h3>
            <p>Черновая и чистовая отделка квартир, домов и офисов. Работаем по дизайн-проекту.</p>
            <a href="#contacts">Узнать подробнее <span>→</span></a>
          </article>

          <article className="sg-service-card sg-reveal">
            <div className="sg-service-card__number">04</div>
            <div className="sg-service-icon" aria-hidden="true">⌁</div>
            <h3>Инженерные системы</h3>
            <p>Электрика, водоснабжение, отопление, вентиляция и умный дом в одном проекте.</p>
            <a href="#contacts">Узнать подробнее <span>→</span></a>
          </article>
        </div>
      </div>
    </section>
  )
}
