import styles from './App.module.css'
import { ClientSummary } from './components/Summary/ClientSummary'
import { Section } from './components/Section/Section'

import { Holdings } from 'components/Summary/Holdings'
import { RecentlyViewed } from 'components/Summary/RecentlyViewed'
import { SideMenu } from 'components/SideMenu/SideMenu'
import { InfoCard } from 'components/InfoCard/ClientSummary'

import dbIcon from 'assets/db-check.svg'
import { DashboardTable } from 'components/DashboardTable/DashboardTable'
import classNames from 'classnames'
import { useAppContext } from 'components/AppContext/AppContext'

function App() {
  const { collapsedMenu } = useAppContext()
  const className = classNames(styles.app, collapsedMenu && styles.collapsed)
  return (
    <div className={className}>
      <SideMenu />

      <main className={styles.content}>
        <h2 style={{ marginBottom: '2rem' }}>
          Welcome to <a href="/"> MPI Stylus Web 2.0 </a>
        </h2>
        <Section>
          <ClientSummary />
          <Holdings />
          <RecentlyViewed />
        </Section>
        <Section>
          <DashboardTable />
        </Section>
        <Section>
          <InfoCard icon={dbIcon} title="Executed reports" value="28" />
          <InfoCard icon={dbIcon} title="Running reports" value="28" />
          <InfoCard
            icon={dbIcon}
            title="Last DB synchronization date"
            value={new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
          />
        </Section>
      </main>
    </div>
  )
}

export default App
