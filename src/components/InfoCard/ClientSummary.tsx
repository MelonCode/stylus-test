import classNames from 'classnames'
import { HTMLProps } from 'react'
import { Card } from 'components/Card/Card'
import styles from './InfoCard.module.css'

interface InfoCardProps extends HTMLProps<HTMLDivElement> {
  title: string
  value: string | number
  icon: string
}

export function InfoCard({
  className: classNameProp,
  title,
  value,
  icon,
  ...props
}: InfoCardProps) {
  const className = classNames(styles.card, classNameProp)

  return (
    <Card {...props} className={className}>
      <img width={24} src={icon} />
      <div className={styles.value}>{value}</div>
      <div className={styles.title}> {title}</div>
    </Card>
  )
}
