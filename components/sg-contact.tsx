'use client'

import { useRef, useState } from 'react'

function formatPhone(raw: string): string {
  let digits = raw.replace(/\D/g, '').slice(0, 11)
  if (!digits) return ''
  if (digits[0] === '8') digits = `7${digits.slice(1)}`
  if (digits[0] !== '7') digits = `7${digits}`.slice(0, 11)
  const parts = [`+${digits[0]}`]
  if (digits.length > 1) parts.push(` (${digits.slice(1, 4)}`)
  if (digits.length >= 4) parts.push(') ')
  if (digits.length > 4) parts.push(digits.slice(4, 7))
  if (digits.length > 7) parts.push(`-${digits.slice(7, 9)}`)
  if (digits.length > 9) parts.push(`-${digits.slice(9, 11)}`)
  return parts.join('')
}

export function SgContact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('Дом под ключ')
  const [consent, setConsent] = useState(false)
  const [nameErr, setNameErr] = useState('')
  const [phoneErr, setPhoneErr] = useState('')
  const [status, setStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const phoneDigits = phone.replace(/\D/g, '')
    const nameErr = name.trim().length < 2 ? 'Введите имя' : ''
    const phoneErr = phoneDigits.length < 10 ? 'Введите корректный номер' : ''
    setNameErr(nameErr)
    setPhoneErr(phoneErr)

    if (nameErr || phoneErr || !consent) {
      setStatus({
        type: 'error',
        msg: !consent ? 'Подтвердите согласие на обработку данных' : 'Проверьте заполненные поля',
      })
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      const payload = new URLSearchParams({ name: name.trim(), phone, service })
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: payload,
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.message || 'Ошибка отправки')
      setName(''); setPhone(''); setService('Дом под ключ'); setConsent(false)
      setStatus({ type: 'success', msg: result.message })
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Не удалось отправить заявку. Позвоните нам по телефону.'
      setStatus({ type: 'error', msg: message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="sg-contact" id="contacts">
      <div className="sg-container sg-contact__grid">
        <div className="sg-contact__copy sg-reveal">
          <span className="sg-eyebrow sg-eyebrow--light"><i />Начнём?</span>
          <h2 className="sg-h2">Расскажите о вашем<br /><em>будущем проекте</em></h2>
          <p>Позвоним, зададим несколько вопросов и предложим следующий шаг. Без навязчивых продаж.</p>
          <div className="sg-contact__details">
            <a href="tel:+78005553535">
              <small>Телефон</small>8 800 555-35-35
            </a>
            <a href="mailto:hello@stroygarant.ru">
              <small>Почта</small>hello@stroygarant.ru
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          className="sg-lead-form sg-reveal"
          id="lead-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className={`sg-field${nameErr ? ' invalid' : ''}`}>
            <label htmlFor="sg-name">Ваше имя</label>
            <input
              id="sg-name"
              name="name"
              type="text"
              autoComplete="name"
              minLength={2}
              maxLength={80}
              placeholder="Александр"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <small className="sg-field__error">{nameErr}</small>
          </div>

          <div className={`sg-field${phoneErr ? ' invalid' : ''}`}>
            <label htmlFor="sg-phone">Номер телефона</label>
            <input
              id="sg-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              placeholder="+7 (999) 000-00-00"
              required
              value={phone}
              onChange={handlePhoneInput}
            />
            <small className="sg-field__error">{phoneErr}</small>
          </div>

          <div className="sg-field">
            <label htmlFor="sg-service">Что хотите построить?</label>
            <select
              id="sg-service"
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option>Дом под ключ</option>
              <option>Коммерческий объект</option>
              <option>Ремонт и отделка</option>
              <option>Инженерные системы</option>
              <option>Нужна консультация</option>
            </select>
          </div>

          <label className="sg-consent">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span />
            <small>Я согласен на обработку персональных данных</small>
          </label>

          <button className="sg-button sg-button--accent" type="submit" disabled={loading}>
            {loading ? 'Отправляем... ' : 'Отправить заявку '}<span>↗</span>
          </button>

          {status && (
            <div className={`sg-form-status ${status.type}`} role="status" aria-live="polite">
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
