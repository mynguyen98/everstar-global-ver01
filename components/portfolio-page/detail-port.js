import classes from './detail-port.module.css'

export default function DetailPort({ desc, link, title }) {
  console.log(desc, link, title)
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>{title}</h1>
      <p className={classes.desc}>{desc}</p>
      <div className={classes.tags}>
        {link.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
      </div>
    </div>
  )
}
