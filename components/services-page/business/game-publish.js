import classes from './game-publish.module.css'
import Button from '../../ui/button'
export default function GamePublish({ business }) {
  console.log(business)
  return (
    <div className={classes.container}>
      {business.map((item, index) => {
        return (
          <div
            key={index}
            className={classes.contentWrapper}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
            }}
          >
            <div className={classes.content}>
              <Button type='second'>{item.title}</Button>
              <p>{item.description}</p>
            </div>
            <div className={classes.contentDetail}>
              <h2>{item.title}</h2>
              <ul>
                {item.content.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
