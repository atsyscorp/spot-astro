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

**Aparte, y de más riesgo:** el muro de clientes de la Pista B publica veintiún
marcas sacadas de la página 25 del catálogo, igual que la Pista A publica trece
del portafolio. **Ninguno de los dos muros tiene autorización escrita de uso de
marca.** Un muro de logotipos en un PDF interno no es un permiso para publicarlos
en abierto. Hay que confirmar, marca por marca, quién puede aparecer antes de
quitar el `noindex`. Dos avisos concretos:

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
