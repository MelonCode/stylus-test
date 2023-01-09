import classNames from 'classnames'
import { HTMLProps } from 'react'
import { Card } from 'components/Card/Card'
import styles from './Summary.module.css'
import handleIcon from 'assets/handle.svg'
import threeDotsIcon from 'assets/three-dots-vertical.svg'
import { Button } from 'components/Button/Button'

interface ItemProps {
  label: string
  value: string
  link?: string
}

export function ClientSummary({
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
        <Item label="Clients" value="9" />
        <Item label="Accounts" value="32" />
        <Item label="Assets" value="$ 1,370,137.27" />
        <Item label="Funds" value="426 Funds" link="#" />
      </div>
      <div className={styles.footer}>
        <Button> Clients List </Button>
        <Button> Contacts List </Button>
      </div>
    </Card>
  )
}

function Item({ label, value, link }: ItemProps) {
  return (
    <div className={styles.item}>
      <b className={styles.label}>{label}:</b>
      <span className={styles.dots} />
      &nbsp;
      {value}
      {link && (
        <>
          <span className={styles.dot}> •</span>
          <a href={link}>View</a>
        </>
      )}
    </div>
  )
}
