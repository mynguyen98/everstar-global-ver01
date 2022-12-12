import ListFillIcon from '../../icons/icons/list-fill'
import classes from './item-detail.module.css'
export default function ItemDetail({ desc }) {
  return (
    <li className={classes.container}>
      <ListFillIcon />
      <h3>{desc}</h3>
    </li>
  )
}
