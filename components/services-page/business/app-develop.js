import classes from './app-develop.module.css'
import ListFillIcon from '../../icons/icons/list-fill'
import ListIcon from '../../icons/icons/list-icon'
import ItemDetail from './item-detail'
export default function AppDevelop({ business }) {
  const { content, header } = business
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {header.map((item, index) => {
          return (
            <div key={index} className={classes.headerItem}>
              <div className={classes.number}>
                <h1>0{index + 1}</h1>
                <div className={classes.icon}>
                  {index < 2 ? <ListFillIcon /> : <ListIcon />}
                </div>
              </div>
              <h2>{item}</h2>
            </div>
          )
        })}
      </div>
      <div className={classes.content}>
        {content.map((item, index) => {
          if (index < 1)
            return (
              <div key={index} className={classes.itemContainer}>
                <ul className={classes.itemDetail}>
                  {item.map((desc, index) => {
                    return <ItemDetail key={index} desc={desc} />
                  })}
                </ul>
              </div>
            )
          return (
            <div className={classes.itemContainer} key={index}>
              <div className={classes.item}>
                {item.map((details, index) => {
                  return (
                    <ul className={classes.itemDetail} key={index}>
                      {details.map((detail, i) => {
                        return <ItemDetail key={i} desc={detail} />
                      })}
                    </ul>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <div className='clear'></div>
    </div>
  )
}
