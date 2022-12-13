import classes from './index.module.css'
import { cultureData } from '../../data/culture-data'
import DeatilDesc from './detail-desc'
import { useRouter } from 'next/router'
export default function CultureDetail() {
  const { locale } = useRouter()
  const data = cultureData[locale]
  return (
    <>
      <section className={classes.section}>
        <h1 className='section-heading'>Culture</h1>
      </section>
      <section className={classes.container}>
        <div className='section-center'>
          {data.map((item, index) => {
            // if (index % 2 === 0)
            return (
              <div className={classes.itemWrapper}>
                {index % 2 === 0 ? (
                  <div className={classes.imageContainer}>
                    <img src={item.images} alt='image culture description' />
                  </div>
                ) : (
                  ''
                )}
                <DeatilDesc
                  title={item.title}
                  content={item.content}
                  className={classes.contentDetail}
                />
                {index % 2 !== 0 ? (
                  <div className={classes.imageContainer}>
                    <img src={item.images} alt='image culture description' />
                  </div>
                ) : (
                  ''
                )}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
