---
version: 1
slug: "src-pages-industrial-index-astro"
primary_target: "src/pages/industrial/index.astro"
related_targets: []
---

Alcance: `src/pages/industrial/index.astro`. Modo del visitante: Persuadir.

Público y trabajo: compradores del sector industrial (operaciones, logística,
mantenimiento, compras) evaluando un proveedor — heredan la relación que antes
era ALW Colombia.

Contenido real disponible (26/09/2026): catálogo Spot Industries 2026 completo
en `industrial.ts` (tres frentes, nueve familias de producto, servicios, a la
medida, software/demarcación, ocho plazas, herencia ALW con dos cifras que
declara el catálogo); 34 logotipos de cliente unificados en `Muro`; vídeo real
del deck de rodillos en un furgón; nueve fotos propias de obra 2026
(cerramientos de seguridad, estaciones de pesaje) en `Galeria`. Sigue sin
resolver: dos o tres proyectos con resultado verificable (sesión Proyectos
sigue en «Próximamente»), autorización escrita de marca para los 34 logos y
para DHL específicamente (visible en el vídeo del hero), y confirmación de las
cifras de herencia ALW antes de publicar en abierto — ninguna de las tres se
inventa para esta ronda.

## Direction contract

THESIS: Industrial deja de leerse como un programa de sala impreso en papel
claro y se lee como una casa de automatización física seria — la promesa es
"seguimos operando", no "aquí está nuestro catálogo"; rechaza el orden de PDF
(frentes → productos → servicios → …) como estructura de persuasión.

OWN-WORLD: negro cartulina como base, con tres bandas que invierten a claro —
el panel derecho del motor, la sesión I completa y la afirmación-corchete —
calcando la alternancia oscuro/claro de picklerobot.com. Historia completa:
negro puro desde el 26/09 (reversión de un primer ensayo claro), fidelidad
literal de estructura sin color el 27/09, y el 01/10/2026 el cliente pidió ir
hasta el final y calcar también esa alternancia. `.claro` / `.sesion--claro`
(tokens.css) remapean los mismos tokens que ya usa cada componente —igual que
`[data-pista='b']` remapea `--live`— así que ningún componente aprende un
color nuevo: el negro cartulina se vuelve el papel (`#EDE9E1`, el mismo hueso
que ya era tinta), la tinta hueso se vuelve tinta real (`#0A0A0A`), y lo vivo
se oscurece a `#B3261A` (el mismo rojo de marca, bajado de luz en vez de
subido, para seguir pasando AA sobre papel claro). Nunca el verde ni el
naranja de Pickle — el acento sigue siendo el rojo de la casa en las dos
luces. Tipografía y latón del Programa de Sala se mantienen: Source Serif 4 +
Archivo, filetes hairline, jamás tarjetas con sombra ni esquinas redondeadas.

STORY: el visitante ve el deck trabajando de entrada, ve a quién sirve Spot
—34 logos subidos justo después del hero—, entra en el motor (el método
explicado a dos paneles, oscuro-claro, como el Dill Autonomy Engine), sigue
en una banda clara ininterrumpida por los tres frentes con su barra de
pestañas, vuelve a negro para las dos galerías de obra real, respira en el
corchete claro ("Diseñamos, fabricamos y mantenemos" — el «We Pick Things» de
Pickle, probado con lo que la casa puede demostrar hoy), y termina el resto
del programa en negro hasta el cierre de contacto.

FIRST VIEWPORT: sin cambios de esta ronda — vídeo del deck a ancho completo
detrás del titular, texto a la izquierda, dos CTA (Hablemos / Ver productos).

FORM: mundo pinneado por el brief del cliente (picklerobot.com), ronda sobre
ronda hacia mayor fidelidad literal. Cambios concretos de esta ronda (01/10):
tres bandas claras reinstaladas (`.motor__claro`, `<Sesion n="I">` completa,
`.afirmacion.corchete`) vía `.claro`/`.sesion--claro`, con bleed a 100vw igual
al truco ya usado por el filete entre sesiones; espaciado de `.motor`,
`.afirmacion`, `.pestanas` ensanchado (de `--s4`/`--s6` a `clamp(--s6, 16vh,
10rem)` y `--s5`) para acercarse al aire generoso de la referencia. Pendiente
de verificación encontrada en el camino: un `color` sin `var()` explícito en
un elemento dentro de una banda clara hereda el valor YA RESUELTO del body
(cartulina), no la variable — se corrigió fijando `color: var(--ink-body)`
en la propia regla `.claro, .sesion--claro`; cualquier nuevo elemento de texto
sin color propio dentro de estas bandas hereda correctamente a partir de ahí.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance. Pendiente de esta ronda: correr `impeccable critique` y el
finish-reviewer antes de dar el build por cerrado; actualizar DESIGN.md
(`Dónde el sistema es delgado` y `Colors`/`Don't`) para registrar que la
Pista B ya no es "un solo esquema sin modo claro" — eso ahora es falso.
