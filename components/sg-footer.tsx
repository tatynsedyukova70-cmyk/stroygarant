export function SgFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="sg-footer">
      <div className="sg-container sg-footer__top">
        <a className="sg-logo" href="#top">
          <span className="sg-logo__mark" aria-hidden="true"><i /><i /><i /></span>
          <span>СТРОЙ<span>ГАРАНТ</span></span>
        </a>
        <p>Строительство, ремонт и инженерные работы<br />для частных и коммерческих объектов.</p>
        <div className="sg-footer__address">
          <small>Офис</small>
          <span>г. Москва, ул. Строителей, 12</span>
        </div>
      </div>
      <div className="sg-container sg-footer__bottom">
        <span>© {year} СтройГарант</span>
        <a href="#">Политика конфиденциальности</a>
        <span>Информация на сайте не является публичной офертой</span>
      </div>
    </footer>
  )
}
