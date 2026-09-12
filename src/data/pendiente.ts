/* La línea Industrial no tiene material propio todavía: ni catálogo, ni fichas,
   ni fotografías, ni lista de servicios redactada. Este archivo declara los
   huecos en lugar de rellenarlos. Cada entrada se imprime en el sitio como una
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
    n: 'II',
    titulo: 'Capacidades',
    requiere:
      'La lista de servicios industriales que Spot presta hoy, con una línea de alcance por servicio.',
    formato: 'Entre cuatro y ocho entradas. Nombre del servicio, una frase de alcance.',
  },
  {
    n: 'III',
    titulo: 'Proyectos',
    requiere:
      'Dos o tres proyectos reales: sector, problema, intervención y resultado verificable.',
    formato: 'Un párrafo por proyecto, más el nombre del cliente si autoriza aparecer.',
  },
  {
    n: 'IV',
    titulo: 'Clientes industriales',
    requiere:
      'Confirmación de qué clientes pertenecen a esta línea y sus logotipos en vectorial.',
    formato:
      'SVG o EPS con fondo transparente. En el sitio de pruebas aparecen DHL Global Forwarding, Teclogi, Aerosan y Caribe Cargo: falta confirmar si son de esta línea o de Experiencias.',
  },
  {
    n: 'V',
    titulo: 'Herencia ALW Colombia',
    requiere:
      'Decisión sobre si la trayectoria previa como ALW Colombia se comunica en abierto, y con qué palabras.',
    formato:
      'Una decisión de sí o no, y si es sí, el párrafo aprobado. No se publica nada sobre la marca anterior sin ese visto bueno.',
  },
];

/* Material gráfico que el sitio pide y todavía no existe. */
export const materialFaltante = [
  'Logotipos de cliente en vectorial. Los del portafolio están incrustados como raster dentro del PDF, a resolución de pantalla.',
  'Fotografía propia de experiencias dirigidas, con derechos de uso confirmados por cliente.',
  'Fotografía o render de la línea Industrial. No existe ninguna imagen de esta línea.',
];
