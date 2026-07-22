export function SgBenefits() {
  return (
    <section className="sg-section sg-benefits">
      <div className="sg-container sg-benefits__grid">
        <div className="sg-benefits__visual sg-reveal" aria-hidden="true">
          <div className="sg-blueprint">
            <span className="sg-blueprint__label">ПРОЕКТ СГ–128</span>
            <div className="sg-blueprint__plan"><i /><b /><em /></div>
            <small>ПЛОЩАДЬ 128 М²</small>
          </div>
          <div className="sg-quality-card">
            <strong>186</strong>
            <span>объектов<br />построено</span>
          </div>
        </div>

        <div className="sg-benefits__content">
          <span className="sg-eyebrow sg-eyebrow--light sg-reveal"><i />Почему мы</span>
          <h2 className="sg-h2 sg-reveal">Спокойная стройка<br /><em>без неприятных сюрпризов</em></h2>
          <div className="sg-benefit-list">
            <div className="sg-benefit sg-reveal">
              <span>01</span>
              <div>
                <h3>Цена не растёт по ходу работ</h3>
                <p>Фиксируем подробную смету и стоимость материалов до начала стройки.</p>
              </div>
            </div>
            <div className="sg-benefit sg-reveal">
              <span>02</span>
              <div>
                <h3>Всегда знаете, что на объекте</h3>
                <p>Отправляем фотоотчёты и показываем выполненные этапы в личном кабинете.</p>
              </div>
            </div>
            <div className="sg-benefit sg-reveal">
              <span>03</span>
              <div>
                <h3>Контроль качества инженером</h3>
                <p>Технический надзор принимает скрытые работы до перехода к следующему этапу.</p>
              </div>
            </div>
            <div className="sg-benefit sg-reveal">
              <span>04</span>
              <div>
                <h3>Гарантия до 7 лет</h3>
                <p>Условия гарантии прописаны в договоре. Остаёмся на связи после сдачи дома.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
