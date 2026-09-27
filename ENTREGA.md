# Entrega — sitio Spot

Sitio estático en Astro que reemplaza el WordPress de pruebas de `spot.atsys.co`.
Tres páginas: la portada (puerta de elección) y los dos mundos.

## Cómo se trabaja

```bash
npm install
npm run dev      # desarrollo, http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisar lo que se publica
```

El resultado de `npm run build` es la carpeta `dist/`: HTML, CSS y fuentes
estáticos. Se sube tal cual a cualquier alojamiento estático (Netlify, Vercel,
Cloudflare Pages, o el mismo servidor donde hoy corre WordPress). No hace falta
base de datos ni PHP.

Antes de publicar en producción hay que cambiar `site` en `astro.config.mjs` si
el dominio final no es `https://spotlatam.com`. De ese valor dependen las URL
canónicas, las etiquetas Open Graph y el sitemap.

## Publicar la vista previa (Cloudflare Pages)

Gratis, tráfico ilimitado. Dos pasos, y el primero sólo una vez:

```bash
npm run login    # abre el navegador para autorizar tu cuenta de Cloudflare
npm run deploy   # compila y publica
```

`npm run deploy` crea el proyecto `spotlatam` la primera vez y devuelve una URL
`https://spotlatam.pages.dev`. Cada vez que se vuelva a correr, publica la
versión nueva en la misma dirección.

**La vista previa lleva `noindex`.** El archivo `public/_headers` manda
`X-Robots-Tag: noindex, nofollow` a los buscadores mientras la línea Industrial
esté en preparación y los logotipos de cliente sin confirmar. **Hay que borrar
ese bloque el día del lanzamiento** — está marcado dentro del archivo. El resto
de las cabeceras (seguridad y caché) se quedan.

Si el cliente no debe poder abrirla sin permiso, Cloudflare Access permite
gratis (hasta 50 personas) exigir un correo autorizado antes de ver la página.
Se configura desde el panel de Cloudflare, no desde el código.

## Estructura

| Ruta | Archivo | Qué es |
|---|---|---|
| `/` | `src/pages/index.astro` | La portada. Splitter puro: sólo la elección entre las dos pistas. |
| `/experiencias/` | `src/pages/experiencias/index.astro` | Pista A. Ocho sesiones, contenido completo. |
| `/industrial/` | `src/pages/industrial/index.astro` | Pista B. Diez sesiones con contenido real del catálogo 2026; dos declaradas en preparación. |

Todo el texto vive en `src/data/`, no en las plantillas:

- `src/data/spot.ts` — **todo procede de `Spot · Portafolio.pdf`**. Nada inventado.
- `src/data/industrial.ts` — **todo procede de `resources/Catálogo SPOT LATAM
  2026_compressed.pdf`**. Nada inventado: ni una capacidad, ni una cifra, ni una
  ciudad, ni una acreditación.
- `src/data/pendiente.ts` — los huecos de la línea Industrial, declarados en vez
  de rellenados. Cambiar este archivo cambia lo que el sitio pide.
- `src/data/clientes-unificados.ts` — junta `clientes.ts` y `clientes-industrial.ts`
  en una sola lista, acordado el 19/09/2026. La usan las dos pistas; no recorta
  logotipos nuevos, sólo une los que ya existían.

El símbolo de marca está en `brand/`, con su geometría medida documentada en
`brand/README.md`.

## Material propio del sitio

