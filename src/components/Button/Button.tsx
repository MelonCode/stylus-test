import classNames from 'classnames'
import { HTMLProps, ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'blank' | 'icon'
  children?: ReactNode
}

export function Button({
  variant = 'default',
  className: classNameProp,
  children,
  ...props
}: ButtonProps) {
  const variantStyle = {
    [styles['button-default']]: variant === 'default',
    [styles['button-primary']]: variant === 'primary',
    [styles['button-blank']]: variant === 'blank',
    [styles['button-icon']]: variant === 'icon',
  }

  const className = classNames(styles.button, classNameProp, variantStyle)

  return (
    <button {...props} type="button" className={className}>
      {children}
    </button>
  )
}
