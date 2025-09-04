import type { ReactNode } from "react";

interface DoubleCardProps { minHeight?: string; // por ejemplo "180px" 
bgColor?: string; // clases tailwind ej. "bg-santander-500" 
column?: string; // clases tailwind ej. "text-white" 
textColor?: string; // clases tailwind ej. "text-white" 
children: ReactNode; // el contenido completo que quieras pasar (h3, p, div...)
}

function DoubleCard({ minHeight = "180px", column="4", bgColor = "bg-santander-500", textColor = "text-white", children, }: DoubleCardProps) { 
    return (
        <div className={`card lg:col-span-${column} ${bgColor} ${textColor} min-h-[${ minHeight }]`} > {children}
        </div>
    );
}

export default DoubleCard