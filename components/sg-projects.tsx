export function SgProjects() {
  return (
    <section className="sg-section sg-projects" id="projects">
      <div className="sg-container">
        <div className="sg-section-heading sg-section-heading--row sg-reveal">
          <div>
            <span className="sg-section-number">02</span>
            <span className="sg-eyebrow sg-eyebrow--dark">Наши проекты</span>
          </div>
          <h2 className="sg-h2">Дома, которыми<br /><em>мы гордимся</em></h2>
          <p>Каждый проект создаём вокруг привычек семьи, особенностей участка и реального бюджета.</p>
        </div>

        <div className="sg-project-grid">
          <article className="sg-project sg-project--large sg-reveal">
            <div className="sg-project__art sg-project__art--forest" aria-hidden="true">
              <div className="sg-house sg-house--one"><i /><b /><span /></div>
            </div>
            <div className="sg-project__info">
              <div>
                <small>ЧАСТНЫЙ ДОМ</small>
                <h3>Дом «Сосновый»</h3>
              </div>
              <dl>
                <div><dt>Площадь</dt><dd>184 м²</dd></div>
                <div><dt>Срок</dt><dd>9 месяцев</dd></div>
              </dl>
            </div>
          </article>

          <article className="sg-project sg-reveal">
            <div className="sg-project__art sg-project__art--sand" aria-hidden="true">
              <div className="sg-house sg-house--two"><i /><b /><span /></div>
            </div>
            <div className="sg-project__info">
              <div>
                <small>ЧАСТНЫЙ ДОМ</small>
                <h3>Дом «Терра»</h3>
              </div>
              <dl>
                <div><dt>Площадь</dt><dd>126 м²</dd></div>
                <div><dt>Срок</dt><dd>7 месяцев</dd></div>
              </dl>
            </div>
          </article>

          <article className="sg-project sg-reveal">
            <div className="sg-project__art sg-project__art--graphite" aria-hidden="true">
              <div className="sg-house sg-house--three"><i /><b /><span /></div>
            </div>
            <div className="sg-project__info">
              <div>
                <small>КОММЕРЧЕСКИЙ</small>
                <h3>Офис «Контур»</h3>
              </div>
              <dl>
                <div><dt>Площадь</dt><dd>340 м²</dd></div>
                <div><dt>Срок</dt><dd>11 месяцев</dd></div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
