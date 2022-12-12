import LogoSymbol from '../icons/logo/logo-symbol'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { footerBusinessContent } from '../../data/constant'
import classes from './footer.module.css'
import FooterContent from './footer-content'
export default function MainFooter() {
  const { locale } = useRouter()
  const footerData = footerBusinessContent[locale]
  const { company, services, contact } = footerData
  console.log(company, services, contact)
  // console.log(locale)
  return (
    <section className={classes.section}>
      <div className='section-center'>
        <div className={classes.header}>
          <span>
            <LogoSymbol />
          </span>
          <p>EVERSTAR GLOBAL JOINT STOCK COMPANY</p>
        </div>
        <div className={classes.content}>
          {/* <div>
            <h2>{company.title}</h2>
            <ul>
              {company.listItem.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href='/'>{item.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h2>{services.title}</h2>
            <ul>
              {services.listItem.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div> */}
          {/* <div>
            <h2>{contact.title}</h2>
            <ul>
              {contact.listItem.map((item, index) => {
                return (
                  <li key={index}>
                    {item.icon}
                    <Link href='/'>{item.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div> */}
          <FooterContent content={company} isLink={true} />
          <FooterContent content={services} isLink={true} />
          <FooterContent content={contact} isLink={false} />
        </div>
        <div className={classes.copyright}>
          <p>
            © 2022 <span className={classes.highlight}>EVERSTAR GLOBAL</span>{' '}
            All rights reserved
          </p>
        </div>
      </div>
    </section>
  )
}
