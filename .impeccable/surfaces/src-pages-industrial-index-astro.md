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

OWN-WORLD: negro real —no el papel claro del 24/09, revertido por decisión
del cliente el 26/09— con el rojo de marca (`--rojo`, el ya levantado para
fondo oscuro) como único acento; nunca el naranja de Pickle Robot, que no es
la tinta de la casa. Tipografía y latón del Programa de Sala se mantienen:
Source Serif 4 + Archivo, filetes hairline, jamás tarjetas con sombra.

STORY: el visitante ve el deck trabajando de entrada, ve a quién sirve Spot
—34 logos subidos justo después del hero, no al final del programa—, entiende
los tres frentes como pilares de capacidad, confía en la herencia de más de
70 años como prueba (no hay testimonio de cliente real que inventar, así que
no se inventa uno), y termina en un cierre de contacto directo.

FIRST VIEWPORT: vídeo del deck a ancho completo detrás del titular, texto a la
izquierda, dos CTA (Hablemos / Ver productos) — misma composición de la ronda
anterior, con el fondo vuelto a negro y el acento vuelto a rojo.

FORM: mundo pinneado por el brief del cliente (picklerobot.com). Decisión del
26/09 (traducir, nunca calcar) revisada por el usuario el 27/09/2026: pidió
fidelidad literal a la estructura de picklerobot.com por encima de la
traducción templada, y se ejecutó — geometría, composición y tratamiento de
imagen replicados con la mayor fidelidad técnica posible; color e identidad
siguen siendo de la casa (rojo `--rojo`, nunca el verde ni el naranja de
Pickle). Cambios concretos de esta ronda: se completó la reversión de
claro→negro pendiente desde el 26/09 (tres envoltorios `data-panel="claro"`
quitados de `industrial/index.astro`, la regla muerta quitada de
`tokens.css`); `.motor__claro` pasa de blanco a `--placa` (panel de contraste
sin blanco, honrando el veto del cliente al papel claro); los enlaces de
acción sueltos (`.motor__enlace` y las dos acciones de la apertura) se
unifican bajo `.apertura__accion`, el botón rectangular ya existente en el
sistema —sin radio, con variante llena y variante de línea—, igual que los
botones reales de picklerobot.com; se añadió `--mono` (pila de sistema, sin
autohospedar) sólo para el rótulo de esos botones y de `.pestanas`, la caja
de máquina que pide el brief. Tipografía de titular (Source Serif 4 + cursiva
viva) y el raíl de numerales romanos no se tocan: son identidad propia de
Spot sin equivalente en Pickle, y la prioridad del pedido pone estructura y
color por delante de un cambio de familia tipográfica no pedido explícitamente
para el cuerpo del programa.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance. Pendiente de esta ronda: correr `impeccable critique` y el
finish-reviewer antes de dar el build por cerrado.
