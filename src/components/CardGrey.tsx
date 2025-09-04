export function CardGrey () {
        return (
        <div className="bg-light-50 text-dark-900 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold">Próximos pagos</h3>
          <ul className="mt-3 text-mid-500 list-disc pl-5 space-y-1">
            <li>Tarjeta crédito: $1,200 — 15 Sep</li>
            <li>Hipoteca: $8,500 — 30 Sep</li>
          </ul>
          <button className="mt-4 bg-santander-500 text-white px-4 py-2 rounded-md hover:bg-dark-900">
            Pagar ahora
          </button>
        </div>
    )
}