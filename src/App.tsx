import { AppProvider } from './context/AppContext'
import FilterBar from './components/layout/FilterBar'
import Dashboard from './components/layout/Dashboard'
import MediaModal from './components/media/MediaModal'

function App() {
  return (
    <AppProvider>
      <div className="h-screen overflow-hidden bg-slate-900 flex flex-col">
        <FilterBar />
        <div className="flex-1 overflow-hidden">
          <Dashboard />
        </div>
        <MediaModal />
      </div>
    </AppProvider>
  )
}

export default App
