import classNames from 'classnames'
import { HTMLProps } from 'react'
import { Card } from 'components/Card/Card'
import styles from './Summary.module.css'
import handleIcon from 'assets/handle.svg'
import threeDotsIcon from 'assets/three-dots-vertical.svg'
import { Button } from 'components/Button/Button'

interface ItemProps {
  label: string
  link?: string
}

export function Holdings({
  className: classNameProp,
  ...props
}: HTMLProps<HTMLDivElement>) {
  const className = classNames(styles.card, classNameProp)

  const holdings = [
    { title: 'Dodge & Cox Stock I', value: '#holding2' },
    { title: 'Fidelity Advisor Mid Cap Value M', value: '#holding1' },
    { title: 'UBS Emerging Markets Equity Opp P2', value: '#holding3' },
  ]

  return (
    <Card {...props} className={className}>
      <div className={styles.header}>
        <img className={styles.handle} src={handleIcon} />
        Holdings
        <Button className="ml-auto" variant="blank">
          <img src={threeDotsIcon} />
        </Button>
      </div>
      <div className={styles.content}>
        <h5 className={styles.highlight}>Top 10 Holdings</h5>
        <div className={styles.holdings}>
          {holdings.map(({ title, value }) => (
            <Item key={value} label={title} link={value} />
          ))}
          <Button className={styles.showmore} variant="blank">
            show more...
          </Button>
        </div>
      </div>
      <div className={styles.footer}>
        <Button className="full-width"> Replace Funds </Button>
      </div>
    </Card>
  )
}

function Item({ label, link }: ItemProps) {
  return <a href={link}>{label}</a>
}
