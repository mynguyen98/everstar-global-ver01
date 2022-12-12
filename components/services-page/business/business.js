import classes from "./business.module.css";
import { footerBusinessContent } from "../../../data/constant";
import { useRouter } from "next/router";
import Link from "next/link";

// import component
import AppDevelop from "./app-develop";
import AppPublish from "./app-publish";
export default function Business({ business, sid }) {
  const { locale } = useRouter();
  console.log(business, sid);
  const businessTab = footerBusinessContent[locale].services.listItem;
  console.log(businessTab);
  return (
    <section className={classes.container}>
      <div className={`${classes.section} section-center`}>
        <div className={classes.header}>
          <h1>BUSINESS AREA</h1>
        </div>
        <div classes={classes.content}>
          <div>
            <ul className={classes.listItem}>
              {businessTab.map((tab, index) => {
                return (
                  <li key={index} className={classes.active}>
                    <Link href={tab.link} scroll={false}>
                      {tab.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={classes.detailItem}>
          {sid === "app-developing" ? <AppDevelop business={business} /> : ""}
          {sid === "app-publishing" ? <AppPublish business={business} /> : ""}
        </div>
      </div>
    </section>
  );
}
