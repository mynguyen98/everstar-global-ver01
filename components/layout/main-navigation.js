import Link from "next/link";

import Logo from "../icons/logo/logo-company";
import classes from "./main-navigation.module.css";
import IconChevronDown from "../icons/icons/icon-chevron-down";
import { useLangContext } from "../../store/lang-switch-context";
function MainNavigation() {
  console.log(useLangContext());
  const { currentLocale, setToggleLocale } = useLangContext();
  console.log(currentLocale);
  // const router = useRouter();
  // const { locale, asPath } = router;
  return (
    <nav className={classes.navContainer}>
      <div className={classes.navCenter}>
        <div className={classes.navLogo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <ul className={classes.navLinks}>
          <li>
            <Link href="/" scroll={false}>
              Company
            </Link>
          </li>
          <li>
            <Link href="/services/app-developing" scroll={false}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/culture" scroll={false}>
              Culture
            </Link>
          </li>
          <li>
            <Link href="/portfolio" scroll={false}>
              Porfolio
            </Link>
          </li>
        </ul>
        <div className={classes.language}>
          <div className="center-list">
            <span
              style={{
                fontSize: "2rem",
                paddingRight: "1rem",
                fontWeight: "500",
              }}
            >
              {currentLocale === "en" ? "EN" : "KR"}
            </span>
            <IconChevronDown />
          </div>
          <ul className={classes.langList}>
            <li>
              <div
                onClick={() => setToggleLocale("en")}
                style={{ cursor: "pointer" }}
              >
                EN
              </div>
            </li>
            <li>
              <div
                onClick={() => setToggleLocale("ko")}
                style={{ cursor: "pointer" }}
              >
                KR
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