| Qué | De dónde salió |
|---|---|
| `public/video/experiencias.mp4` | Bucle de 12 s recortado de `Spot expriences.mp4` (el original se conserva en la raíz). 848 × 480 en origen. |
| `public/video/poster.webp` | Fotograma del mismo tramo. Es lo que ve quien no carga el vídeo. |
| `public/video/pensamos.mp4` | Bucle de 7 s recortado del mismo original, tramo 3–10 s: letras corpóreas y baño verde de sala. Es el telón de la sesión «Cómo pensamos», pedido por el cliente el 15/09/2026. |
| `public/video/pensamos-poster.webp` | Fotograma del segundo tramo. Es lo que se sirve en móvil y con movimiento reducido. |
| `public/sala/*.webp` | Nueve fotogramas del mismo material, elegidos **sin caras identificables**. |
| `public/clientes/*.webp` | Los trece logotipos, recortados de la página 9 del portafolio y pasados a tinta hueso. |
| `public/clientes-industrial/*.webp` | Los veintiún logotipos del muro de la página 25 del catálogo industrial, mismo tratamiento de tinta hueso. 292 KB. |
| `public/taller/*.webp` | Nueve fotogramas de instalaciones propias, recortados del catálogo a la misma caja que los de la sala. 380 KB. |
| `public/brand/spot-wordmark-white.webp` | El logotipo oficial entregado por el cliente. |

El vídeo sólo se descarga si el visitante no pidió menos movimiento, no está en
ahorro de datos, la conexión no es lenta y la pantalla da el ancho. En el resto
de casos se sirve el poster.

El segundo tramo se cortó en 3–10 s por la misma razón: a partir del segundo 10
el material entra en un plano cercano de dos personas con la cara legible, y ese
plano no se publica sin cesión.

**Sobre derechos de imagen:** en el material hay planos buenos de equipo y de
asistentes que no se usaron. Publicar personas reconocibles necesita cesión de
imagen; esa decisión es del cliente, no del código.

## Reunión del 15/09/2026 — qué se pidió y qué se hizo

| Lo que se pidió | Estado |
|---|---|
| «El diagnóstico y el cómo pensamos quedan muy planos, muy presentación» | **Hecho.** El cotejo del diagnóstico se traza al bajar en vez de estar impreso; «Cómo pensamos» se rehizo entera: telón con película propia, titular a tamaño de display y los tres principios en escalera. |
| «Que el cómo pensamos entre de otra forma distinta y vuelva a tener un vídeo de fondo diferente» | **Hecho.** Componente `Telon` con un segundo tramo del material real, distinto del de la apertura. |
| «Quisiera un poco más de movilidad en algunos otros lugares» | **Hecho.** Las entradas de lista de los dos mundos llegan desde abajo al cruzar la ventana (`.entra`), y cada principio lleva el anillo girando con el scroll. |
| «Acentos rojos para diferenciar la parte industrial» | **Hecho.** La Pista B enciende en `#FF5A4A`, el rojo del logotipo Spot Industries levantado para la cartulina. Se ve en la portada, en la práctica IV de Experiencias y en todo el mundo Industrial. |
| Más imágenes reales de eventos para la banda de sala, y vídeos complementarios | **Pendiente de material.** Camilo Altamar quedó en enviarlos. La banda de sala admite más fotogramas sin tocar el diseño: se añaden a `public/sala/` y a la lista de `Sala.astro`. |
| Catálogo y portafolio de Spot Industries | **Recibido y aplicado.** El catálogo 2026 (26 páginas) es ahora la fuente de `src/data/industrial.ts` y de las diez sesiones de la Pista B. |
| Logotipos de clientes de restaurantes (El Corral, Burger King, Búfalo, Wings, Homeburger) y aéreo (Avianca, FedEx, DHL) | **Hecho con el material existente.** El muro de la página 25 del catálogo trae veintiuno, incluidos El Corral, Burger King, Buffalo Wings, Home Burgers y FedEx; están en el sitio en tinta hueso. Avianca y DHL no aparecen en ese muro. Falta el vectorial y, sobre todo, la autorización escrita. |

## Reunión del 19/09/2026 — qué se pidió y qué se hizo

