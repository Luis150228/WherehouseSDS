import { useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark'

export function useTheme() {
    const getPreferred = (): ThemeMode => { const saved = localStorage.getItem('theme') as ThemeMode | null
        if (saved === 'light' || saved === 'dark') return saved
        const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        return mq ? 'dark' : 'light' }

    const [mode, setMode] = useState<ThemeMode>(() => getPreferred())

    useEffect(() => { 
        const root = document.documentElement
        if (mode === 'dark') root.setAttribute('data-theme', 'dark')
            else root.removeAttribute('data-theme')
        localStorage.setItem('theme', mode) }, [mode])

    const toggle = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'))

    return { mode, setMode, toggle }
}