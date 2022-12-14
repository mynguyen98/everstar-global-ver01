import { useRouter } from 'next/router'
import { partnerImgs } from '../../data/constant'
import classes from './partners.module.css'
import Image from 'next/image'
export default function Partners() {
  const { locale } = useRouter()
  let header = ''
  if (locale === 'en-US') header = 'OUR VIETNAMESE PArtners'
  if (locale === 'kr-KR') header = '베트남 현지 파트너사'

  return (
    <section className={classes.section}>
      <div className='section-center'>
        <h1 className={classes.header}>{header}</h1>
        <div className={classes.container}>
          {partnerImgs.map((img, index) => {
            return (
              <div key={index}>
                <Image src={img} alt='' width={300} height={300} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
