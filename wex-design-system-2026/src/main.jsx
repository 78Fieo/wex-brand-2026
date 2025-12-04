import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import WexDesignSystem from './WexDesignSystem'
import HealthBenefitsDashboard from './pages/HealthBenefitsDashboard'
import BenefitsDashboardDraft from './pages/BenefitsDashboardDraft'
import Homepage from './pages/Homepage'
import './index.css'
// PrimeReact Icons
import 'primeicons/primeicons.css'
// WEX Custom Theme for PrimeReact
import './themes/wex-prime-theme.css'

// Simple App Router
const App = () => {
  const [view, setView] = useState('homepage') // 'design-system' | 'dashboard' | 'homepage'

  const views = [
    { id: 'homepage', label: 'Homepage' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'draft', label: 'New Draft' },
    { id: 'design-system', label: 'Design System' }
  ]

  const renderView = () => {
    switch (view) {
      case 'homepage':
        return <Homepage />
      case 'dashboard':
        return <HealthBenefitsDashboard />
      case 'draft':
        return <BenefitsDashboardDraft />
      case 'design-system':
        return <WexDesignSystem />
      default:
        return <Homepage />
    }
  }

  return (
    <>
      {/* View Toggle - Floating Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <div className="bg-white rounded-full shadow-lg border border-[#E1E8FF] p-2 flex gap-2">
          {views.map((v) => (
            <button
              key={v.id}
              onClick={() => setView(v.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                view === v.id
                  ? 'bg-[#172DA1] text-white shadow-md'
                  : 'text-[#5D688C] hover:bg-[#EDF1FF]'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {renderView()}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


