// src/components/CardWhite.tsx
export function CardWhite({ children }: { children: React.ReactNode }) {
	return (
		<div
			className='rounded-lg p-6 shadow'
			style={{ background: 'var(--card)', color: 'var(--fg)', border: '1px solid var(--border)' }}>
			{children}
		</div>
	);
}
