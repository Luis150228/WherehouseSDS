import { useState } from 'react'
import './App.css'
import { BentoGrid } from './components/BentoGrid'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import Vinheta from './components/Vinheta'

function App() { const [sidebarOpen, setSidebarOpen] = useState(false)

return ( <div className="h-full grid grid-rows-[auto_1fr_auto]">
  <Header onToggleSidebar={()=> setSidebarOpen((v) => !v)} />

    <div className="grid md:grid-cols-[18rem_1fr] h-[calc(100dvh-3.5rem)] md:h-auto">
      <Sidebar open={sidebarOpen} onClose={()=> setSidebarOpen(false)} />

        <main className="p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Hero */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Bienvenido, Fher</h1>
                <p className="text-mid-500">Panel principal</p>
              </div>
              <Vinheta />
            </div>
            <BentoGrid />
          </div>
        </main>
    </div>

    <Footer />
</div>

) }

export default App
