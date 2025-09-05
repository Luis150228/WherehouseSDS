// src/components/CardRed.tsx
export function CardRed({ children }: { children: React.ReactNode }) {
	return (
		<div
			className='rounded-lg p-6 shadow'
			style={{ background: 'var(--brand-500)', color: '#fff' }}>
			{children}
		</div>
	);
}
