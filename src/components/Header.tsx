import { SidebarTrigger } from './animate-ui/radix/sidebar';
export interface HeaderProps {
	onToggleSidebar: () => void;
}

import { ThemeToggle } from './ThemeToggle';

export function Header() {
	return (
		<header
			className='sticky top-0 z-40 h-14'
			style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
			<div className='h-full max-w-7xl mx-auto flex items-center px-4 gap-3'>
				<SidebarTrigger aria-label='Abrir/cerrar menú' />
				{/* logo + marca */}
				<div className='flex items-center gap-2'>
					<div
						className='inline-flex items-center justify-center w-8 h-8 rounded-md text-white'
						style={{ background: 'var(--brand-500)' }}>
						<svg
							viewBox='0 0 24 24'
							width='16'
							height='16'
							fill='currentColor'
							aria-hidden>
							<path d='M12.5 2s1.5 2 1.5 3.6S12 8 12 9.8c0 1.6 1.2 2.7 1.2 4.2 0 1.8-1.4 3-3.2 3-2.3 0-4-1.7-4-4.2 0-3.7 3.6-5.7 6.5-10z' />
						</svg>
					</div>
					<span
						className='font-semibold tracking-tight'
						style={{ color: 'var(--fg)' }}>
						Santander UI
					</span>
				</div>

				{/* lado derecho */}
				<div className='ml-auto flex items-center gap-2'>
					<input
						placeholder='Buscar'
						className='hidden sm:block px-3 py-2 text-sm rounded-md'
						style={{ border: '1px solid var(--border)', background: 'transparent', color: 'var(--fg)' }}
					/>
					<ThemeToggle />
					<button
						className='px-3 py-2 rounded-md text-white text-sm'
						style={{ background: 'var(--brand-500)' }}>
						Acción
					</button>
				</div>
			</div>
		</header>
	);
}
