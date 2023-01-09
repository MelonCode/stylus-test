import logo from 'assets/logo.svg'
import arrowSmallIcon from 'assets/arrow-small.svg'
import dashboardIcon from 'assets/monitor.svg'
import userIcon from 'assets/user-solid.svg'
import dollarIcon from 'assets/dollar.svg'
import usersIcon from 'assets/users-solid.svg'
import arrowIcon from 'assets/arrow-up-drop.svg'
import connectionIcon from 'assets/connection.svg'
import archiveIcon from 'assets/archive-solid.svg'
import cogIcon from 'assets/cog-outline.svg'
import questionIcon from 'assets/question-mark-circle.svg'
import powerIcon from 'assets/round-power.svg'
import collapseIcon from 'assets/collapse.svg'
import expandIcon from 'assets/expand.svg'

import styles from './SideMenu.module.css'
import classNames from 'classnames'
import { useAppContext } from 'components/AppContext/AppContext'
import { MouseEventHandler } from 'react'

interface MenuItemProps {
  title: string
  path?: string
  logo: string
  active?: boolean
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
  collapsed?: boolean
}

const menuItems = [
  { path: '/', label: 'Dashboard', icon: dashboardIcon },
  { path: '/clients', label: 'Clients', icon: userIcon },
  { path: '/accounts', label: 'Accounts', icon: dollarIcon },
  { path: '/contacts', label: 'Contacts', icon: usersIcon },
  { path: '/funds', label: 'Funds', icon: arrowIcon },
  { path: '/models', label: 'Models', icon: connectionIcon },
  { path: '/repository', label: 'Repository', icon: archiveIcon },
  { path: '/settings', label: 'Settings', icon: cogIcon },
  { path: '/help', label: 'Help Center', icon: questionIcon },
  { path: '/logout', label: 'Logout', icon: powerIcon },
]

function MenuItem({
  title,
  path = '#',
  logo,
  active,
  onClick,
  collapsed,
}: MenuItemProps) {
  const className = classNames(styles.item, { [styles.active]: active })
  return (
    <div onClick={onClick} className={className}>
      <img src={logo} alt={title} />
      {!collapsed && title}
      {!collapsed && active && (
        <img className="ml-auto" width={6} height={8} src={arrowSmallIcon} />
      )}
    </div>
  )
}

export function SideMenu() {
  const { collapsedMenu, setCollapsedMenu } = useAppContext()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img width={23} height={23} src={logo} alt="Stylus logo" />
        {!collapsedMenu && 'Stylus Web 2.0'}
      </div>
      <div
        className={classNames(styles.nav, collapsedMenu && styles.collapsed)}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            path={item.path}
            active={item.path === '/'}
            title={item.label}
            logo={item.icon}
            collapsed={collapsedMenu}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <MenuItem
          onClick={() => setCollapsedMenu((c) => !c)}
          title={'Collapse Menu'}
          logo={collapsedMenu ? expandIcon : collapseIcon}
          collapsed={collapsedMenu}
        />
      </div>
    </aside>
  )
}
