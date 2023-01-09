import classNames from 'classnames'
import { HTMLProps } from 'react'
import { Card } from 'components/Card/Card'
import styles from './Summary.module.css'
import handleIcon from 'assets/handle.svg'
import threeDotsIcon from 'assets/three-dots-vertical.svg'
import { Button } from 'components/Button/Button'

interface ItemProps {
  label: string
  source: string
  link: string
}

export function RecentlyViewed({
  className: classNameProp,
  ...props
}: HTMLProps<HTMLDivElement>) {
  const className = classNames(styles.card, classNameProp)

  return (
    <Card {...props} className={className}>
      <div className={styles.header}>
        <img className={styles.handle} src={handleIcon} />
        Clients Summary
        <Button className="ml-auto" variant="blank">
          <img src={threeDotsIcon} />
        </Button>
      </div>
      <div className={styles.content}>
        <h5 className={styles.highlight}>Recently Viewed</h5>
        <div className={styles.holdings}>
          <Item label="Client Summary" link="#" source="Alex Capital" />
          <Item label="Account Summary" link="#" source="Alex Capital" />
          <Item label="Account" link="#" source="My portfolio" />
        </div>
      </div>
      <div className={styles.footer}>
        <Button> Clients List </Button>
        <Button> Contacts List </Button>
      </div>
    </Card>
  )
}

function Item({ label, source, link }: ItemProps) {
  return (
    <div className={styles.item}>
      <span className={styles.gray}>
        {label} <span className={styles.dots} />
      </span>
      &nbsp;
      <>
        <span className={styles.dot}> •</span>
        <a href={link}>{source}</a>
      </>
    </div>
  )
}
