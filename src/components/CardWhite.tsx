export function CardWhite () {
        return (
        <div className="bg-white text-dark-900 rounded-lg p-6 shadow border border-mid-500/30">
          <div>
            <h3 className="text-xl font-semibold">Ahorro</h3>
            <p className="mt-2 text-mid-500">Meta mensual: $5,000</p>
          </div>
          <div className="mt-4 w-full bg-light-50 rounded-full h-3">
            <div className="bg-santander-500 h-3 rounded-full w-2/3"></div>
          </div>
          <span className="text-sm text-mid-500 mt-2 block">67% alcanzado</span>
        </div>
    )
}