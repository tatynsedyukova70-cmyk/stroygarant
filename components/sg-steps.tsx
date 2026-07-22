export function SgSteps() {
  const steps = [
    { num: '01', title: 'Заявка и встреча', desc: 'Знакомимся, уточняем задачи, бюджет и пожелания к будущему объекту.' },
    { num: '02', title: 'Проект и смета', desc: 'Готовим проект, точный расчёт материалов, работ и календарный план.' },
    { num: '03', title: 'Договор', desc: 'Фиксируем цену, сроки, этапы оплаты и гарантийные обязательства.' },
    { num: '04', title: 'Строительство', desc: 'Выполняем работы, контролируем качество и регулярно присылаем отчёты.' },
    { num: '05', title: 'Сдача объекта', desc: 'Проводим финальную проверку, подписываем акт и передаём ключи.' },
  ]

  return (
    <section className="sg-section sg-steps" id="steps">
      <div className="sg-container">
        <div className="sg-steps__heading sg-reveal">
          <span className="sg-eyebrow sg-eyebrow--light"><i />Этапы работы</span>
          <h2 className="sg-h2">От первого звонка<br /><em>до передачи ключей</em></h2>
        </div>
        <div className="sg-steps__line">
          {steps.map((s) => (
            <article key={s.num} className="sg-step sg-reveal">
              <span>{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
