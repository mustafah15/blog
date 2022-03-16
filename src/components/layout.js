import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler as Toggler } from 'gatsby-plugin-dark-mode'

import { rhythm, scale } from '../utils/typography'

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
        <header style={{ position: 'relative' }}>
          <h1
            style={{
              ...scale(1.0),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {title}
            </Link>
          </h1>
          <ThemeToggler
            style={{
              position: 'absolute',
              top: 12,
              right: 0,
            }}
          />
        </header>
      )
    } else {
      header = (
        <header style={{ position: 'relative' }}>
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: 0,
              marginBottom: rhythm(-1),
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {title}
            </Link>
          </h3>
          <ThemeToggler
            style={{
              position: 'absolute',
              top: -8,
              right: 0,
            }}
          />
        </header>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(26),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
