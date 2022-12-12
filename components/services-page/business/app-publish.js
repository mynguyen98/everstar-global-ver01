import ItemDetailApp from './item-detail-app'
import classes from './app-publish.module.css'
export default function AppPublish({ business }) {
  console.log(business)
  return (
    <div>
      <div className={classes.listItem}>
        {business.map((businessItem, index) => (
          <ItemDetailApp item={businessItem} key={index} />
        ))}
      </div>
    </div>
  )
}
