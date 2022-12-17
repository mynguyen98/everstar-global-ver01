import DetailPort from "./detail-port";
import { portfolioData } from "../../data/portfolio-data";
import Image from "next/image";

import classes from "./index.module.css";
import { useLangContext } from "../../store/lang-switch-context";
export default function PortfolioDetail() {
  const { currentLocale } = useLangContext();
  const data = portfolioData[currentLocale];

  return (
    <>
      <section className={classes.section}>
        <h1 className="section-heading">PORTFOLIO</h1>
      </section>
      <section className={classes.container}>
        <div className="section-center">
          {data.map((item, index) => {
            return (
              <div className={classes.itemContainer} key={index}>
                <div
                  className={classes.itemBg}
                  style={{ backgroundColor: item.color }}
                ></div>
                <div
                  className={
                    index % 2 === 0
                      ? classes.itemContent
                      : classes.itemContentReverse
                  }
                >
                  <DetailPort
                    desc={item.description}
                    link={item.link}
                    title={item.title}
                    className={classes.detail}
                  />
                  <div className={classes.image}>
                    <Image
                      src={item.image}
                      alt="portfolio image"
                      width={220}
                      height={420}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
