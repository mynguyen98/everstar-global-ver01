import { contactBannerData } from '../../data/constant'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classes from './contact-us.module.css'
export default function ContactUs() {
  const { locale } = useRouter()
  const data = contactBannerData[locale]
  return (
    <section className={classes.section}>
      <div className={`section-center ${classes.container}`}>
        <div className={classes.description}>
          <p>{data.description}</p>
        </div>
        <div className={classes.button}>
          <Link href='/contact-us'>{data.title}</Link>
        </div>
      </div>
    </section>
  )
}
