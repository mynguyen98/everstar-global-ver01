import LogoSymbol from "../icons/logo/logo-symbol";
import { useRouter } from "next/router";
import Link from "next/link";
import { footerBusinessContent } from "../../data/constant";
import classes from "./footer.module.css";
import FooterContent from "./footer-content";
import { useLangContext } from "../../store/lang-switch-context";
export default function MainFooter() {
  const { currentLocale } = useLangContext();
  const { locale } = useRouter();
  const footerData = footerBusinessContent[currentLocale];
  const { company, services, contact } = footerData;
  // console.log(locale)
  return (
    <section className={classes.section}>
      <div className="section-center">
        <div className={classes.header}>
          <span>
            <LogoSymbol />
          </span>
          <p>EVERSTAR GLOBAL JOINT STOCK COMPANY</p>
        </div>
        <div className={classes.content}>
          <FooterContent content={company} isLink={true} />
          <FooterContent content={services} isLink={true} />
          <FooterContent content={contact} isLink={false} />
        </div>
        <div className={classes.copyright}>
          <p>
            © 2022 <span className={classes.highlight}>EVERSTAR GLOBAL</span>{" "}
            All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
