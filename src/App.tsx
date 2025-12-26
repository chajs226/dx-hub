import { AppProvider } from './context/AppContext'
import Dashboard from './components/layout/Dashboard'
import MediaModal from './components/media/MediaModal'

function App() {
  return (
    <AppProvider>
      <div className="h-screen overflow-hidden bg-slate-900">
        <Dashboard />
        <MediaModal />
      </div>
    </AppProvider>
  )
}

export default App
