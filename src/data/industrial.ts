/* Todo el contenido de este archivo procede de
   `resources/Catálogo SPOT LATAM 2026_compressed.pdf`, entregado por Mauricio
   Altamar tras la reunión del 15/09/2026. Nada aquí está inventado: ni una
   capacidad, ni una cifra, ni una ciudad, ni una acreditación.

   La estructura es la del propio catálogo —Productos, Servicios, Diseño y
   fabricación a la medida, más Software y Demarcación—, no una taxonomía
   nuestra: es el encuadre con el que la casa se presenta hoy.

   Lo que el catálogo no contiene sigue declarado como hueco en `pendiente.ts`:
   proyectos con resultado verificable y la lista confirmada de clientes. */

export const industrial = {
  /* Portada del catálogo, literal: «Por tradición · 75 años de experiencia al
     servicio de la industria nacional». La cifra de 30 años aparece repetida
     en las páginas de equipos de medición y de servicios, siempre acotada a
     sistemas de pesaje. Son dos cifras distintas de dos cosas distintas, y así
     se publican. */
  tesis: {
    titular: ['Setenta y cinco años', 'al servicio de la industria.'],
    cuerpo:
      'Spot Industries diseña, fabrica y mantiene lo que mueve, almacena y pesa la carga de una operación. Tres frentes bajo un mismo criterio: producto de catálogo cuando lo resuelve, fabricación a la medida cuando no, y el mantenimiento que sostiene a los dos.',
    tradicion: 'Por tradición',
  },

  /* Las tres entradas de la página 2 del catálogo, en su orden y con su
     redacción. Es el índice de la casa. */
  frentes: [
    {
      n: 'I',
      titulo: 'Productos',
      cuerpo:
        'Sistemas para movilización de carga, estanterías, equipos de medición, ball transfer units, casters, rodillos y más.',
      ancla: '#productos',
    },
    {
      n: 'II',
      titulo: 'Servicios',
      cuerpo:
        'Mantenimientos preventivos y correctivos de básculas, balanzas, montacargas, estibadores, puertas y plataformas; calibración de equipos de medición por laboratorio acreditado ONAC.',
      ancla: '#servicios',
    },
    {
      n: 'III',
      titulo: 'Diseño y fabricación a la medida',
      cuerpo:
        'Decks fijos o pesadores, estructuras metálicas, mobiliario y sistemas especiales de acuerdo a la necesidad del cliente.',
      ancla: '#medida',
    },
  ],

  /* Las nueve familias de producto, páginas 5 a 14. El `detalle` es la lista
     literal de la página; donde el catálogo no enumera, no se enumera. */
  productos: [
    {
      n: '01',
      titulo: 'Sistemas para movilización de carga',
      cuerpo:
        'Movilización de carga con distintas opciones que se adaptan al tipo de industria, y fabricación de las estructuras metálicas que las sostienen.',
      detalle: ['Ball transfers', 'Casters', 'Rodillos'],
    },
    {
      n: '02',
      titulo: 'Movilización de carga en camiones',
      cuerpo:
        'Diseños especiales para mover pallets y contenedores aéreos dentro del vehículo.',
      detalle: [
        'Sistema motorizado para pallets y contenedores aéreos',
        'Sistema de rodillos por gravedad',
      ],
    },
    {
      n: '03',
      titulo: 'Posiciones deck motorizadas',
      cuerpo:
        'Sistema motorizado con rodillos hidráulicos que suben y bajan para permitir la manipulación en 360 grados.',
      detalle: [],
    },
    {
      n: '04',
      titulo: 'Estanterías',
      cuerpo:
        'Soluciones metalmecánicas de almacenamiento en bodega, para aprovechar el espacio y mejorar la manipulación y distribución de los productos.',
      detalle: ['Pesada', 'Semipesada', 'Liviana', 'Cantilever'],
    },
    {
      n: '05',
      titulo: 'Sistemas de pesaje especiales',
      cuerpo: 'Sistemas de pesaje diseñados y fabricados a la medida de la necesidad.',
      detalle: ['Banda báscula motorizada', 'Banda báscula por gravedad'],
    },
    {
      n: '06',
      titulo: 'Equipos de medición · pesaje',
      cuerpo:
        'Más de treinta años en sistemas de pesaje: asesoría, diseño y fabricación del equipo que la operación necesita.',
      detalle: [
        'Básculas',
        'Balanzas',
        'Pesaje dinámico y control automático',
        'Indicadores digitales',
        'Celdas de carga',
        'Cajas de empalme',
        'Pesas patrón',
      ],
    },
    {
      n: '07',
      titulo: 'Equipos de medición · precisión y registro',
      cuerpo: 'Equipos que además de pesar dejan constancia de lo pesado.',
      detalle: [
        'Balanzas con memoria e impresora',
        'Balanzas de alta precisión',
        'Básculas tipo gancho',
        'Liquidadoras',
      ],
    },
    {
      n: '08',
      titulo: 'Equipos de medición · otras magnitudes',
      cuerpo: 'Cuando lo que hay que controlar no es el peso.',
      detalle: [
        'Balanzas determinadoras de humedad',
        'Termómetros',
        'Termohigrómetros',
        'Dinamómetros',
      ],
    },
    {
      n: '09',
      titulo: 'Logística en bodega',
      cuerpo:
        'Sistemas de pesaje de bajo perfil y de recibo, diseñados y fabricados en casa, y el equipo que los acompaña.',
      detalle: [
        'Apiladores semieléctricos',
        'Estibadores sencillos o con báscula',
        'Estibas de carga para trabajo pesado',
        'Estibas especiales',
        'Impresoras para básculas',
      ],
    },
  ],

  /* Página 16. La acreditación ONAC es de los laboratorios aliados, no de la
     casa: el catálogo lo dice así y así se escribe. */
  servicios: [
    {
      n: '01',
      titulo: 'Mantenimiento de básculas y balanzas',
      cuerpo:
        'Preventivo y correctivo, con personal técnico propio para todo lo relacionado con equipos de medición.',
    },
    {
      n: '02',
      titulo: 'Calibración de equipos de medición',
      cuerpo:
        'Mediante alianza con laboratorios acreditados ONAC. La acreditación es del laboratorio aliado.',
    },
    {
      n: '03',
      titulo: 'Ajuste de peso con patrones certificados',
      cuerpo: 'El equipo vuelve a decir la verdad, y queda constancia de con qué se comprobó.',
    },
    {
      n: '04',
      titulo: 'Mantenimiento de montacargas y estibadores',
      cuerpo: 'Preventivo y correctivo sobre el equipo que mueve la carga dentro de la bodega.',
    },
    {
      n: '05',
      titulo: 'Mantenimiento de cortinas y plataformas',
      cuerpo: 'Preventivo y correctivo sobre los puntos por donde la carga entra y sale.',
    },
  ],

  /* Páginas 19 a 21. El catálogo cierra la lista con «¡y todo lo que se
     imagine!»; aquí el remate va en la nota, no como capacidad. */
  medida: {
    piezas: [
      'Deck metálico a medida',
      'Decks fijos o pesadores',
      'Estructuras metálicas',
      'Roller abatible para camión',
      'Bandejas abatibles en camión',
      'Líneas de recibo',
      'Mobiliario especial',
      'Carros plegables para paquetería',
    ],
    remate: 'El catálogo lo cierra así: «y todo lo que se imagine».',
  },

  /* Página 22. */
  software: {
    titulo: 'Aplicativos para procesos de pesaje',
    cuerpo:
      'Desarrollos especiales para procesos de pesaje: creación de empresas, usuarios, productos y lotes, con trazabilidad de las mediciones.',
  },

  /* Página 23. Una línea en el catálogo, una línea aquí. */
  demarcacion: {
    titulo: 'Demarcación de bodegas',
    cuerpo: 'Servicio de demarcación de bodegas.',
  },

  /* Página 15, literal. Las ciudades son las que el catálogo declara; el
     alcance nacional se apoya en aliados estratégicos y el catálogo lo dice
     abiertamente, así que aquí también. */
  cobertura: {
    titulo: 'Alcance nacional',
    ciudades: [
      'Bogotá',
      'Medellín / Rionegro',
      'Cali',
      'Eje cafetero',
      'Barranquilla',
      'Cartagena',
      'Santa Marta',
      'Bucaramanga',
    ],
    nota:
      'Y otras plazas con aliados estratégicos, bajo las normas de procedimiento de la organización.',
  },

  /* La herencia. Redactada sólo con lo que el catálogo sostiene: la página 16
     firma como ALW y acota los treinta años a equipos de medición; la portada
     declara los setenta y cinco de tradición industrial. Ni un hito más.
     Pendiente de aprobación escrita del cliente antes de publicar. */
  herencia: {
    titulo: 'Antes fuimos ALW.',
    cuerpo:
      'La línea industrial de Spot es la continuidad de ALW: la misma casa, el mismo taller y el mismo personal técnico, ahora bajo una sola marca. De ahí vienen los setenta y cinco años de tradición al servicio de la industria nacional y los más de treinta en sistemas de pesaje que sostienen este catálogo.',
    /* Al margen va la procedencia, como en la sesión de cifras de la Pista A.
       El aviso de «pendiente de aprobación» vive en este comentario y en
       ENTREGA.md, no impreso en la página: es una anotación de trabajo, y una
       anotación de trabajo publicada es una grieta en el acabado. */
    nota: 'Setenta y cinco años de tradición y más de treinta en sistemas de pesaje, declarados en el catálogo 2026.',
  },

  /* Página 26 del catálogo. Son datos propios de la línea industrial, distintos
     de los de `marca` en `spot.ts`, que son los de Experiencias. */
  contacto: {
    oficina: '+601 656 5485',
    oficinaHref: '+576016565485',
    moviles: [
      { numero: '300 316 9501', href: '+573003169501' },
      { numero: '319 299 6731', href: '+573192996731' },
    ],
    correos: ['mauricio@spotlatam.com', 'fabio@spotlatam.com'],
  },
};
