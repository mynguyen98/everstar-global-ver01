import Link from 'next/link'

export default function footerContent(props) {
  const { content, isLink } = props
  console.log(content)
  return (
    <div>
      <h2>{content.title}</h2>
      <ul>
        {content.listItem.map((item, index) => {
          return (
            <li key={index} style={{ padding: '0.4rem 0', display: 'flex' }}>
              <div style={{ marginRight: '1rem' }}>{item.icon}</div>
              <Link href={isLink ? item.link : '#'}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
