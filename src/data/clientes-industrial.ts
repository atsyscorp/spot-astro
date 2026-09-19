/* Los veintiún logotipos del muro de clientes de la página 25 del
   `Catálogo SPOT LATAM 2026`, recortados del propio PDF del cliente y pasados a
   tinta hueso sobre transparencia, exactamente con el mismo tratamiento que los
   trece de la Pista A: el RGB queda fijo en #EAE6DE y toda la forma vive en el
   canal alfa.

   PROCEDENCIA: recortados del catálogo entregado por Mauricio Altamar el
   15/09/2026, no de internet. Cada recorte trae su propio fondo —unos sobre
   blanco, otros sobre placa negra—, así que el alfa se tomó de la distancia al
   fondo de cada uno y no de un umbral común. Resolución de origen: de pantalla.
   Cuando lleguen los vectoriales se reemplazan archivo por archivo sin tocar
   este código.

   PENDIENTE DE CONFIRMACIÓN ESCRITA, igual que en la Pista A: el catálogo los
   presenta como clientes, pero un muro de logotipos no es una autorización de
   uso de marca. Antes de producción hay que confirmar quién puede aparecer.

   DOS AVISOS MÁS, para que nadie los dé por resueltos:
   · «Beer» es la transcripción literal del logotipo —un grifo en círculo y la
     palabra BEER con la R final invertida—. No se identificó la razón social,
     así que se transcribe la marca y no se le inventa un nombre.
   · En la reunión del 15/09 se nombraron también Avianca y DHL. **No están en
     este muro** y por eso no están aquí. Si son clientes, tienen que llegar
     como material, no como recuerdo de una conversación. */

import type { Cliente } from './clientes';

export const clientesIndustriales: Cliente[] = [
  { archivo: 'alpasar', nombre: 'Alpasar Servicios Logísticos', w: 268, h: 80 },
  { archivo: 'beer', nombre: 'Beer', w: 247, h: 80 },
  { archivo: 'buffalo-wings', nombre: 'BW Buffalo Wings Colombia', w: 129, h: 150 },
  { archivo: 'burger-king', nombre: 'Burger King', w: 136, h: 150 },
  { archivo: 'caribe-cargo', nombre: 'Caribe Cargo', w: 216, h: 150 },
  { archivo: 'cedi', nombre: 'CEDI Colombian', w: 200, h: 105 },
  { archivo: 'colombian-air-cargo', nombre: 'Colombian Air Cargo S.A.', w: 248, h: 76 },
  { archivo: 'courierbox', nombre: 'CourierBox', w: 207, h: 45 },
  { archivo: 'el-corral', nombre: 'Hamburguesas El Corral', w: 248, h: 128 },
  { archivo: 'fedex', nombre: 'FedEx', w: 303, h: 112 },
  { archivo: 'home-burgers', nombre: 'Home Burgers', w: 140, h: 140 },
  { archivo: 'inter-rapidisimo', nombre: 'Inter Rapidísimo', w: 283, h: 59 },
  { archivo: 'la-esperanza', nombre: 'La Esperanza Industrial de Alimentos', w: 192, h: 144 },
  { archivo: 'lenos-y-carbon', nombre: 'Leños & Carbón', w: 264, h: 64 },
  { archivo: 'logistica-group', nombre: 'Logística Group', w: 200, h: 97 },
  { archivo: 'papa-johns', nombre: "Papa John's Pizza", w: 279, h: 113 },
  { archivo: 'pasarex', nombre: 'Pasarex', w: 311, h: 79 },
  { archivo: 'pepe-ganga', nombre: 'Pepe Ganga', w: 266, h: 118 },
  { archivo: 'schapeli', nombre: 'Schapeli', w: 195, h: 150 },
  { archivo: 'stilotex', nombre: 'Stilotex', w: 248, h: 72 },
  { archivo: 'taescol', nombre: 'Taescol Ground & Cargo Handling', w: 380, h: 138 },
];
