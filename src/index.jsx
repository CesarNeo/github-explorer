import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
import { App } from './App'

root.render(<App />)