| Lo que se pidió | Estado |
|---|---|
| «Los números de la sección de prácticas están desalineados; aumentarlos un poco y reducir la opacidad» | **Hecho.** El numeral de cada práctica (Pista A) y de cada frente (Pista B, mismo patrón) crece, baja a 55% de opacidad y se alinea a la derecha de una columna más ancha — así «I», «II», «III» y «IV» comparten un mismo borde en vez de empezar cada uno donde le alcance el trazo. Token nuevo: `--t-practica-n` en `tokens.css`. |
| «Unificar la lista de logotipos: que las mismas treinta y cuatro marcas se muestren en las dos pistas» (Acordada) | **Hecho.** `src/data/clientes-unificados.ts` junta los trece de `clientes.ts` y los veintiuno de `clientes-industrial.ts`; `Muro.astro` ya sabe leer la carpeta de cada logo (algunos vienen de `clientes/`, otros de `clientes-industrial/`) y la usa en ambas pistas. La marquesina sigue en dos columnas — tres apretaba en pantalla angosta — pero el recorrido pasó de 42s a 65s para que, con más del doble de logotipos, cada uno se quede en pantalla el mismo tiempo que antes. El pie de la Pista B se actualizó de «Veintiún operaciones» a «Treinta y cuatro operaciones». |
| «Un menú tipo drawer para saltar entre Experiencias e Industrial sin volver a la portada» | **Hecho, ronda anterior.** El hilo de capítulos de la cinta (commit `866b5a6`) ya resuelve esto: un solo menú a cualquier ancho, con las sesiones de la pista y salto directo entre mundos. |
| «Seguir con JavaScript estático (Astro) en vez de WordPress, priorizando velocidad y bajo mantenimiento» | **Confirmado, sin cambio de código.** Es lo que el sitio ya es desde el primer commit; esta reunión ratifica la decisión, no la origina. |
| Vincular el calendario de Camilo en la interfaz, para agendar llamada | **Pendiente de material.** En la reunión se pegó el enlace directamente en el chat de Meet, no en un canal que quede en este repositorio. Hace falta que Camilo lo mande de nuevo (correo, WhatsApp o un archivo en `resources/`) para montar el botón «Agendar una llamada». |
| Integrar Connect Loop (bot de WhatsApp) en el sitio | **Pendiente de material.** Camilo crea la cuenta y genera el código; hasta que ese código llegue no hay nada que insertar. |
| Rediseño de la apertura de la Pista B: fondo blanco, video de fondo con opacidad, titular «Hacemos que su operación no se detenga», logotipos más arriba, cifra de tradición reducida a un texto pequeño | **Hecho con placeholder, el 24/09/2026.** El usuario aceptó avanzar sin esperar el material: `Vitrina.astro` pinta la apertura de Industrial en papel claro (`[data-fondo='claro']` en `tokens.css`, remapea `--stock`/`--ink` sólo ahí) con `public/taller/deck-plataforma.webp` como fondo mientras llega el vídeo de Mauricio — sustituir el `<img>` por un `<video>` cuando llegue, sin tocar nada más. El titular ya dice «Hacemos que su operación no se detenga.» y la cifra bajó a una nota chica: «Más de 50 años al servicio de la industria.» Los logotipos más arriba y el slider de compañías del hero **no** se hicieron — piden más estructura de la que cabía en esta pasada; siguen pendientes. |
| ¿Choca el «50 años» del cartel con la confirmación pendiente de los «75 años» del catálogo? | **No, están separados a propósito.** El «más de 50 años» nuevo vive sólo en `tesis.tradicion`, la síntesis de mercadeo que el cliente pidió para el cartel de entrada. El «setenta y cinco años» y el «más de treinta» que declara el catálogo siguen intactos en la sesión de herencia ALW, con su propia confirmación escrita pendiente — ver punto 1 de «Lo que falta». Ninguna cifra del catálogo se tocó. |
| Fecha de la próxima sesión | **Agendada.** Sábado 26/09/2026, 10:00 a.m. |

Acta y transcripción en `resources/Reunión normal (Camilo Altamar)_ 2026_09_19...pdf`.
El parte de obra de esta ronda está en `resources/PARTE-DE-OBRA-2026-09-19.html`.

**Actualización del 24/09/2026, tarde — llegó el material de Mauricio:**

