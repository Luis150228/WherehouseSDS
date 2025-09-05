// src/components/BentoGrid.tsx
import { CardRed } from './CardRed';
import { CardGrey } from './CardGrey';
import { CardWhite } from './CardWhite';

export function BentoGrid() {
	return (
		<section className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
			<CardRed>
				<h3 className='text-xl font-semibold'>Saldo actual</h3>
				<p
					className='mt-2'
					style={{ color: 'color-mix(in srgb, #FFFFFF 75%, transparent)' }}>
					$25,340.00 MXN
				</p>
				<button
					className='mt-4 rounded-md px-4 py-2 font-medium'
					style={{ background: '#fff', color: 'var(--brand-500)' }}>
					Ver detalles
				</button>
			</CardRed>

			<CardGrey>
				<h3 className='text-xl font-semibold'>Próximos pagos</h3>
				<ul
					className='mt-3 list-disc pl-5'
					style={{ color: 'color-mix(in srgb, var(--fg) 70%, transparent)' }}>
					<li>Tarjeta crédito: $1,200 — 15 Sep</li>
					<li>Hipoteca: $8,500 — 30 Sep</li>
				</ul>
				<button className='btn-primary mt-4'>Pagar ahora</button>
			</CardGrey>

			<CardWhite>
				<h3 className='text-xl font-semibold'>Ahorro</h3>
				<p
					className='mt-2'
					style={{ color: 'color-mix(in srgb, var(--fg) 70%, transparent)' }}>
					Meta mensual: $5,000
				</p>
				<div
					className='mt-4 w-full rounded-full h-3'
					style={{ background: 'var(--muted)' }}>
					<div
						className='h-3 rounded-full'
						style={{ background: 'var(--brand-500)', width: '66%' }}
					/>
				</div>
				<span
					className='text-sm mt-2 block'
					style={{ color: 'color-mix(in srgb, var(--fg) 70%, transparent)' }}>
					67% alcanzado
				</span>
			</CardWhite>
		</section>
	);
}
