'use client'

import { useEffect } from 'react'

export function SgRevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -45px' }
    )

    document.querySelectorAll<HTMLElement>('.sg-reveal:not(.is-visible)').forEach((el) =>
      observer.observe(el)
    )

    return () => observer.disconnect()
  }, [])

  return null
}
