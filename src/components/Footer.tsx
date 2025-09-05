// src/components/Footer.tsx
export function Footer() {
	return (
		<footer style={{ background: 'var(--card)', borderTop: '1px solid var(--border)' }}>
			<div
				className='max-w-7xl mx-auto px-4 py-4 text-sm'
				style={{ color: 'color-mix(in srgb, var(--fg) 70%, transparent)' }}>
				© 2025 Demo —{' '}
				<a
					href='#'
					style={{ color: 'var(--brand-500)' }}>
					Privacidad
				</a>
			</div>
		</footer>
	);
}
