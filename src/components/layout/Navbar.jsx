

import { NavLink } from 'react-router-dom'
import DarkModeButton from '../common/DarkModeButton'

const Navbar = () => {
  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <nav
      className="fixed top-0 w-full backdrop-blur transition-colors duration-300 bg-white/80 dark:bg-slate-950/80 border border-gray-200 dark:border-gray-800 shadow-sm z-100  
      
      ">

      <div className="mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold tracking-tight bg-linear-to-r from-blue-600 to-violet-600 dark:from-violet-400 dark:to-blue-400 bg-clip-text text-transparent">
          Reza
        </div>

        <ul className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800/60 px-2 py-2 rounded-lg backdrop-blur-sm">
          {menuItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 px-4 py-2 rounded-md whitespace-nowrap ${isActive
                    ? 'text-white dark:text-white bg-blue-600 dark:bg-violet-600 shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700/50'
                  }`
                }
                end
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <DarkModeButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar