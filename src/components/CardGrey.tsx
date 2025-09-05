// src/components/CardGrey.tsx
export function CardGrey({ children }: { children: React.ReactNode }) {
	return (
		<div
			className='rounded-lg p-6 shadow'
			style={{ background: 'var(--muted)', color: 'var(--fg)', border: '1px solid var(--border)' }}>
			{children}
		</div>
	);
}
