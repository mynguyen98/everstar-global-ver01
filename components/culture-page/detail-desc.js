import classes from './detail-desc.module.css'
import ItemDetail from '../services-page/business/item-detail'
export default function DeatilDesc({ title, content }) {
  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      <div>
        {content.map((item, index) => {
          return (
            <ItemDetail
              key={index}
              desc={item}
              style={{ margin: '2.4rem 0' }}
            />
          )
        })}
      </div>
    </div>
  )
}
