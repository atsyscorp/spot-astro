/* Los trece logotipos que aparecen en `Spot · Portafolio.pdf`, extraídos de la
   página 9 del propio portafolio del cliente y pasados a tinta hueso sobre
   transparencia para que vivan sobre la cartulina negra.

   PROCEDENCIA: recortados del PDF entregado por el cliente, no de internet.
   Resolución de origen: de pantalla. Cuando lleguen los vectoriales del cliente
   se reemplazan archivo por archivo sin tocar este código.

   PENDIENTE DE CONFIRMACIÓN ESCRITA: publicar estas marcas bajo «Nos eligen
   quienes no se equivocan al elegir» es la afirmación de mayor riesgo del
   sitio. El portafolio las presenta así, pero eso no es una autorización. */

export type Cliente = { archivo: string; nombre: string; w: number; h: number };

export const clientesLogos: Cliente[] = [
  { archivo: 'motorola-solutions', nombre: 'Motorola Solutions', w: 157, h: 136 },
  { archivo: 'red-hat', nombre: 'Red Hat', w: 209, h: 54 },
  { archivo: 'carvajal', nombre: 'Carvajal', w: 139, h: 139 },
  { archivo: 'colsubsidio', nombre: 'Colsubsidio', w: 266, h: 58 },
  { archivo: 'vitalis', nombre: 'Vitalis', w: 173, h: 137 },
  { archivo: 'bosch', nombre: 'Bosch', w: 220, h: 51 },
  { archivo: 'camara-comercio-bogota', nombre: 'Cámara de Comercio de Bogotá', w: 203, h: 65 },
  { archivo: 'teclogi', nombre: 'Teclogi', w: 206, h: 62 },
  { archivo: 'ixl-center', nombre: 'IXL Center', w: 199, h: 66 },
  { archivo: 'camara-comercio-manizales', nombre: 'Cámara de Comercio de Manizales por Caldas', w: 199, h: 119 },
  { archivo: 'jelou', nombre: 'Jelou', w: 181, h: 50 },
  { archivo: 'berkley-colombia-seguros', nombre: 'Berkley Colombia Seguros', w: 362, h: 57 },
  { archivo: 'buentipo-anchor', nombre: 'Buentipo · Anchor', w: 333, h: 73 },
];