- **Insumos crudos en `Recursos_Industries/`, fuera del repositorio a propósito**
  (454 MB: un vídeo 4K de 439 MB, dos vídeos verticales y diez fotos). Ahora en
  `.gitignore`. Nueve fotos ya convertidas a WebP en `public/taller-2026/`
  (~2 MB en total); la décima no se convirtió porque en el propio cuadro sale un
  letrero de «prohibido tomar fotos» — falta que Mauricio confirme si esa zona
  se puede publicar.
- **Vitrina de Industrial:** ya no es una foto fija. `Vitrina.astro` carga un
  vídeo real (mismo mecanismo de carga condicional que `Pelicula` en
  Experiencias — no se pide en móvil, con ahorro de datos o con
  `prefers-reduced-motion`), recortado del 4K de Mauricio a 12s/848×480, igual
  perfil que `experiencias.mp4`. El usuario vio dos recortes — uno con el
  furgón de DHL a la vista, otro que lo deja fuera de cuadro — y eligió el
  primero: **`public/video/industrial-con-dhl.mp4`**, en producción. El
  segundo sigue existiendo, sin usar: `public/video/industrial-sin-dhl.mp4`.
  **El furgón lleva el logotipo de DHL visible.** DHL no tiene autorización de
  marca confirmada — es el mismo pendiente del muro de clientes (más abajo),
  no uno nuevo, pero publicarlo en abierto pesa igual. Si la confirmación no
  llega, cambiar a la versión sin DHL es una sola línea en
  `src/pages/industrial/index.astro` (`videoClaro`/`posterClaro`).
- **Galería nueva, `Galeria.astro`:** rejilla fija de las nueve fotos de obra
  reciente (cerramientos de seguridad y estaciones de pesaje instalándose),
  aparte de `Sala` — que sigue atada al scroll y sigue mostrando sólo el
  material del catálogo 2026. Pedida porque una sola banda en movimiento no
  alcanzaba para enseñar el material nuevo con calma.
- **Sesión IX, Proyectos:** el texto largo («esta entrada todavía no se ha
  impreso», con el desglose de qué hace falta y en qué formato) se cambió por
  un «Próximamente.» corto, a pedido del usuario. `pendiente.ts` conserva el
  detalle completo para uso interno; ya no se imprime en el sitio.

**Actualización del 26/09/2026 — el hero de Industrial gana acción, con
`picklerobot.com` como referencia de estructura (no de estilo: la Pista B
sigue en su propio papel claro, tipografía y latón, no se importó su
paleta):**

- **Dos botones nuevos en la apertura:** «Hablemos» (sólido, salta a
  `#hablemos`) y «Ver productos» (contorno, salta a `#productos`), en un
  slot nuevo y opcional de `Apertura.astro` (`slot="acciones"`) que
  Experiencias no usa y no paga en espacio. El botón sólido usa tinta y papel
  —nunca rojo de fondo con texto encima: a este tamaño de letra no despejaba
  4,5:1—; el rojo de marca queda para el estado de hover.
- **El vídeo del deck ya no es atmósfera, es la prueba:** opacidad de 0,4 a
  0,62, con un velo direccional que lo despeja del todo del lado derecho
  —donde no hay texto— y lo apaga hacia la izquierda, donde se lee el
  titular. En pantalla angosta, sin lado limpio, vuelve al lavado parejo de
  antes.

Sin captura de pantalla en esta ronda: la extensión de Chrome no estaba
conectada y no había tiempo para levantar un Chrome headless con CDP. Falta
la vista real en escritorio y móvil antes de darlo por definitivo.

**Actualización del mismo 26/09/2026, más tarde — reunión del cliente,
picklerobot.com pasa de referencia de estructura a referencia de mundo
completo:** la entrada de arriba decía que la Pista B seguía en papel claro
«no de estilo, no se importó su paleta» — eso cambió en esta misma fecha, más
tarde. El cliente pidió expresamente adoptar el esquema de Pickle Robot
(negro con acento) para toda la Industrial, revirtiendo la decisión del
24/09. Vía `AskUserQuestion` se resolvieron las dos ambigüedades reales:

