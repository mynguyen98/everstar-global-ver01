import { useRouter } from "next/router";
import { businessHomeData } from "../../data/constant";
import classes from "./business.module.css";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLangContext } from "../../store/lang-switch-context";
export default function HomeBusiness() {
  const { currentLocale } = useLangContext();
  const [value, setValue] = useState(0);
  const [isResize, setIsResize] = useState(false);
  const itemHeader = useRef();
  const arrowEl = useRef();
  const datas = businessHomeData[currentLocale];
  const features = datas[value].feature;
  const featureLength = features.length;

  useEffect(() => {
    window.addEventListener("resize", () => setIsResize(true));
    const itemWidth = itemHeader.current.offsetWidth;
    arrowEl.current.style.transform = `translateX(${itemWidth * value}px)`;
  }, [value, isResize]);

  return (
    <section className={classes.section}>
      <div className="section-center">
        <div className={classes.header}>
          <ul className="flex-item">
            {datas.map((data, index) => {
              return (
                <li className={classes.item} key={index} ref={itemHeader}>
                  <div
                    className={`flex-column ${
                      data.id - 1 === value ? "active-item" : ""
                    }`}
                    onClick={() => setValue(index)}
                  >
                    <div className="">{data.icon}</div>
                    <h2 className={classes.title}>{data.title}</h2>
                  </div>
                  {index === 0 ? (
                    <div className={classes.arrow} ref={arrowEl}></div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`grid-${featureLength}-item`}>
          {features.map((feature, index) => {
            return (
              <div key={index} className={classes.featureItem}>
                <div className={classes.feature}>
                  <Image
                    src={feature.image}
                    alt="feature"
                    width={180}
                    height={180}
                  />
                  <p>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
