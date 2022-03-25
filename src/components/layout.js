import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler as Toggler } from 'gatsby-plugin-dark-mode'

import { rhythm } from '../utils/typography'

const ThemeToggler = props => {
  return (
    <Toggler>
      {({ theme, toggleTheme }) => (
        <button
          {...props}
          onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? '🌙' : '🌞'}
        </button>
      )}
    </Toggler>
  )
}

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    if (location.pathname === rootPath) {
      header = (
        <header className="flex items-center py-12 justify-between">
          <h1 className="text-[36px] font-extrabold">
            <Link to={'/'}>{title}</Link>
          </h1>

          <nav className="flex gap-x-10">
            <Link to={'/'}>Blogs</Link>
            <Link to={'/tags'}>Tags</Link>
            <Link to={'/about'}>About</Link>
            <ThemeToggler />
          </nav>
        </header>
      )
    } else {
      header = (
        <header className="flex items-center py-8 justify-between">
          <h3 className="text-[24px] font-extrabold">
            <Link to={'/'}>{title}</Link>
          </h3>
          <nav className="flex gap-x-10">
            <Link to={'/'}>Blogs</Link>
            <Link to={'/tags'}>Tags</Link>
            <Link to={'/about'}>About</Link>
            <ThemeToggler />
          </nav>
        </header>
      )
    }
    return (
      <div className={`mx-auto max-w-screen-lg px-5 py-${rhythm(3 / 4)}`}>
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