1. **Color:** negro real, no el naranja de Pickle — el acento es el rojo de
   marca (`--rojo`, el ya levantado para cartulina, decidido el 15/09).
   `[data-pista='b']` en `tokens.css` vuelve a ser una sola línea
   (`--live: var(--rojo)`), como antes del 24/09. Cae también el filtro de
   inversión del logotipo en `Marca.astro` (ya no hace falta sobre negro) y
   el `theme-color` condicional de `Base.astro`.
2. **Estructura:** se reordena al esquema real de Pickle — prueba de cliente
   arriba, no al final. El muro de 34 logotipos se movió de la sesión de
   cierre a justo después del hero (antes de la sesión I), y la banda `Sala`
   más la `Galeria` de obra reciente se adelantaron de entre Servicios/A la
   medida a justo después de «Qué hacemos». Las diez sesiones numeradas
   (I–X) no cambiaron de número ni de contenido: sólo se reubicó lo que no
   lleva numeral. El cierre (sesión X) ya no repite el muro — queda sólo la
   conversación, con un titular que se hace eco del titular del hero.

Se conserva a propósito, por regla del propio encargo: tipografía (Source
Serif 4 + Archivo) y filetes hairline. Sin capturas, esta primera pasada se
quedó en recolorear y reordenar sin tocar la disposición real de cada
sección — el usuario lo notó («veo lo mismo») y con razón.

**Misma tarde, más tarde — Chrome por fin conectado, capturas reales de
picklerobot.com (no memoria, no WebFetch en texto):** su disposición real no
es "todo negro": el negro es la portada, el muro de clientes y el cierre; el
cuerpo del catálogo —donde Pickle explica su tecnología— es **papel**, no
cartulina. Tampoco usa tarjetas de icono+título+texto para sus tres pilares:
es una barra de pestañas con contenido a dos columnas debajo, y un titular
grande y centrado abre cada bloque. Con eso:

- **Panel claro reutilizable** (`[data-panel='claro']` en `tokens.css`, antes
  `[data-fondo='claro']` de la ronda del 24/09, ahora de alcance local, no de
  pista entera): envuelve la sesión I y las sesiones II a IX en
  `industrial/index.astro`. `Sala` y `Galeria` quedan fuera, a propósito —
  meterlas dentro rompía su propio fondo a sangre (una lección de esta
  ronda: cambiar variables no basta si nada las pinta; hubo que agregar
  `background`/`color` explícitos a la regla).
- **Titular grande y centrado** (`.subtitular--grande`) para la afirmación
  que abre «Qué hacemos», con la lista de frentes left-aligned debajo —
  mismo patrón que Pickle: centrado para la afirmación, alineado a la
  izquierda para el detalle.
- **Corchete** (`.corchete`, dos filetes en escuadra) enmarca el cierre —
  el gesto que Pickle repite en verde para sus afirmaciones; aquí en rojo.
- **Galería a sangre:** `Galeria.astro` pasa de rejilla contenida con
  espacio a mosaico a sangre sin separación, 3 columnas cuadradas — como
  el mural de fotos de Pickle, no como una rejilla con margen.
- **Bug real encontrado y corregido:** los botones «Hablemos»/«Ver
  productos» se veían como texto subrayado plano, no como botones — el
  CSS vivía en `Apertura.astro` con su propio hash de scope de Astro, pero
  el `<a>` que lo usa se escribe en `industrial/index.astro` (vía slot), que
  trae un hash distinto. Nunca calzaban. Se movió a `<style is:global>`.

Verificado en el propio navegador esta vez, escritorio y móvil. Sigue sin
correr el `DESIGN.md`/revisor de cierre que el proceso de Impeccable pide
para un cambio de mundo — pendiente para una ronda con más margen de tiempo.

Brief de dirección completo en `.impeccable/surfaces/src-pages-industrial-index-astro.md`.

