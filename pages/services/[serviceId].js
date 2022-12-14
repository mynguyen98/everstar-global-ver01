import HeroPage from '../../components/services-page/hero'
import Business from '../../components/services-page/business/business'
import Features from '../../components/services-page/features'
import Partners from '../../components/services-page/partners'
import ContactUs from '../../components/services-page/contact-us'
import { business } from '../../data/business-data'
import { useRouter } from 'next/router'
export default function ServiceDetail({ business, sid }) {
  const { locale } = useRouter()
  return (
    <div>
      <HeroPage />
      <Business business={business[locale]} sid={sid} />
      <Features />
      <Partners />
      <ContactUs />
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const businessId = params.serviceId
  const datas = business.find((business) => business.sid === businessId)
  return {
    props: {
      business: datas,
      sid: businessId,
    },
  }
}
export async function getStaticPaths() {
  let paths = []
  business.map((item) => {
    paths.push({
      params: { serviceId: item.sid },
      locale: 'en-US',
    })
    paths.push({
      params: { serviceId: item.sid },
      locale: 'kr-KR',
    })
  })
  return {
    paths: paths,
    fallback: false,
  }
}
