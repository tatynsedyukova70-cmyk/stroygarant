'use client'

import { useEffect, useRef, useState } from 'react'

export function SgHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header ref={headerRef} className={`sg-header${scrolled ? ' scrolled' : ''}`} id="top">
      <div className="sg-container sg-header__inner">
        <a className="sg-logo" href="#top" aria-label="СтройГарант — на главную">
          <span className="sg-logo__mark" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span>СТРОЙ<span>ГАРАНТ</span></span>
        </a>

        <button
          className={`sg-menu-button${menuOpen ? ' active' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="sg-main-nav"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav
          className={`sg-nav${menuOpen ? ' open' : ''}`}
          id="sg-main-nav"
          aria-label="Основная навигация"
        >
          <a href="#services" onClick={closeMenu}>Услуги</a>
          <a href="#projects" onClick={closeMenu}>Проекты</a>
          <a href="#steps" onClick={closeMenu}>Как работаем</a>
          <a href="#contacts" onClick={closeMenu}>Контакты</a>
        </nav>

        <a className="sg-header__phone" href="tel:+78005553535">
          <small>Ежедневно 8:00–20:00</small>
          8 800 555-35-35
        </a>
      </div>
    </header>
  )
}
