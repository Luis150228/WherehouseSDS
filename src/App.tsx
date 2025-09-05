// src/App.tsx
import './App.css';

import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Vinheta from './components/Vinheta';
import { AppSidebar } from './components/app-sidebar';

import { SidebarProvider, SidebarInset } from '@/components/animate-ui/radix/sidebar';

export default function App() {
	return (
		<SidebarProvider>
			{/* El sidebar se monta aquí (fuera del flujo), Animate UI lo posiciona */}
			<AppSidebar />

			{/* SidebarInset aplica el padding/offset correcto al contenido */}
			<SidebarInset>
				<div className='h-full grid grid-rows-[auto_1fr_auto]'>
					<Header />

					<main className='p-6 overflow-y-auto'>
						<div className='max-w-7xl mx-auto space-y-6'>
							<div className='flex items-center justify-between'>
								<h1
									className='text-2xl font-bold'
									style={{ color: 'var(--fg)' }}>
									Bienvenido
								</h1>
								<Vinheta />
							</div>

							<BentoGrid />
						</div>
					</main>

					<Footer />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
