export function Footer() { return ( <footer className="border-t border-light-50 bg-white">
  <div
    className="max-w-7xl mx-auto px-4 py-6 text-sm text-mid-500 flex flex-col sm:flex-row items-center gap-2 justify-between">
    <span>© {new Date().getFullYear()} Santander UI — Demo</span>
    <nav className="flex items-center gap-4"> <a href="#" className="link">Términos</a> <a href="#"
        className="link">Privacidad</a> <a href="#" className="link">Soporte</a> </nav>
  </div>
</footer> ) }