import Link from 'next/link'

import Logo from '../icons/logo/logo-company'
import classes from './main-navigation.module.css'
import IconChevronDown from '../icons/icons/icon-chevron-down'
import { useRouter } from 'next/router'
function MainNavigation() {
  const router = useRouter()
  const { locale, asPath } = router
  console.log(asPath)
  console.log(router)
  return (
    <nav className={classes.navContainer}>
      <div className={classes.navCenter}>
        <div className={classes.navLogo}>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <ul className={classes.navLinks}>
          <li>
            <Link href='/' scroll={false}>
              Company
            </Link>
          </li>
          <li>
            <Link href='/services/app-developing' scroll={false}>
              Services
            </Link>
          </li>
          <li>
            <Link href='/culture' scroll={false}>
              Culture
            </Link>
          </li>
          <li>
            <Link href='/portfolio' scroll={false}>
              Porfolio
            </Link>
          </li>
        </ul>
        <div className={classes.language}>
          <div className='center-list'>
            <span
              style={{
                fontSize: '2rem',
                paddingRight: '1rem',
                fontWeight: '500',
              }}
            >
              {locale === 'en' ? 'EN' : 'KR'}
            </span>
            <IconChevronDown />
          </div>
          <ul className={classes.langList}>
            <li>
              <Link href={asPath} locale='en' scroll={false}>
                EN
              </Link>
            </li>
            <li>
              <Link href={asPath} locale='kr' scroll={false}>
                KR
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MainNavigation
