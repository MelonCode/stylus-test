import classNames from 'classnames'
import { HTMLProps } from 'react'
import styles from './Section.module.css'

interface CardProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

export function Section({
  children,
  className: classNameProp,
  ...props
}: CardProps) {
  const className = classNames(styles.section, classNameProp)

  return (
    <section {...props} className={className}>
      {children}
    </section>
  )
}
