import CardBento from "./Cards/CardBento";
export function BentoGrid() { return ( 
<section className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6"> 
  {/* Tarjeta grande */} 
  <CardBento minHeight='180px' column="4" bgColor="--color-light-50">
    <h3 className="font-semibold mb-2 text-mid-500">Resumen</h3>
    <p className="text-sm text-mid-500">Equipos en Almacen</p>
    <div className="mt-4 h-42 rounded-lg bg-gray-200" />
  </CardBento>

  {/* Tarjeta alta */}
  <CardBento minHeight='180px' column="2" bgColor="--color-light-50">
    <h3 className="font-semibold mb-2 text-mid-500">Resumen</h3>
    <p className="text-sm text-mid-500">Equipos en Almacen</p>
    <div className="mt-4 h-42 rounded-lg bg-gray-200" />
  </CardBento>
  
  <CardBento minHeight='180px' column="2" bgColor="--color-light-50">
    <h3 className="font-semibold mb-2 text-mid-500">Resumen</h3>
    <p className="text-sm text-mid-500">Equipos en Almacen</p>
    <div className="mt-4 h-42 rounded-lg bg-gray-200" />
  </CardBento>


  {/* Fila 2 */}
  <CardBento minHeight='180px' column="2" bgColor="--color-light-50">
    <h3 className="font-semibold mb-2 text-mid-500">Fila 2</h3>
    <p className="text-sm text-mid-500">Equipos en Almacen</p>
    <div className="mt-4 h-42 rounded-lg bg-gray-200" />
  </CardBento>
  <CardBento minHeight='180px' column="4" bgColor="--color-light-50">
    <h3 className="font-semibold mb-2 text-mid-500">Fila 2</h3>
    <p className="text-sm text-mid-500">Equipos en Almacen</p>
    <div className="mt-4 h-42 rounded-lg bg-gray-200" />
  </CardBento>

</section>

) }
