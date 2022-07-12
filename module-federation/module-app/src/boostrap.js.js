import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  return (
    <div>
      Hello world
    </div>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />);
