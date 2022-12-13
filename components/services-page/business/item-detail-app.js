import ItemDetail from './item-detail'
import classes from './item-detail-app.module.css'
export default function ItemDetailApp({ item }) {
  return (
    <div className={classes.container}>
      <img src={item.icon} alt='icon-business' className={classes.icon} />
      <h1 className={classes.header}>{item.title}</h1>
      <div className={classes.item}>
        {item.content.map((desc, index) => {
          return <ItemDetail desc={desc} key={index} />
        })}
      </div>
    </div>
  )
}
