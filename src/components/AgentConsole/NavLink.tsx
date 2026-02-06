import React from 'react'
import Link from 'next/link'

const NavLink: React.FC = () => {
  return (
    <Link
      href="/admin/agent-console"
      style={{
        display: 'block',
        padding: '8px 12px',
        margin: '6px 8px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 600,
        border: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      Agent Console
    </Link>
  )
}

export default NavLink
