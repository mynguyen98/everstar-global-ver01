import ListFillIcon from '../../icons/icons/list-fill'
import classes from './item-detail.module.css'
export default function ItemDetail({ desc }) {
  return (
    <div className={classes.container}>
      <div className={classes.listIcon}></div>
      <h3>{desc}</h3>
    </div>
  )
}
