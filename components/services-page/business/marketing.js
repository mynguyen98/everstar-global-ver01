import ItemDetailApp from './item-detail-app'
import classes from './marketing.module.css'
export default function Marketing({ business }) {
  return (
    <div>
      <div className={classes.listItem}>
        {business.map((businessItem, index) => (
          <div>
            <ItemDetailApp item={businessItem} key={index} />
          </div>
        ))}
      </div>
    </div>
  )
}
