import React from 'react'
import { Link } from '@tanstack/react-router'

const NotFoundPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to home</Link>
    </div>
  )
}

export default NotFoundPage
