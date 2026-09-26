/* Unificación acordada en la reunión del 19/09/2026: los treinta y cuatro
   logotipos de las dos pistas se muestran en ambos muros de cliente, no sólo
   en la suya. «Independientemente que unos sean por experiencias y otros por
   industrias, al final son de Spot» (Camilo Altamar). Nada nuevo se recorta:
   es la misma unión de `clientes.ts` y `clientes-industrial.ts`, cada logo
   con la carpeta donde ya vive su archivo .webp.

   Sigue pendiente exactamente lo mismo que antes de unificar, ahora para el
   conjunto completo: ninguna de las treinta y cuatro marcas tiene
   autorización escrita de uso. Ver `ENTREGA.md`. */

import { clientesLogos, type Cliente } from './clientes';
import { clientesIndustriales } from './clientes-industrial';

export const clientesUnificados: Cliente[] = [
  ...clientesLogos.map((c) => ({ ...c, carpeta: 'clientes' })),
  ...clientesIndustriales.map((c) => ({ ...c, carpeta: 'clientes-industrial' })),
];
