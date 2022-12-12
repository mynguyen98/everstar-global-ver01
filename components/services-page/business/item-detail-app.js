import ItemDetail from './item-detail'
import classes from './item-detail-app.module.css'
export default function ItemDetailApp({ item }) {
  return (
    <div className={classes.container}>
      <img src={item.icon} alt='' className={classes.icon} />
      <h1 className={classes.header}>{item.title}</h1>
      <ul>
        {item.content.map((desc, index) => {
          return <ItemDetail desc={desc} key={index} />
        })}
      </ul>
    </div>
  )
}
