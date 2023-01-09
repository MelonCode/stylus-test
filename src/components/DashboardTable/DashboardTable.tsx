import filterIcon from 'assets/filter.svg'
import pageNextIcon from 'assets/page-next.svg'
import pagePrevIcon from 'assets/page-prev.svg'
import plusIcon from 'assets/plus.svg'
import reloadIcon from 'assets/reload.svg'
import threeDotsIcon from 'assets/three-dots.svg'
import twoColumnsIcon from 'assets/two-columns.svg'
import undoIcon from 'assets/undo.svg'
import classNames from 'classnames'
import { useAppContext } from 'components/AppContext/AppContext'
import { Button } from 'components/Button/Button'
import { Card } from 'components/Card/Card'
import debounce from 'lodash.debounce'
import { useEffect, useMemo, useState } from 'react'
import DataGrid, { DataGridProps } from 'react-data-grid'
import 'react-data-grid/lib/styles.css'
import styles from './DashboardTable.module.css'
import mockData from './mockData'

export interface Client {
  id: number
  client: string
  type: string
  status: boolean
  active: boolean
  accounts: number
  assets: string
  shared: boolean | undefined
}

function Status({ status }: { status: boolean }) {
  return (
    <div className={status ? styles.active : styles.inactive}>
      {status ? 'Active' : 'Inactive'}
    </div>
  )
}

function SharedChip({ shared }: { shared: boolean }) {
  return (
    <div
      className={classNames(styles.chip, shared ? styles.write : styles.read)}
    >
      {shared ? 'Write' : 'Read'}
    </div>
  )
}

const columns: DataGridProps<Client>['columns'] = [
  {
    key: 'client',
    name: 'Client Name',
    formatter: ({ row }) => <a href="#"> {row.client} </a>,
  },
  { key: 'type', name: 'Client Type' },
  {
    key: 'status',
    name: 'Status',

    formatter: ({ row }) => (row.status ? 'Client' : 'Prospect'),
  },
  {
    key: 'active',
    name: 'Active',

    formatter: ({ row }) => <Status status={row.status} />,
  },
  { key: 'accounts', name: '# Accounts' },
  { key: 'assets', name: 'Assets' },
  {
    key: 'shared',
    name: 'Shared',
    cellClass: styles.center,
    formatter: ({ row }) =>
      typeof row.shared === 'boolean' ? (
        <SharedChip shared={row.shared} />
      ) : (
        <span style={{ width: '50%' }}>-</span>
      ),
  },
  {
    key: 'actions',
    name: 'Actions',
    headerCellClass: styles.actions,
    formatter: () => (
      <div className={styles.actions}>
        <img width={16} src={threeDotsIcon} />
      </div>
    ),
  },
]

const PAGE_SIZE = 15

export function DashboardTable() {
  const className = classNames('rdg-light', 'fill-grid', styles.table)
  const [page, setPage] = useState(0)
  const { collapsedMenu } = useAppContext()

  function nextPage() {
    setPage((currentPage) => {
      const totalPages = mockData.length / PAGE_SIZE
      return page < totalPages - 1 ? currentPage + 1 : currentPage
    })
  }

  function prevPage() {
    setPage((currentPage) => (currentPage > 0 ? currentPage - 1 : 0))
  }

  // Mock pagination
  const data = useMemo(
    () => mockData.slice(PAGE_SIZE * page, PAGE_SIZE * (page + 1)),
    [page],
  )

  const [updateKey, setUpdateKey] = useState(0)

  // Remounting table at window resize to recalculate column values
  useEffect(() => {
    function onResize() {
      setUpdateKey(Math.random())
    }
    const debouncedResize = debounce(onResize, 100)
    window.addEventListener('resize', debouncedResize)
    ;() => {
      window.removeEventListener('resize', debouncedResize)
    }
  }, [])

  useEffect(() => {
    setUpdateKey(Math.random())
  }, [collapsedMenu])

  return (
    <Card className={styles.card}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <Button variant="icon">
            <img width={12} src={filterIcon} />
          </Button>
          <Button variant="icon">
            <img width={12} src={undoIcon} />
          </Button>
          <Button variant="icon">
            <img width={12} src={reloadIcon} />
          </Button>
          <Button variant="icon">
            <img width={12} src={twoColumnsIcon} />
          </Button>
          <Button style={{ marginLeft: '1rem' }} variant="primary">
            <img width={9} src={plusIcon} /> <b>Add Client</b>
          </Button>
        </div>
        <div className={classNames(styles.control, 'ml-auto')}>
          <span>
            Page {page + 1} / {Math.ceil(mockData.length / PAGE_SIZE)}
          </span>
          <Button onClick={prevPage} variant="icon">
            <img width={6} src={pagePrevIcon} />
          </Button>
          <Button onClick={nextPage} variant="icon">
            <img width={6} src={pageNextIcon} />
          </Button>
        </div>
      </div>
      <DataGrid
        key={updateKey}
        className={className}
        columns={columns}
        rows={data}
      />
    </Card>
  )
}
