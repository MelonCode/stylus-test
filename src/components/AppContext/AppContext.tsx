import React, { ReactNode, useContext, useEffect, useState } from 'react'

interface AppContextType {
  collapsedMenu: boolean
  setCollapsedMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = React.createContext<AppContextType | null>(null)

export function useAppContext(): AppContextType {
  return useContext(AppContext)!
}

const LS_COLLAPSED_MENU = 'collapsed-menu'

export function AppContextProvider({ children }: { children?: ReactNode }) {
  const [collapsedMenu, setCollapsedMenu] = useState(
    JSON.parse(window.localStorage.getItem(LS_COLLAPSED_MENU) || 'false'),
  )

  // Storing latest value in a local storage to preserve collapsed state on refresh
  useEffect(() => {
    window.localStorage.setItem('collapsed-menu', JSON.stringify(collapsedMenu))
  }, [collapsedMenu])

  return (
    <AppContext.Provider value={{ collapsedMenu, setCollapsedMenu }}>
      {children}
    </AppContext.Provider>
  )
}
