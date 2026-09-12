/* Todo el contenido de este archivo proviene de `Spot · Portafolio.pdf`.
   Nada aquí está inventado. Lo que falta está marcado como pendiente en
   `pendiente.ts` — nunca rellenado con texto de relleno que parezca real. */

export const marca = {
  nombre: 'Spot',
  lema: 'Strategy, made tangible.',
  territorios: ['Cambridge', 'Bogotá', 'México'],
  correos: ['gerencia@spotlatam.com', 'contacto@spotlatam.com'],
  telefono: '+1 (781) 491 6039',
  telefonoHref: '+17814916039',
  sitio: 'www.spotlatam.com',
  cierre: [
    'Pensamos como consultores.',
    'Ejecutamos como productores.',
    'Cuidamos como boutique.',
  ],
};

export const tesis = {
  titular: ['No diseñamos eventos.', 'Diseñamos decisiones que se recuerdan.'],
  cuerpo:
    'Las experiencias corporativas más poderosas no se miden en asistentes, escenarios o producción. Se miden en lo que cambia después de que la luz se apaga: una alianza, una decisión de junta, una cultura que se mueve.',
  diagnostico:
    'La mayoría de las experiencias corporativas fallan antes de empezar: nacen como logística, no como estrategia.',
  errorComun: ['Logística', 'Estética', 'Ejecución'],
  metodoSpot: ['Primero el pensamiento', 'Después el concepto', 'Al final, la ejecución impecable'],
  remate: 'Primero el pensamiento. Después el concepto. Al final, la ejecución impecable que todos dan por hecho.',
};

export const principios = [
  {
    n: '01',
    titulo: 'Estrategia antes que producción.',
    cuerpo: 'Cada experiencia responde a un objetivo de negocio. Si no lo mueve, no la hacemos.',
  },
  {
    n: '02',
    titulo: 'Narrativa antes que estética.',
    cuerpo: 'La belleza sin mensaje es decoración. Nosotros construimos significado.',
  },
  {
    n: '03',
    titulo: 'Impacto antes que impresión.',
    cuerpo: 'No buscamos el wow del momento. Buscamos la conversación del lunes siguiente.',
  },
];

export const practicas = [
  {
    n: 'I',
    titulo: 'Strategy',
    cuerpo: 'Consultoría, conceptualización y arquitectura de experiencias.',
    nota: 'Pensamiento que antecede la ejecución.',
    pista: 'a' as const,
  },
  {
    n: 'II',
    titulo: 'Experiences',
    cuerpo: 'Summits, eventos corporativos e institucionales de alto nivel.',
    nota: 'Plataformas que convocan a los que deciden.',
    pista: 'a' as const,
  },
  {
    n: 'III',
    titulo: 'Culture & Recognition',
    cuerpo: 'Programas de cultura, reconocimiento y talento.',
    nota: 'Experiencias que transforman equipos.',
    pista: 'a' as const,
  },
  {
    n: 'IV',
    titulo: 'Industrial',
    cuerpo: 'Proyectos estratégicos para el sector industrial.',
    nota: 'Soluciones donde la estrategia es crítica.',
    pista: 'b' as const,
  },
];

export const spotboxes =
  'TheSpotBoxes · curaduría tangible de experiencias con propósito.';

export const metodo = [
  { n: 'I', titulo: 'Escuchar', cuerpo: 'Leemos el contexto, el negocio y la ambición. Antes del qué, entendemos el porqué.' },
  { n: 'II', titulo: 'Concebir', cuerpo: 'Traducimos el insight en una idea con narrativa, propósito y dirección estratégica.' },
  { n: 'III', titulo: 'Curar', cuerpo: 'Seleccionamos contenidos, voces, símbolos y detalles. Cada elemento responde al concepto.' },
  { n: 'IV', titulo: 'Construir', cuerpo: 'Diseñamos la arquitectura del proyecto y lo ejecutamos con precisión quirúrgica.' },
  { n: 'V', titulo: 'Trascender', cuerpo: 'Medimos lo que permanece, lo que se conversa, lo que transforma.' },
];

/* Las cifras se dibujan como campo medido: cada marca es una unidad real.
   `marcas` es lo que se dibuja; `cifra` es lo que se lee. */
export const peso = [
  {
    cifra: '+5.800',
    unidad: 'líderes C-level',
    cuerpo: 'impactados directamente en las experiencias que hemos dirigido.',
    marcas: 5800,
    campo: 'trama' as const,
  },
  {
    cifra: '+30',
    unidad: 'experiencias estratégicas',
    cuerpo: 'diseñadas y ejecutadas para clientes corporativos e institucionales.',
    marcas: 30,
    campo: 'marcas' as const,
  },
  {
    cifra: '+12',
    unidad: 'ediciones de congresos',
    cuerpo: 'de alto nivel bajo nuestra dirección estratégica y curatorial.',
    marcas: 12,
    campo: 'marcas' as const,
  },
  {
    cifra: '3',
    unidad: 'mercados',
    cuerpo: 'operando de forma nativa: Estados Unidos, Colombia y México.',
    marcas: 3,
    campo: 'marcas' as const,
  },
];

export const territorios = [
  {
    n: 'I',
    titulo: 'Congresos de industria',
    cuerpo: 'Dirigimos plataformas de pensamiento que convocan a los líderes que mueven sectores enteros.',
    nombres: ['InnovaLatam', 'BiFOR', 'Blockchain Summit'],
  },
  {
    n: 'II',
    titulo: 'Experiencias corporativas privadas',
    cuerpo: 'Diseñamos y co-creamos encuentros cerrados para equipos ejecutivos, juntas directivas y audiencias estratégicas.',
    nombres: ['Carvajal', 'Motorola', 'Berkley Seguros', 'IXL Center'],
  },
  {
    n: 'III',
    titulo: 'Plataformas institucionales',
    cuerpo: 'Acompañamos a entidades y cámaras que usan la experiencia como herramienta de posicionamiento regional y nacional.',
    nombres: ['Cámara de Comercio de Bogotá', 'Manizales', 'Cartagena'],
  },
];

/* Los trece que aparecen con logotipo en el portafolio 2026. */
export const clientes = [
  'Motorola Solutions',
  'Vitalis',
  'Carvajal',
  'Cámara de Comercio de Manizales por Caldas',
  'Teclogi',
  'Bosch',
  'Red Hat',
  'Jelou',
  'IXL Center',
  'Colsubsidio',
  'Cámara de Comercio de Bogotá',
  'Berkley Colombia Seguros',
  'Buentipo · Anchor',
];

export const clientesTitular = ['Nos eligen quienes no se equivocan', 'al elegir.'];
