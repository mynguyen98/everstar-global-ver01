import ItemDetailApp from './item-detail-app'
import classes from './app-publish.module.css'
export default function AppPublish({ business }) {
  return (
    <div>
      <div className={classes.listItem}>
        {business.map((businessItem, index) => (
          <div className={classes.wrapper} key={index}>
            <ItemDetailApp item={businessItem} key={index} />
            <h1 className={classes.number}>0{index + 1}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
