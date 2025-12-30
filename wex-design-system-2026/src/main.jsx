import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import WexDesignSystem from './WexDesignSystem'
import HealthBenefitsDashboard from './pages/HealthBenefitsDashboard'
import BenefitsDashboardDraft from './pages/BenefitsDashboardDraft'
import BenefitsDashboardV2 from './pages/BenefitsDashboardV2'
import BenefitsDashboardV3 from './pages/BenefitsDashboardV3'
import BenefitsDashboardV4 from './pages/BenefitsDashboardV4'
import BenefitsDashboardV4_1 from './pages/BenefitsDashboardV4_1'
import BenefitsDashboardV4_2 from './pages/BenefitsDashboardV4_2'
import BenefitsDashboardV5 from './pages/BenefitsDashboardV5'
import BenefitsDashboardV5_1 from './pages/BenefitsDashboardV5_1'
import BenefitsDashboardV5_2 from './pages/BenefitsDashboardV5_2'
import BenefitsDashboardV5_2_1 from './pages/BenefitsDashboardV5_2_1'
import BenefitsDashboardDraftV2_2 from './pages/BenefitsDashboardDraftV2_2'
import BenefitsDashboardDraftV2_3 from './pages/BenefitsDashboardDraftV2_3'
import BenefitsDashboardV6 from './pages/BenefitsDashboardV6'
import Homepage from './pages/Homepage'
import WexViewNavigator from './components/ui/WexViewNavigator'
import './index.css'
// PrimeReact Icons
import 'primeicons/primeicons.css'
// WEX Custom Theme for PrimeReact
import './themes/wex-prime-theme.css'

// Simple App Router
const App = () => {
  const [view, setView] = useState('draft-v6')

  const views = [
    { id: 'homepage', label: 'Homepage' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'draft', label: 'New Draft' },
    { id: 'draft-v2', label: 'Draft V2' },
    { id: 'draft-v2-1', label: 'Draft V2.1' },
    { id: 'draft-v2-2', label: 'Draft V2.2' },
    { id: 'draft-v2-3', label: 'Draft V2.3' },
    { id: 'draft-v3', label: 'Draft V3' },
    { id: 'draft-v4', label: 'Draft V4 (AI)' },
    { id: 'draft-v4-1', label: 'Draft V4.1' },
    { id: 'draft-v4-2', label: 'Draft V4.2' },
    { id: 'draft-v5', label: 'V5 AI-Forward' },
    { id: 'draft-v5-1', label: 'V5.1 Morphing' },
    { id: 'draft-v5-2', label: 'V5.2 Refined' },
    { id: 'draft-v6', label: 'V6 Segment' },
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
      case 'draft-v2':
        return <BenefitsDashboardV2 />
      case 'draft-v2-1':
        return <BenefitsDashboardV5_2_1 />
      case 'draft-v2-2':
        return <BenefitsDashboardDraftV2_2 />
      case 'draft-v2-3':
        return <BenefitsDashboardDraftV2_3 />
      case 'draft-v3':
        return <BenefitsDashboardV3 />
      case 'draft-v4':
        return <BenefitsDashboardV4 />
      case 'draft-v4-1':
        return <BenefitsDashboardV4_1 />
      case 'draft-v4-2':
        return <BenefitsDashboardV4_2 />
      case 'draft-v5':
        return <BenefitsDashboardV5 />
      case 'draft-v5-1':
        return <BenefitsDashboardV5_1 />
      case 'draft-v5-2':
        return <BenefitsDashboardV5_2 />
      case 'draft-v6':
        return <BenefitsDashboardV6 />
      case 'design-system':
        return <WexDesignSystem />
      default:
        return <Homepage />
    }
  }

  return (
    <>
      {/* Expand/Collapse View Navigator */}
      <WexViewNavigator 
        views={views} 
        activeView={view} 
        onViewChange={setView} 
      />

      {renderView()}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
