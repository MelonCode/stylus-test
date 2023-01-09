import classNames from 'classnames'
import { HTMLProps } from 'react'
import styles from './Card.module.css'

interface CardProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

export function Card({
  children,
  className: classNameProp,
  ...props
}: CardProps) {
  const className = classNames(styles.card, classNameProp)

  return (
    <div {...props} className={className}>
      {children}
    </div>
  )
}
