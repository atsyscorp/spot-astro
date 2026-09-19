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
| Logotipos de clientes de restaurantes (El Corral, Burger King, Búfalo, Wings, Homeburger) y aéreo (Avianca, FedEx, DHL) | **Pendiente de material.** Mauricio Altamar quedó en recopilarlos. Hacen falta en vectorial. |

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

### 2. Dos entradas todavía en preparación

De las seis sesiones que la Pista B declaraba vacías, cuatro se llenaron con el
catálogo. Quedan dos, y ninguna se puede resolver desde el código:

1. **Proyectos** — dos o tres proyectos reales: sector, problema, intervención y
   resultado verificable. El catálogo enseña lo que la casa sabe hacer; un
   proyecto enseña lo que resolvió. Un párrafo por proyecto, más el nombre del
   cliente si autoriza aparecer.
2. **Clientes industriales** — confirmación de quién puede aparecer y sus
   logotipos en vectorial. La página 25 del catálogo trae el muro completo, pero
   en raster; y en la reunión del 15/09 se nombraron cadenas de restaurantes y
   empresas del sector aéreo, sin confirmación por escrito.

Mientras tanto el sitio no inventa nada: enseña la forma del hueco. Es honesto y
además le dice al cliente exactamente qué entregar.

### 3. Logotipos de cliente en vectorial

Los trece logotipos del portafolio están incrustados como imagen dentro del PDF,
a resolución de pantalla: no sirven para web. La sesión VII de Experiencias los
compone hoy en tipografía, que se ve nítida a cualquier tamaño y no necesita un
recuadro blanco sobre el fondo negro. Cuando lleguen los SVG se decide si
conviene cambiarlo.

### 4. Fotografía

La Pista A ya tiene material propio: la banda de sala y los dos tramos de vídeo
salen de la documentación de Berkley Colombia Seguros. Camilo Altamar quedó en
enviar más imágenes de eventos y vídeos complementarios.

La Pista B **no tiene ninguna imagen en el sitio**. El catálogo trae fotografía
real de producto —decks, estanterías, básculas, bandas, estructuras— pero
incrustada en el PDF y recomprimida; para usarla en web hacen falta los
originales. Es lo que más le falta hoy a la Pista B: diez sesiones de texto sin
una sola fotografía del taller.

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
- **No tiene barra de navegación interna.** La orientación vive en el hilo de
  latón del raíl: la sesión que se está leyendo enciende su numeral.