**Aviso para la próxima revisión con el cliente:** el logotipo de DHL en el
vídeo del hero se lee muy claro en las capturas de esta ronda — más
legible de lo que parecía en los fotogramas sueltos que se revisaron el
24/09. Sigue siendo el mismo pendiente de autorización de marca, pero
conviene decidirlo pronto: el recorte sin DHL ya existe y el cambio es de
una sola línea.

**Misma tarde, tercera pasada — «quiero la referencia completa, no lo
mismo»:** las dos rondas anteriores recolorearon y reordenaron sin construir
las piezas estructurales que hacen que picklerobot.com se lea distinto a un
listado de catálogo. Esta pasada las agrega, todas con contenido real:

- **El motor** (sección nueva, entre el muro de clientes y «Qué hacemos»):
  panel oscuro con una afirmación + panel de papel con «El método» —
  traducción de «The Dill Autonomy Engine», con las cinco estaciones que
  Spot ya tenía en `data/spot.ts` en vez de inventar una tecnología que la
  casa no vende.
- **Pestañas** (`.pestanas`, dentro de la sesión «Qué hacemos»): fila con
  borde que salta a Productos/Servicios/A la medida — la barra de pestañas
  de Pickle, sin el JavaScript de pestañas: cada una ya abre su propia
  sesión completa más abajo, así que no hay contenido que recortar para
  caber en una pestaña.
- **La afirmación intermedia** (entre el mural de fotos y «Productos»):
  «Diseñamos, fabricamos y mantenemos.» con corchete y botón — la
  traducción de «We Pick Things», con la tesis que ya existía en
  `industrial.ts`, no una frase nueva.

Nada de esto quita contenido: las diez sesiones numeradas siguen completas,
con todo el catálogo, todos los productos, todo el texto que ya estaba.
Verificado en el navegador, escritorio y móvil, antes de este deploy.

## Lo que falta, por orden de urgencia

Estas son las únicas cosas que impiden publicar. Ninguna se puede resolver desde
el código: todas dependen de material del cliente.

### 1. Aprobación del párrafo de herencia ALW

La sesión VII de la Pista B dice en abierto que la línea industrial es la
continuidad de ALW. Está redactada **sólo** con lo que el catálogo sostiene: la
página 16 firma como ALW y acota los treinta años a equipos de medición, y la
portada declara los setenta y cinco de tradición industrial. Ni un hito más.

**Necesita el visto bueno escrito del cliente antes de publicar en producción.**
Mientras no llegue, la vista previa lleva `noindex` y eso basta; el día del
lanzamiento, o está aprobado o esa sesión no sale.

Relacionado: la portada del catálogo declara **75 años** de tradición y sus
páginas de equipos de medición **más de 30** en sistemas de pesaje. Son dos
cifras de dos cosas distintas y así se publican, pero conviene que el cliente
confirme las dos por escrito: son las únicas afirmaciones de antigüedad del
sitio.

### 2. Una entrada todavía en preparación

De las seis sesiones que la Pista B declaraba vacías, cinco se llenaron con el
catálogo. Queda una, y no se puede resolver desde el código:

**Proyectos** — dos o tres proyectos reales: sector, problema, intervención y
resultado verificable. El catálogo enseña lo que la casa sabe hacer; un proyecto
enseña lo que resolvió. Un párrafo por proyecto, más el nombre del cliente si
autoriza aparecer.

**El parte de obra** de esta ronda está en `resources/PARTE-DE-OBRA.html`, y
publicado como artefacto privado para pasárselo al cliente. Es una copia
literal de lo publicado, con una diferencia deliberada: **no lleva el capítulo
de autorizaciones pendientes**. Ese capítulo describía que el sitio publica
treinta y cuatro marcas de cliente sin permiso escrito y que el párrafo de ALW
espera visto bueno — información correcta, y exactamente la que no debe circular
si el documento se reenvía. Vive aquí, en las secciones 1 y 2 de este archivo, y
en el pedido de abajo. Por eso la numeración de capítulos del HTML salta el
`id="c7"`: no es un error de maquetación.

