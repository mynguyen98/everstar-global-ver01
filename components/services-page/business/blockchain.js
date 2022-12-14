import ItemDetail from './item-detail'
import classes from './blockchain.module.css'
export default function Blockchain({ business }) {
  return (
    <div className={`grid-3-item ${classes.container}`}>
      {business.map((item, index) => {
        return (
          <div key={index} className={classes.item}>
            <ItemDetail
              desc={item.title}
              className={classes.title}
              isTitle={true}
            />
            <h3>{item.description}</h3>
          </div>
        )
      })}
    </div>
  )
}
