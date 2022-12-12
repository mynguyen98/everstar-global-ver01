import ItemDetail from './item-detail'

export default function ItemDetailApp({ item }) {
  return (
    <div>
      <img src={item.icon} alt='' />
      <h1>{item.title}</h1>
      <ul>
        {item.content.map((desc, index) => {
          return <ItemDetail desc={desc} key={index} />
        })}
      </ul>
    </div>
  )
}
