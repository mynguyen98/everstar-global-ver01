import ListFillIcon from '../../icons/icons/list-fill'
import classes from './item-detail.module.css'
export default function ItemDetail({ desc, isTitle }) {
  return (
    <div className={classes.container}>
      <div className={classes.listIcon}></div>
      {isTitle ? <h2>{desc}</h2> : <h3>{desc}</h3>}
    </div>
  )
}
