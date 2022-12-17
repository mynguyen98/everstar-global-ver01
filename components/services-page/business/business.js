import classes from "./business.module.css";
import { footerBusinessContent } from "../../../data/constant";
import Link from "next/link";

// import component
import AppDevelop from "./app-develop";
import AppPublish from "./app-publish";
import GamePublish from "./game-publish";
import Marketing from "./marketing";
import Blockchain from "./blockchain";

import { useLangContext } from "../../store/lang-switch-context";
////////////////////////////////////////////////////////
export default function Business({ business, sid }) {
  const { currentLocale } = useLangContext();
  const businessTab = footerBusinessContent[currentLocale].services.listItem;
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
                console.log(tab);
                return (
                  <li
                    key={index}
                    className={tab.sid === sid ? classes.active : ""}
                  >
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
          {sid === "game-publishing" ? <GamePublish business={business} /> : ""}
          {sid === "marketing" ? <Marketing business={business} /> : ""}
          {sid === "blockchain" ? <Blockchain business={business} /> : ""}
        </div>
      </div>
    </section>
  );
}
