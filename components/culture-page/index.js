import classes from "./index.module.css";
import { cultureData } from "../../data/culture-data";
import DeatilDesc from "./detail-desc";
import Image from "next/image";
import { useLangContext } from "../../store/lang-switch-context";
export default function CultureDetail() {
  const { currentLocale } = useLangContext();
  const data = cultureData[currentLocale];
  return (
    <>
      <section className={classes.section}>
        <h1 className="section-heading">Culture</h1>
      </section>
      <section className={classes.container}>
        <div className="section-center">
          {data.map((item, index) => {
            return (
              <div className={classes.itemWrapper} key={index}>
                {index % 2 === 0 ? (
                  <div className={classes.imageContainer}>
                    <Image
                      src={item.images}
                      alt="image culture description"
                      width={560}
                      height={320}
                    />
                  </div>
                ) : (
                  ""
                )}
                <DeatilDesc
                  title={item.title}
                  content={item.content}
                  className={classes.contentDetail}
                />
                {index % 2 !== 0 ? (
                  <div className={classes.imageContainer}>
                    <Image
                      src={item.images}
                      alt="image culture description"
                      width={560}
                      height={300}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
