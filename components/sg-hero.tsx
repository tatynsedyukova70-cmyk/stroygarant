export function SgHero() {
  return (
    <section className="sg-hero">
      <div className="sg-hero__grid" aria-hidden="true" />
      <div className="sg-container sg-hero__inner">
        <div className="sg-hero__content sg-reveal is-visible">
          <span className="sg-eyebrow"><i />Строим с 2012 года</span>
          <h1 className="sg-h1">
            Надёжные дома<br /><em>для настоящей жизни</em>
          </h1>
          <p>
            Берём на себя весь путь: от проекта и сметы до чистовой отделки.
            Соблюдаем сроки, фиксируем стоимость и отвечаем за результат.
          </p>
          <div className="sg-hero__actions">
            <a className="sg-button sg-button--accent" href="#calculator">
              Рассчитать стоимость <span>↗</span>
            </a>
            <a className="sg-button sg-button--ghost" href="#projects">Смотреть проекты</a>
          </div>
          <div className="sg-hero__facts">
            <div><strong>14</strong><span>лет<br />на рынке</span></div>
            <div><strong>186</strong><span>объектов<br />сдано</span></div>
            <div><strong>7</strong><span>лет<br />гарантии</span></div>
          </div>
        </div>

        <div
          className="sg-hero__visual sg-reveal is-visible"
          aria-label="Схематичное изображение строящегося дома"
        >
          <div className="sg-visual__tag sg-visual__tag--top">
            <span>01</span> Контроль<br />каждого этапа
          </div>
          <div className="sg-building" aria-hidden="true">
            <div className="sg-building__sun" />
            <div className="sg-building__crane"><i /><b /></div>
            <div className="sg-building__roof" />
            <div className="sg-building__body">
              <span /><span /><span /><span />
            </div>
            <div className="sg-building__base" />
          </div>
          <div className="sg-visual__tag sg-visual__tag--bottom">
            <span>100%</span> Фиксированная<br />смета в договоре
          </div>
          <div className="sg-hero__stamp">КАЧЕСТВО<br />ПОД КЛЮЧ</div>
        </div>
      </div>

      <div className="sg-hero__ticker" aria-hidden="true">
        <div>
          ПРОЕКТИРОВАНИЕ <span>✦</span> СТРОИТЕЛЬСТВО <span>✦</span> РЕМОНТ <span>✦</span>
          ИНЖЕНЕРНЫЕ СИСТЕМЫ <span>✦</span> ПРОЕКТИРОВАНИЕ <span>✦</span> СТРОИТЕЛЬСТВО
        </div>
      </div>
    </section>
  )
}
