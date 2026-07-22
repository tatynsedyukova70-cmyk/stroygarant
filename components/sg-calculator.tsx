'use client'

import { useState, useCallback } from 'react'

const OBJECT_TYPES = [
  { value: 'house', label: 'Дом под ключ', price: 65000 },
  { value: 'box', label: 'Тёплый контур', price: 38000 },
  { value: 'commercial', label: 'Коммерческий объект', price: 72000 },
  { value: 'repair', label: 'Ремонт и отделка', price: 28000 },
]

const PACKAGES = [
  { value: 0.85, label: 'Базовая' },
  { value: 1, label: 'Оптимальная', defaultChecked: true },
  { value: 1.25, label: 'Премиум' },
]

const formatPrice = (value: number) =>
  `${new Intl.NumberFormat('ru-RU').format(Math.round(value / 10000) * 10000)} ₽`

export function SgCalculator() {
  const [area, setArea] = useState(120)
  const [objectType, setObjectType] = useState('house')
  const [pkg, setPkg] = useState(1)

  const selectedPrice = OBJECT_TYPES.find((t) => t.value === objectType)?.price ?? 65000
  const total = area * selectedPrice * pkg
  const progress = ((area - 40) / (400 - 40)) * 100

  const rangeStyle = {
    background: `linear-gradient(to right, #101a20 ${progress}%, rgba(16,26,32,.28) ${progress}%)`,
  }

  return (
    <section className="sg-section sg-calculator" id="calculator">
      <div className="sg-container sg-calculator__grid">
        <div className="sg-calculator__copy sg-reveal">
          <span className="sg-eyebrow sg-eyebrow--dark"><i />Онлайн-расчёт</span>
          <h2 className="sg-h2">Узнайте ориентировочную<br /><em>стоимость строительства</em></h2>
          <p>Расчёт предварительный. Точную цену подготовим после знакомства с проектом и участком.</p>
        </div>

        <form className="sg-calc-card sg-reveal" id="cost-calculator">
          <label htmlFor="sg-object-type">Тип объекта</label>
          <select
            id="sg-object-type"
            value={objectType}
            onChange={(e) => setObjectType(e.target.value)}
          >
            {OBJECT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>

          <div className="sg-range-heading">
            <label htmlFor="sg-area">Площадь</label>
            <output htmlFor="sg-area">{area} м²</output>
          </div>
          <input
            type="range"
            id="sg-area"
            min={40}
            max={400}
            step={5}
            value={area}
            style={rangeStyle}
            onChange={(e) => setArea(Number(e.target.value))}
          />
          <div className="sg-range-marks"><span>40 м²</span><span>400 м²</span></div>

          <fieldset>
            <legend>Комплектация</legend>
            {PACKAGES.map((p) => (
              <label key={p.value} className="sg-radio">
                <input
                  type="radio"
                  name="sg-package"
                  value={p.value}
                  checked={pkg === p.value}
                  onChange={() => setPkg(p.value)}
                />
                <span />
                {p.label}
              </label>
            ))}
          </fieldset>

          <div className="sg-calc-total">
            <span>Ориентировочная стоимость</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <a className="sg-button sg-button--dark" href="#contacts">
            Получить точную смету <span>↗</span>
          </a>
        </form>
      </div>
    </section>
  )
}
