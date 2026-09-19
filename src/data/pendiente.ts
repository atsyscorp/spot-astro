/* Desde el 18/09/2026 la línea Industrial sí tiene material propio: el
   `Catálogo SPOT LATAM 2026` alimenta productos, servicios, fabricación a la
   medida, software, demarcación y cobertura, y todo eso vive en
   `industrial.ts`. Lo que el catálogo no contiene —casos con resultado
   verificable y la lista confirmada de clientes— se queda aquí. Este archivo
   declara los huecos en lugar de rellenarlos. Cada entrada se imprime en el sitio como una
   sesión del programa con su contenido por confirmar: el visitante ve la
   estructura y el cliente ve exactamente qué tiene que entregar.

   Regla: aquí nunca se escribe una capacidad, una certificación, un caso ni un
   cliente como si fuera un hecho. Sólo la forma del hueco. */

export type Hueco = {
  n: string;
  titulo: string;
  /** Qué irá aquí cuando el cliente entregue el material. */
  requiere: string;
  /** Formato esperado, para que la entrega sea inequívoca. */
  formato: string;
};

export const huecosIndustrial: Hueco[] = [
  {
    n: 'I',
    titulo: 'Proyectos',
    requiere:
      'Dos o tres proyectos reales: sector, problema, intervención y resultado verificable. El catálogo enseña lo que la casa sabe hacer; un proyecto enseña lo que resolvió.',
    formato: 'Un párrafo por proyecto, más el nombre del cliente si autoriza aparecer.',
  },
  {
    n: 'II',
    titulo: 'Clientes industriales',
    requiere:
      'Confirmación de qué clientes pertenecen a esta línea y sus logotipos en vectorial.',
    formato:
      'SVG o EPS con fondo transparente. En la reunión del 15/09/2026 se nombraron cadenas de restaurantes y empresas del sector aéreo; la página 25 del catálogo trae el muro completo, pero en raster y sin confirmación por escrito de quién puede aparecer.',
  },
];

/* Material gráfico que el sitio pide y todavía no existe. */
export const materialFaltante = [
  'Logotipos de cliente en vectorial. Los del portafolio están incrustados como raster dentro del PDF, a resolución de pantalla.',
  'Fotografía propia de experiencias dirigidas, con derechos de uso confirmados por cliente.',
  'Fotografía de la línea Industrial a resolución de web. El catálogo trae fotografía real de producto, pero incrustada en el PDF y comprimida; para usarla en el sitio hacen falta los originales.',
];