El pedido ya está redactado y listo para enviar a Mauricio Altamar:
**`resources/PEDIDO-PROYECTOS.md`**. Lleva las cuatro líneas que hacen falta por
proyecto, las dos autorizaciones que bloquean la publicación y las tres dudas
concretas del catálogo. En la Pista B esa entrada es hoy la sesión IX
«Proyectos», numerada y declarada: cuando llegue el material ocupa su sitio sin
rehacer el programa.

Mientras tanto el sitio no inventa nada: enseña la forma del hueco. Es honesto y
además le dice al cliente exactamente qué entregar.

**Aparte, y de más riesgo:** desde el 19/09/2026 el muro de clientes es uno solo
—treinta y cuatro marcas, las veintiuna de la página 25 del catálogo más las
trece del portafolio— y se publica igual en las dos pistas, por acuerdo
explícito del cliente. **Ninguna de las treinta y cuatro tiene autorización
escrita de uso de marca**, la unificación no cambia eso: un muro de logotipos
en un PDF interno no es un permiso para publicarlos en abierto. Hay que
confirmar, marca por marca, quién puede aparecer antes de quitar el `noindex`.
Dos avisos concretos:

- El logotipo veintiuno se transcribe como **«Beer»** —un grifo en círculo y la
  palabra BEER con la R final invertida— porque no se identificó la razón social.
  Hay que ponerle su nombre real o quitarlo.
- En la reunión del 15/09 se nombraron **Avianca y DHL**, que **no aparecen en el
  muro del catálogo** y por eso no están en el sitio. Si son clientes, tienen que
  llegar como material.

### 3. Logotipos de cliente en vectorial

Los trece logotipos del portafolio están incrustados como imagen dentro del PDF,
a resolución de pantalla: no sirven para web. La sesión VII de Experiencias los
compone hoy en tipografía, que se ve nítida a cualquier tamaño y no necesita un
recuadro blanco sobre el fondo negro. Cuando lleguen los SVG se decide si
conviene cambiarlo.

### 4. Fotografía

Las dos pistas ya tienen banda de imagen propia: la Pista A con nueve fotogramas
de Berkley Colombia Seguros, y la Pista B con nueve de instalaciones propias
sacados del catálogo —deck en plataforma de aeropuerto, rodillos, soldadura,
ball transfers, demarcación—. Las dos con el mismo criterio: sin caras
reconocibles.

Lo que sigue faltando son **los originales**. Lo que hay salió del interior de
dos PDF, así que viene ya comprimido una vez; a tamaños mayores se notará. Y
Camilo Altamar quedó en enviar más imágenes de eventos y vídeos complementarios
para la Pista A.

### 5. Decisiones de producto todavía abiertas

- Formulario de contacto y a dónde van los leads. Hoy el cierre es correo y
  teléfono directos.
- Analítica.
- Versión en inglés. Spot opera desde Cambridge y el portafolio ya mezcla
  títulos en inglés, pero el sitio está sólo en español.
- Si el cliente necesitará editar el contenido por su cuenta. Hoy el texto vive
  en el repositorio; si hace falta autonomía, se conecta un CMS.
- Dominio final de producción.

## Lo que el sitio no hace, a propósito

- **No inventa.** Cada cifra, cliente y afirmación sale del portafolio 2026 o del
  catálogo industrial 2026. Donde no hay material, hay hueco declarado.
- **No usa un reel de eventos.** La categoría entera ship eso; esta dirección lo
  rechaza explícitamente.
- **No tiene menú desplegable ni versión móvil aparte.** La navegación es un
  solo elemento en todos los anchos: la segunda fila de la cinta lista las
  sesiones de la pista y enciende la que se está leyendo. En columna estrecha
  los rótulos se recogen y queda la fila de numerales, salvo el del capítulo
  activo. Añadida el 19/09/2026 a petición del cliente; hasta entonces la
  orientación vivía sólo en el hilo de latón del raíl.
