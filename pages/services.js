import HeroPage from '../components/services-page/hero'
import Business from '../components/services-page/business/business'
import Link from 'next/link'
export default function ServiceDetail() {
  return (
    <div>
      <HeroPage />
      <Business />
      <Link href='/services/app-developing'>direct</Link>
    </div>
  )
}
