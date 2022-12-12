import { serviceFeatured } from '../../data/constant'
import { useRouter } from 'next/router'
import classes from './features.module.css'
import NextSlideIcon from '../icons/icons/next-slide-icon'
import PrevSlideIcon from '../icons/icons/prev-slide-icon'
import { useEffect, useRef, useState } from 'react'
//import hook

export default function Features() {
  const { locale } = useRouter()
  const [value, setValue] = useState(0)
  const containerImg = useRef()
  const container = useRef()
  const listImage = serviceFeatured[locale]
  console.log(listImage)
  const itemLength = listImage.length
  const nextItem = () => {
    console.log('running')
    setValue((prev) => {
      if (prev + 1 === itemLength) {
        return 0
      }
      return prev + 1
    })
  }
  const prevItem = () => {
    setValue((prev) => {
      if (prev === 0) {
        return itemLength - 1
      }
      return prev - 1
    })
  }
  useEffect(() => {
    console.log(containerImg)
    const imgWidth = containerImg.current.offsetWidth
    console.log(imgWidth * value)
    container.current.style.transform = `translateX(${-imgWidth * value}px)`
  }, [value])
  console.log(value)
  return (
    <section className={`section-center ${classes.section}`}>
      <div className={classes.nextIcon} onClick={nextItem}>
        <NextSlideIcon />
      </div>
      <div className={classes.prevIcon} onClick={prevItem}>
        <PrevSlideIcon />
      </div>
      <div className={`${classes.content} section-padding`}>
        <div className={classes.container} ref={container}>
          {listImage.map((item, index) => {
            return (
              <div
                key={index}
                className={`${classes.imageContainer} ${
                  item.id === value ? classes.active : ''
                }`}
                ref={containerImg}
              >
                <img src={item.image} alt='service feature' />
              </div>
            )
          })}
        </div>
        <div className={classes.dots}>
          {listImage.map((_, index) => {
            return (
              <div
                key={index}
                className={`${classes.dot} ${
                  index === value ? classes.activeDot : ''
                }`}
                onClick={() => setValue(index)}
              ></div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
