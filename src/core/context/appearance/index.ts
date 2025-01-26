import { createContext, useContext, useState } from 'react'

interface AppearanceContext {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

const AppearanceContext = createContext<AppearanceContext | null>(null)

export function AppearanceProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')

  return (
    <AppearanceContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppearanceContext.Provider>
  )
}

export const useAppearance = () => {
  const context = useContext(AppearanceContext)
  if (!context) throw new Error('useAppearance must be used within AppearanceProvider')
  return context
} 