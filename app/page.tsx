import { SgHeader } from '@/components/sg-header'
import { SgHero } from '@/components/sg-hero'
import { SgServices } from '@/components/sg-services'
import { SgBenefits } from '@/components/sg-benefits'
import { SgProjects } from '@/components/sg-projects'
import { SgSteps } from '@/components/sg-steps'
import { SgCalculator } from '@/components/sg-calculator'
import { SgContact } from '@/components/sg-contact'
import { SgFooter } from '@/components/sg-footer'
import { SgRevealObserver } from '@/components/sg-reveal'

export default function Home() {
  return (
    <>
      <SgRevealObserver />
      <SgHeader />
      <main>
        <SgHero />
        <SgServices />
        <SgBenefits />
        <SgProjects />
        <SgSteps />
        <SgCalculator />
        <SgContact />
      </main>
      <SgFooter />
      <a className="sg-floating-call" href="tel:+78005553535" aria-label="Позвонить">
        <span>☎</span>
      </a>
    </>
  )
}
