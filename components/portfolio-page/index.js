import DetailPort from './detail-port'
import { useRouter } from 'next/router'
import { portfolioData } from '../../data/portfolio-data'
import Image from 'next/image'

import classes from './index.module.css'
export default function PortfolioDetail() {
  const { locale } = useRouter()
  const data = portfolioData[locale]

  return (
    <>
      <section className={classes.section}>
        <h1 className='section-heading'>PORTFOLIO</h1>
      </section>
      <section className={classes.container}>
        <div className='section-center'>
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
                      alt='portfolio image'
                      width={220}
                      height={420}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
