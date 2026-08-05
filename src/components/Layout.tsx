import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <Outlet />
    </div>
  )
}

export default Layout
