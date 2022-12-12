import classes from './button.module.css'

export default function Button(props) {
  if (props.type === 'main') {
    return (
      <a href='#'>
        <button className={classes.main}>{props.children}</button>
      </a>
    )
  }
  if (props.type === 'second') {
    return (
      <a href='#'>
        <button className={classes.second}>{props.children}</button>
      </a>
    )
  }
  if (props.type === 'third') {
    return (
      <a href='#'>
        <button className={classes.third}>{props.children}</button>
      </a>
    )
  }
}
