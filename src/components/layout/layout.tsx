import { SidebarProvider } from '@/contexts/sidebar-context'
import Sidebar from './sidebar'
import MobileHeader from './mobile-header'
import MainContent from './main-content'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <MobileHeader />
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </SidebarProvider>
  )
}

export default Layout 