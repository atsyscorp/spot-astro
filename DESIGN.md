---
name: Spot — Programa de Sala
description: El programa de mano de un summit, impreso sobre cartulina negra con lámina de latón; el menta sólo marca lo vivo.
colors:
  cartulina: "#0A0A0A"
  cartulina-honda: "#060606"
  tinta: "#EDE9E1"
  tinta-anillo: "#B5B0A6"
  tinta-cuerpo: "#C9C4BA"
  tinta-queda: "#A39C8E"
  laton: "#B8935A"
  laton-apagado: "#6A5436"
  laton-tenue: "#2E2519"
  menta-viva: "#10E6B3"
  rojo-vivo: "#FF5A4A"
  campo-pista-a: "#07211B"
  campo-pista-b: "#24100C"
  filete: "#2A2724"
typography:
  display:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 5.2vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.022em"
    fontVariation: "'opsz' 60"
  headline:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.5rem, 3.1vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.012em"
    fontVariation: "'opsz' 32"
  title:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.35rem, 2.5vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.012em"
    fontVariation: "'opsz' 28"
  numeral:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.06em"
    fontVariation: "'opsz' 21"
  lead:
    fontFamily: "Archivo, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
    fontFeature: "tabular-nums"
  note:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
    fontVariation: "'opsz' 14"
  label:
    fontFamily: "Archivo, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.22em"
rounded:
  none: "0"
  hair: "1px"
  full: "50%"
spacing:
  s1: "8px"
  s2: "16px"
  s3: "24px"
  s4: "40px"
  s5: "64px"
  s6: "104px"
  rail: "9rem"
  medida-texto: "34rem"
  medianil: "clamp(1.25rem, 4vw, 4.5rem)"
  pagina: "78rem"
components:
  sesion:
    padding: "104px 0 64px"
  sesion-rail:
    textColor: "{colors.laton}"
    typography: "{typography.label}"
    width: "{spacing.rail}"
    padding: "0.6em 0 0 24px"
  sesion-rail-viva:
    textColor: "{colors.menta-viva}"
    typography: "{typography.numeral}"
  marginalia:
    textColor: "{colors.tinta-queda}"
    typography: "{typography.note}"
    width: "12rem"
    padding: "0 0 0 16px"
  bruma:
    height: "92svh"
    width: "100%"
  marca:
    height: "1.75rem"
  pista-mitad:
    textColor: "{colors.tinta-cuerpo}"
    padding: "16px clamp(16px, 3vw, 40px)"
  pista-mitad-hover:
    backgroundColor: "{colors.campo-pista-a}"
    textColor: "{colors.menta-viva}"
  enlace-display:
    textColor: "{colors.tinta}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
  enlace-display-hover:
    textColor: "{colors.menta-viva}"
  campo-trazo:
    backgroundColor: "{colors.laton}"
    width: "1px"
    height: "3.25rem"
  filete:
    backgroundColor: "{colors.filete}"
    height: "{rounded.hair}"
  cinta:
    backgroundColor: "{colors.cartulina}"
    padding: "16px clamp(1.25rem, 4vw, 4.5rem)"
  pie:
    backgroundColor: "{colors.cartulina-honda}"
    padding: "64px clamp(1.25rem, 4vw, 4.5rem) 40px"
  saltar:
    backgroundColor: "{colors.menta-viva}"
    textColor: "{colors.cartulina}"
    padding: "0.6rem 1rem"
---

# Design System: Spot — Programa de Sala

> Los ocho encabezados de sección están en inglés porque el formato DESIGN.md los
> analiza literalmente. Todo lo demás está en español, como el resto de la
> documentación del proyecto. Este archivo describe **lo construido**: cada valor
> aquí está en `src/styles/`, `src/layouts/`, `src/components/` o `src/pages/`.

## Overview

**Creative North Star: "El Programa de Sala"**

El artefacto no es una web de agencia: es el programa de mano de un summit,
impreso sobre cartulina negra con lámina de latón. Sesiones numeradas en romanos,
un raíl de latón por el margen izquierdo, notas curatoriales al margen exterior y
filetes hairline en lugar de contenedores. La página se lee como se lee un
impreso: de arriba abajo, con una sola jerarquía y sin ningún elemento pidiendo
un clic.

La lógica de color es la del oficio que imita. El hueso es tinta, el latón es
estructura, y el menta **no es tinta: es luz**. Por eso el menta no decora nunca
— sólo marca lo que está vivo en ese instante: la sesión que el visitante está
leyendo, el lado vivo del cotejo, el foco de teclado, la selección de texto y una
sola cláusula del titular de cada página. El mundo Industrial (`[data-pista='b']`)
reimprime esa misma luz en el rojo de Spot Industries `#FF5A4A`: el sistema no
cambia, cambia la tinta que vive. Ese rojo lo decidió el cliente el 15/09/2026
para separar la línea industrial de la de experiencias, y sale de su propio
logotipo — la `o` roja de «spot Industries» —, levantado para que aguante la
cartulina.

Sobre ese impreso cae una sola fuente de luz real: **la bruma**, un campo WebGL
que ocupa los primeros 92svh de cada mundo y se apaga hacia abajo hasta fundirse
con la cartulina. Es el haz del spot sobre la primera página, y toma el color de
su pista — la regla de una tinta por mundo, extendida al fondo. Ninguna sesión se
lee nunca sobre luz.

La arquitectura es un divisor puro en `/` y dos mundos con tono propio en
`/experiencias/` y `/industrial/`. El rechazo declarado y observado por el build:
el reel de eventos a sangre con titular serif encima que domina esta categoría.
Aquí no hay hero de vídeo, ni tarjetas, ni sombras, ni iconos de glifo.

**Key Characteristics:**
- Fondo negro cartulina `#0A0A0A` en las tres páginas; sin modo claro.
- Una sola familia de display (Source Serif 4 variable, `opsz` declarada en cada
  uso) y una sola de texto (Archivo, cifras tabulares). Ambas subsetadas y
  servidas desde el propio dominio.
- Dieciséis tamaños con nombre y oficio; **ni un solo literal de `font-size` en
  todo `src/`**.
- Un único peso de filete (1px) para todas las divisiones del sistema.
- Cero sombras, cero radios (salvo 1px en el anillo de foco y 50% en un punto de
  7px de la metodología).
- El menta reservado a lo vivo; el latón para toda la estructura.
- La luz es física y direccional: entra por arriba y muere hacia abajo.
- La ausencia se dibuja: los huecos de contenido se imprimen como entradas del
  programa, nunca se rellenan.

## Colors

Una cartulina, cuatro tintas y una luz. El contraste está medido sobre el fondo
`#0A0A0A`: tinta 16,35:1, anillo 9,17:1, cuerpo 11,40:1, tinta queda 7,26:1,
latón 6,94:1, latón vivo 8,95:1, menta 12,25:1 — todo el sistema pasa AA, y todo
salvo el latón estructural pasa AAA.

### Primary
- **Menta viva** — la única luz del sistema. Marca la sesión que se está leyendo
  (el travesaño y el numeral del raíl), el lado vivo del cotejo, el anillo de
  foco, `::selection`, el hover de cualquier enlace, y exactamente una cláusula
  en cursiva del `h1` de cada página. Da además su color a la bruma de la Pista
  A. Nunca se usa como relleno de bloque ni para decorar.
- **Rojo vivo** — el mismo papel, reimpreso para la Pista B. `[data-pista='b']`
  remapea exactamente **una** variable, la luz (`--live` → `--rojo`), y nada más.
  La bruma recibe la pista por uniforme y cambia con ella. Es un remapeo de
  token, no un segundo sistema: ningún componente conoce la pista.
  El valor: el logotipo de Spot Industries mide `#ED2A39`, que da 4,71:1 sobre
  cartulina y se cae por debajo del suelo AA en cuanto la bruma sube; `#FF5A4A`
  mide 6,42:1 sobre cartulina limpia y 5,78:1 sobre el punto más claro de la
  bruma. Antes la Pista B encendía en latón vivo `#CDA96E` y había que bajar el
  latón estructural a `#9C8358` para que no se confundieran; con el rojo no hay
  confusión posible y `--foil` se queda con el valor de la casa.

### Secondary
- **Latón** — toda la estructura del impreso: rótulos de raíl, numerales de
  sesión, numerales de práctica y principio, nombres de cliente en versalitas,
  trazos del campo medido, subrayados de enlace en reposo.
- **Latón apagado** — el pliegue de la portada, los travesaños en reposo, el
  borde superior del pie, el subrayado de los enlaces de display.
- **Latón tenue** — el hilo continuo del programa y los renglones sin imprimir de
  la sesión pendiente. Es la presencia mínima legible: se ve que hay algo, no se
  lee como contenido.

### Neutral
- **Cartulina** — el fondo de las tres páginas, el `theme-color` del navegador,
  el negro del que parte y al que vuelve la bruma, y el relleno de los puntos de
  la metodología (para que la línea pase por detrás).
- **Cartulina honda** — sólo el pie y el canal de la barra de scroll. Es la única
  variación tonal de superficie del sistema.
- **Tinta** — titulares, subtitulares, cifras.
- **Tinta del anillo** — un punto exacto por debajo de la tinta, y sólo para el
  anillo en reposo de la portada. El símbolo es la pieza más grande de la página:
  a tinta plena se adelanta al titular, y un escalón de gris lo devuelve a su
  sitio sin apagarlo. No lo use para texto.
- **Tinta cuerpo** — todo el texto corrido y el color por defecto del `body`.
- **Tinta queda** — notas al margen, líneas de apoyo, títulos de las entradas
  todavía no impresas. Es cálida a propósito: `#A39C8E`, nunca un gris neutro.
  **Su valor lo fijó la bruma:** el tono anterior medía 4,56:1 contra la tinta de
  cuerpo sobre el fondo animado, demasiado cerca del suelo de 4,5; el actual mide
  7,26:1 sobre la cartulina limpia y 5,45:1 en el punto más claro que la bruma
  llega a alcanzar.
- **Filete** — la división estándar entre sesiones, entradas de lista y bloques.
- **Campo de pista A / campo de pista B** — los dos únicos fondos de color
  planos del sistema, y sólo en la portada: la media pantalla entera se enciende
  al posarse sobre su pista. No existen fuera de ese gesto.

### Named Rules
**La regla de la luz.** El menta no es un color de marca: es el estado *vivo*. Se
usa para lo que está ocurriendo ahora (sesión en pantalla, foco, selección,
hover, el lado vivo del cotejo) y para una sola cláusula del `h1`. Si un elemento
puede estar en menta permanentemente sin cambiar de estado, no debe estar en
menta.

**La regla de un mundo, una tinta.** Un mundo tiene una sola luz. La Pista B no
añade una paleta: remapea `--live` y `--foil` bajo `[data-pista='b']`, y la bruma
recibe la misma decisión como uniforme. Un componente nuevo que necesite el color
vivo usa `var(--live)` y hereda la pista automáticamente. Nunca escriba
`#10E6B3` en un componente.

**La regla de la cláusula viva.** Un `h1` por página lleva exactamente una
cláusula en cursiva menta (`h1.titular em`). El `h2` lleva cursiva, pero en tinta
(`h2.subtitular em`), no en menta. Dos cláusulas vivas en una página rompen la
regla de la luz.

**La regla del latón estructural.** Si un elemento organiza (numera, rotula,
divide, mide), va en latón. Si informa, va en tinta. Si vive, va en menta. No hay
cuarta categoría.

**La regla del contraste sobre luz.** Un color no se aprueba contra la cartulina
limpia: se aprueba contra el punto más claro que la bruma alcanza bajo él. La
tinta queda se movió por esa medición, y cualquier tono nuevo que viva en los
primeros 92svh se mide igual.

## Typography

**Display Font:** Source Serif 4 variable, eje `opsz` 8–60 (con Georgia y Times
New Roman como reserva)
**Body Font:** Archivo (con Helvetica Neue, Helvetica, Arial como reserva)
**Label Font:** Archivo en versalitas con tracking abierto. **No hay tercera
familia**: el sistema no tiene monoespaciada, y no debe adquirir una sin un
oficio que la pida.

**Por qué esta serif y no una didone.** El sistema nació con Bodoni Moda, y se
cambió por una razón medible, no de gusto: sobre cartulina `#0A0A0A` los finos de
un didone se rompen: a 32px el trazo delgado cae por debajo del píxel y el
titular se lee sucio en lugar de fino. Source Serif 4 es una transicional de
contraste moderado — conserva la voz de impreso y el eje óptico, pero su trazo
delgado sobrevive al fondo negro. El cambio se resolvió con un espécimen de
cuatro caras con el texto real de Spot, a los tamaños reales, sobre el fondo
real. **Un didone es la cara equivocada para este fondo**; no lo reintroduzca.

**Cómo se sirven.** Ambas familias se sirven desde el propio dominio en woff2
(`public/fonts/`), con `font-display: swap`, y los dos ficheros romanos
precargados en el `<head>`. Source Serif 4 va **subsetado en dos ejes**: el eje
de peso recortado de 200–900 a `400 700`, y el repertorio a Latin-1 más
puntuación tipográfica (`U+0020-00FF`, más `U+0131`, `U+0152-0153`,
`U+02BB-02BC`, `U+02C6`, `U+02DA`, `U+02DC`, `U+2000-206F`, `U+20AC`, `U+2122`,
`U+2212`). Eso baja cada cara de ~125 KB a 79 KB (romana) y 83 KB (cursiva).
Archivo conserva sus cortes `latin` y `latin-ext` separados por `unicode-range`.
Total realmente descargado en una página: **234 KB en cuatro ficheros**.

**Consecuencia del subset, y es deliberada:** no hay `latin-ext` de Source Serif
4. Un carácter por encima de `U+00FF` en un titular cae a Georgia — se ve otra
cara, no se ve un tofu. El sitio es español latinoamericano y su repertorio cabe
en Latin-1; si algún día entra contenido con diacríticos de Europa central, hay
que reconstruir el subset antes de publicarlo.

`font-synthesis: none` en el `body`: no hay cursivas ni negritas falsas — si una
variante no existe, no se finge. Todo el sitio usa peso 400; el 700 está
disponible en el fichero y sin usar.

**Character:** una transicional de contraste medido contra un grotesco de rejilla
apretada. La serif pone la voz del impreso; el Archivo pone el dato, siempre con
`font-variant-numeric: tabular-nums`, de modo que las cifras se alinean en
columna como en una tabla de programa.

### La escala

La escala está cerrada: dieciséis tamaños con nombre declarados en `tokens.css`,
y **ni un solo literal de `font-size` en `src/`**. Cada token lleva su oficio; si
un tamaño nuevo no tiene oficio, no entra en la escala.

| Token | Valor | Oficio · dónde vive |
|---|---|---|
| `--t-display` | `clamp(2rem, 5.2vw, 3.75rem)` | Titular de sesión (`.titular`) |
| `--t-portada` | `clamp(2rem, 4.6vw, 3.4rem)` | Nombre de pista en la portada |
| `--t-lema` | `clamp(1.5rem, 3.2vw, 2.6rem)` | El lema de la portada y el principio que manda |
| `--t-rail-letra` | `clamp(1.75rem, 3.4vw, 2.75rem)` | La letra de pista al margen de la portada |
| `--t-titulo` | `clamp(1.5rem, 3.1vw, 2.25rem)` | Subtitular de sesión, título de práctica, cifra del peso |
| `--t-entrada` | `clamp(1.35rem, 2.5vw, 1.8rem)` | Entrada de programa: principio, territorio, enlace de contacto, cierre del pie |
| `--t-menor` | `clamp(1.15rem, 2.1vw, 1.5rem)` | Estación y paso: metodología, paso del cotejo, entrada no impresa |
| `--t-marca` | `1.5rem` | Numeral de raíl; numeral de práctica |
| `--t-sub` | `1.125rem` | Rótulo de la cinta, numeral de principio y de hueco, numeral de raíl en móvil |
| `--t-lead` | `1.1875rem` | Entradilla (`.plomo`) |
| `--t-cuerpo` | `1.0625rem` | Cuerpo global y lista de clientes |
| `--t-nota` | `1rem` | Nota curatorial; el rótulo de la cinta bajo 34rem |
| `--t-chico` | `0.9375rem` | Cuerpo menor: marginalia, enlace cruzado, datos del pie, línea de pista |
| `--t-menudo` | `0.875rem` | Apoyo: numeral de estación, nombres de territorio, contacto de portada |
| `--t-rotulo` | `0.6875rem` | Rótulo en versalitas (`.medida`), unidad de cifra, «ENTRAR», cruce de pista |
| `--t-micro` | `0.625rem` | Escala declarada del campo, marcador vertical, raíl y territorios en móvil |

Varios oficios comparten token a propósito: los cuatro títulos de entrada
(principio, territorio, enlace de contacto, cierre del pie) caen todos en
`--t-entrada`, y las tres estaciones (paso de metodología, paso de cotejo,
entrada no impresa) en `--t-menor`. Esa convergencia es la decisión: un tamaño
por oficio, no un tamaño por componente.

### La óptica

Source Serif 4 lleva eje `opsz` de **8 a 60**. Todo uso de display declara el
suyo, proporcional al tamaño al que se va a leer:

| `opsz` | Dónde |
|---|---|
| 60 | Titular de sesión (`.titular`) |
| 55 | Nombre de pista en la portada |
| 46 | El lema de la portada; el valor heredado por `h1..h4` sin clase |
| 32 | Subtitular de sesión |
| 30 | Título de práctica; letra de pista al margen |
| 28 | Título de principio |
| 25 | Cierre del pie |
| 23 | Cifra del peso |
| 21 | Numeral de raíl, enlaces de contacto, título de hueco, plomo en cursiva de Industrial |
| 18 | Paso del cotejo, numeral de práctica |
| 16 | Numeral de principio |
| 15 | Numeral de hueco |
| 14 | Nota curatorial |
| 13 | Marginalia |

### Hierarchy
- **Display** (`--t-display`, 400, alt. 1,04, tracking −0,022em, `opsz` 60): el
  `h1` de cada mundo y el remate «Let's work together» / «Hablemos». Uno solo por
  página. En la portada su papel lo hace `--t-lema`, más contenido, porque allí
  quien manda es el anillo.
- **Headline** (`--t-titulo`, 400, alt. 1,14, `opsz` 32): la apertura de cada
  sesión, el título de práctica (`opsz` 30) y la cifra del peso en cursiva
  (`opsz` 23).
- **Title** (`--t-entrada`, 400, alt. 1,15–1,16, `opsz` 21–28): las entradas del
  programa. El primer principio sube a `--t-lema` porque manda sobre los otros
  dos; las estaciones bajan a `--t-menor`.
- **Numeral** (`--t-marca`, 400, tracking 0,06em, `opsz` 21): el número de sesión
  en el raíl. Siempre romano. Bajo 40rem cae a `--t-sub`.
- **Lead** (`--t-lead`, alt. 1,58, ancho máximo 34rem ≈ 68 caracteres): el primer
  párrafo de una sesión.
- **Body** (`--t-cuerpo`, alt. 1,62, tabular): texto corrido. Las medidas de
  lectura se acotan por bloque con `ch` (44ch en principios, 48ch en prácticas,
  52ch en metodología y cifras, 54–56ch en territorios y huecos).
- **Note** (`--t-nota`, cursiva, alt. 1,5, `opsz` 14, tinta queda): las glosas
  del impreso. En la marginalia baja a `--t-chico` con `opsz` 13.
- **Label** (`--t-rotulo`, Archivo, tracking 0,22em, versalitas, latón): rótulos
  de sesión, de pista y de cotejo. En el raíl abre a 0,24em, en la portada a
  0,26em, y en móvil baja a `--t-micro` con 0,14em.

### Named Rules
**La regla de un papel por oficio.** La escala es cerrada y está en `tokens.css`.
Todo `font-size` de `src/` es un `var(--t-…)`; un literal nuevo es una regresión,
no una excepción. Antes de añadir un token, busque el oficio: si el tamaño que
necesita ya tiene uno, use ese — que dos componentes compartan token es la
intención del sistema, no una colisión.

**La regla de la óptica declarada.** Todo uso de la serif declara su
`font-variation-settings: 'opsz' N` dentro del eje 8–60, proporcional al tamaño
de lectura. Un display sin `opsz` declarado hereda 46 del `h1..h4` global y llega
con el grosor equivocado. Si algún día cambia la familia, los valores se remapean
al nuevo rango — no se copian.

**La regla del trazo que sobrevive al negro.** La cara de display se elige contra
el fondo real, a tamaño real, con el texto real. Ninguna cara cuyo trazo delgado
se rompa sobre `#0A0A0A` entra en el sistema, por bien que se vea en un espécimen
blanco.

**La regla del numeral romano.** El programa se numera en romanos: las sesiones
(`I`…`VIII`) y los contadores generados (`counter(hueco, upper-roman)`). Las
únicas cifras arábigas del sistema son datos reales: los principios (01–03) y las
cifras del peso. Un arábigo donde el programa numera es un error de imprenta.

**La regla de la cifra tabular.** El `body` fija `font-variant-numeric:
tabular-nums` de forma global. Ninguna cifra del sitio debe salir de esa rejilla.

## Layout

**La hoja.** Contenedor único `.hoja`: ancho máximo 78rem, centrado, con medianil
lateral `clamp(1.25rem, 4vw, 4.5rem)`. No hay segundo contenedor ni anchos
especiales por sección.

**El compás.** Un solo ritmo vertical derivado de `0.5rem`, escalado en pasos
Fibonacci: 8 · 16 · 24 · 40 · 64 · 104 px. Toda la separación del sitio sale de
esos seis valores; no hay márgenes sueltos en px.

**La retícula de sesión.** Cada `<Sesion>` es una fila `grid` de tres columnas:

| Columna | Contenido | Ancho |
|---|---|---|
| 1 · raíl | numeral romano + rótulo en versalitas | 9rem (4,75rem < 62rem; 4,25rem < 40rem) |
| 2 · cuerpo | el contenido de la sesión | `minmax(0, 1fr)` |
| 3 · margen | la nota curatorial | 12rem, **sólo ≥ 72rem** |

Las sesiones se separan con un filete superior de 1px; la primera no lo lleva. El
raíl es `position: sticky` a `--s4` del borde superior por encima de 62rem, y
estático por debajo.

**El umbral de 72rem.** Por debajo de 72rem la tercera columna no existe: la
marginalia cae al pie de su propia sesión, dentro de la columna de cuerpo, con un
filete superior propio. **No desaparece nunca.** Por encima de 72rem se coloca en
la columna exterior, con borde izquierdo en latón tenue y su propio `sticky`
desfasado 2,5rem respecto al raíl.

**Las tres capas de un mundo.** Cinta (`z-index: 5`, `sticky`), bruma
(`z-index: 0`, absoluta al tope), programa (`z-index: 1`). El orden es el que
garantiza que el texto va siempre por encima de la luz y por debajo de la cinta.
El enlace de salto se queda en `z-index: 10`, por encima de todo.

**El hilo.** Una lámina de latón tenue de 1px recorre el programa entero por la
línea del medianil (`.programa::before`), de la primera sesión al final del
contenido. Cada sesión se cuelga de él con un travesaño horizontal
(`.sesion__rail::before`) que en reposo mide el 66% de su ancho, en latón
apagado. Un `IntersectionObserver` con `rootMargin: -45% 0px -45% 0px` marca como
`.sesion--viva` la sesión que ocupa la banda central del viewport: su travesaño
se estira al 100% y pasa a la luz, y su numeral se enciende.

**Desde el 19/09/2026 ese hilo tiene una segunda instancia arriba.** Hasta esa
fecha era toda la orientación de la página y no había barra de navegación de
sección, por decisión declarada. El cliente pidió un menú único que funcionara a
cualquier ancho, y la regla se levanta — pero no se cambia el recurso: la cinta
gana una segunda fila con los mismos numerales romanos, el mismo travesaño
tumbado y la misma luz de pista. Sigue sin haber índice ni migas.

**Puntos de quiebre observados.** 72rem (aparece la marginalia), 62rem (raíl
estrecho y estático, compás de sesión más corto), 52rem (el cotejo y las
columnas de cliente colapsan a una; la cinta esconde sus rótulos de pista; el
paso del campo medido baja de 10px a 5px; la portada apila sus dos pistas),
40rem (raíl mínimo, numeral a `--t-sub` y rótulo a `--t-micro`), 34rem (la cinta
aprieta su gap y su rótulo baja a `--t-nota`).

**La portada.** Rejilla de cuatro filas a `100svh`: cabecera, título, pistas,
pie. Un pliegue de latón de 1px cae por el centro exacto de borde a borde, y el
anillo — `clamp(11rem, min(58vh, 42vw), 28rem)` — se sienta encima, tapándolo
salvo en su apertura, que mira al oeste sobre ese mismo eje. La acción es la
media pantalla, no un botón: posarse sobre una mitad enciende su campo de color
completo y la mitad correspondiente del anillo. Por debajo de 52rem los campos se
apagan y el encendido pasa al fondo del propio enlace. La portada no lleva bruma:
allí la luz la hace el anillo.

**Superficies del navegador.** El programa también imprime lo que no es la
página: `::selection` en menta sobre cartulina, barra de scroll de 11px con canal
en cartulina honda y pulgar en latón tenue que sube a latón apagado en hover, y
`scrollbar-color` declarado para Firefox. `color-scheme: dark`.

### Named Rules
**La regla del hilo.** La orientación se resuelve con el raíl y su hilo continuo.
Antes de añadir cualquier navegación interna, compruebe que el hilo no lo está
haciendo ya.

**La regla de la retícula que se escala.** En pantalla estrecha la retícula se
comprime, no se deshace: el raíl sigue existiendo a 4,25rem y sigue mostrando su
numeral. Una sesión sin raíl deja de ser una sesión.

## Elevation & Depth

**No hay sombras.** Ni una en todo el build: ni `box-shadow`, ni `text-shadow`,
ni `backdrop-filter`, ni gradientes de elevación. La profundidad es la de un
impreso iluminado, y se consigue con cuatro recursos:

1. **El filete.** 1px de `#2A2724` divide; 1px de latón apagado jerarquiza (el
   pliegue de la portada, el borde superior del pie); 1px de latón tenue insinúa
   (el hilo, los renglones sin imprimir).
2. **La variación de cartulina.** Una sola: el pie y el canal de scroll bajan a
   `#060606`. No hay «superficie elevada» en el sistema.
3. **El orden de tinta.** Tinta → anillo → cuerpo → queda es la escala de
   profundidad del texto. Lo que está más lejos no se oscurece con una capa: se
   imprime con menos tinta.
4. **La luz.** La bruma es la única fuente de profundidad ambiental, y es
   direccional: entra arriba y muere abajo. No levanta nada del papel — ilumina
   el papel.

### Named Rules
**La regla del filete único.** El sistema tiene un solo grosor de regla: 1px.
Toda la jerarquía de una división se expresa con el *color* del filete, nunca con
su peso. No introduzca reglas de 2px ni bordes dobles.

**La regla del plano.** Nada se levanta del papel. Si un elemento necesita
destacarse, se le da luz (menta), se le da aire (compás) o se le da un filete —
jamás una sombra.

**La regla de la luz que cae.** La luz entra por arriba y se apaga hacia abajo,
siempre. Ningún resplandor se enciende en el centro de una página ni bajo un
bloque de texto: el gradiente de corte de la bruma existe precisamente para que
ninguna sesión se lea sobre luz.

La regla se midió a escala de página y desde el 18/09/2026 vale también a escala
de banda: **el telón** de la sesión «Cómo pensamos» lleva su propia película, y
la lleva con la misma disciplina — entra por el borde superior de la banda,
muere en cartulina al 97% de su alto, y el texto corrido que queda debajo se lee
sobre papel limpio. Lo que no se admite sigue siendo lo mismo: una luz que se
encienda en mitad de un bloque de lectura. Una banda con luz propia se aprueba
midiendo el peor punto de la captura real con el texto oculto, no a ojo.

## Shapes

Geometría de imprenta: **todo es recto**. No hay radio en ninguna superficie,
contenedor ni control. Las dos únicas curvas del build son deliberadas y de 7px
o menos: el anillo de foco (`border-radius: 1px`, apenas suaviza el rectángulo
del `outline`) y el punto de estación de la metodología (7 × 7px, `50%`, relleno
en cartulina para que la línea pase por detrás).

**El anillo abierto** es la única forma del sistema y su elemento dominante.
Geometría medida sobre el PNG del cliente y trazada en un `viewBox` de 100:
radio de línea central 43,9, grosor de trazo 12,2, apertura angular 16,8°. Dos
correcciones deliberadas frente al original, ambas documentadas en
`brand/README.md`: se usan los radios medios (el original oscila ±15px en el
exterior y ±27px en el interior, deriva de exportación), y **la apertura se
normaliza a 180° exactos** (el original cae en 179,4°) porque ese eje es el que
parte la pantalla en la portada y tiene que ser horizontal de verdad. Los
extremos del arco son cortes rectos radiales: `stroke-linecap: butt`, nunca
redondeados. El SVG hereda `currentColor`: sirve en la tinta del anillo, en
menta, en latón o en cualquier contexto sin duplicar ficheros.

**El logotipo es el activo oficial del cliente, no una reconstrucción.**
`spot-wordmark-white.webp` (1024 × 482, blanco sobre transparencia) se coloca
como imagen. Su geométrica muy fina **no es ninguna de las dos familias del
sitio**, así que recomponerlo con tipografía daría otra marca. La medición de
`brand/README.md` prueba que la 'o' del logotipo y el símbolo suelto son el mismo
anillo (grosor/diámetro 0,1196 vs 0,1221; apertura 16,85° vs 16,80°), y es esa
prueba la que autoriza a usar el SVG a escala de portada sabiendo que es el
anillo de la marca. El archivo viene recortado a la caja exacta del dibujo: **el
margen se da por CSS, nunca se recorta de nuevo**.

### Named Rules
**La regla sin tarjetas.** Un programa de sala no tiene tarjetas. Las entradas de
lista — prácticas, principios, territorios, cifras, huecos — se separan con un
filete superior y una rejilla de dos columnas (numeral + cuerpo). Nunca con una
caja, un fondo, un borde completo ni un radio.

**La regla del corte recto.** Los extremos del anillo son cortes rectos. Cualquier
reproducción con `stroke-linecap: round` está mal dibujada.

**La regla del logotipo intocable.** El logotipo se coloca, no se compone. No se
reescribe con las fuentes del sitio, no se le cambia el color (es un blanco al
94% de opacidad que sube a 100% en hover), no se le recorta la caja y no se le
separa la 'o' del resto.

## Components

### La bruma (componente firma)
El haz del spot cayendo sobre la primera página del programa: un campo WebGL
escrito a mano — ruido de valor con fbm de cinco octavas y dos rondas de
deformación de dominio, sobre un único triángulo a pantalla completa, sin
librería.
- **Sitio:** absoluta al tope de cada página de mundo, 92svh de alto,
  `z-index: 0`, `pointer-events: none`, `aria-hidden`. La portada no la lleva.
- **Color:** toma la pista como uniforme — menta en la Pista A, rojo en la
  Pista B. Es la regla de una tinta por mundo llevada al fondo. El shader
  duplica la paleta fuera del sistema de tokens: si `--rojo` cambia, hay que
  cambiar el vector `rojo` del fragment shader con él.
- **Dirección:** la luz entra arriba y muere abajo (`smoothstep` sobre el eje
  vertical más una viñeta descentrada). Encima, un `::after` con gradiente a
  `--stock` corta lo que quede: **ninguna sesión se lee nunca sobre luz.**
- **Aparición:** el lienzo entra con `opacity` en 900ms cuando el primer
  fotograma ya está dibujado, así que nunca se ve aparecer un negro plano.
- **Tres salidas de seguridad, todas obligatorias:** sin contexto WebGL queda el
  degradado CSS radial + lineal declarado en `.bruma` (eso es lo que ship);
  con `prefers-reduced-motion` dibuja un fotograma y para; fuera de pantalla un
  `IntersectionObserver` cancela el `requestAnimationFrame`. El DPR se limita a
  1,5.

### El telón (componente firma)
Una banda a sangre que lleva su propia película detrás de una sesión del
programa. No es la bruma —que es del primer viewport— ni la película de la
apertura: el telón es de **una** sesión, se recorta a su alto y muere en
cartulina antes del cuerpo de lectura.
- **Por qué existe:** el cliente pidió, sobre «Cómo pensamos», que «entre de
  otra forma distinta y vuelva a tener un vídeo de fondo diferente», para que no
  se leyera como la misma lámina que el diagnóstico. El telón es ese recurso, y
  por eso hay exactamente uno en todo el sitio. Un segundo telón devolvería las
  dos sesiones al empate que había que romper.
- **Sitio:** hijo directo de la `<Sesion>` (ranura `fondo`, no dentro del
  cuerpo), absoluto, 100vw, 78% del alto de la sesión, `z-index: 0`,
  `aria-hidden`. La sesión se marca `sesion--telon` y todo lo demás —raíl
  incluido— sube a `z-index: 1`.
- **Velos:** uno vertical que sostiene el contraste y lleva la banda a cartulina
  al 97%, y uno horizontal que apaga los dos cantos para que la banda no corte
  la hoja con dos aristas.
- **Movimiento:** deriva de ±3,5% ligada a `view()`, del visitante y no de un
  reloj. Nunca un bucle temporal.
- **Tres salidas de seguridad:** el vídeo no se pide siquiera en pantalla
  estrecha, con ahorro de datos, con conexión lenta o con movimiento reducido —
  queda el poster, que es un fotograma del mismo material; con
  `prefers-reduced-motion` la deriva se anula; y un `IntersectionObserver`
  **pausa** el vídeo al salir de pantalla, porque una banda de mitad de página
  no descodifica lo que nadie mira.
- **Material:** documentación real de la misma experiencia que sostiene la
  apertura, en otro tramo, elegido sin caras reconocibles.

### El hilo de capítulos (componente firma)
La segunda fila de la cinta: las sesiones de la pista, del primer numeral al
último, con la que se está leyendo encendida. Es el raíl tumbado, no un menú
nuevo.
- **Un solo elemento en todos los anchos.** No hay versión de escritorio y
  versión de móvil, ni menú desplegable: lo que cambia con el ancho es cuánta
  tinta gasta. Por debajo de 72rem los rótulos se recogen y queda la fila de
  numerales, **salvo el del capítulo activo**, que conserva su nombre — así el
  visitante sabe dónde está sin abrir nada.
- **Color:** latón en reposo, `var(--live)` encendido, así que la Pista A marca
  en menta y la Pista B en rojo sin que el componente sepa de qué mundo es.
- **Desbordamiento:** la fila se desplaza dentro de su propia caja y la página
  nunca scrollea de lado. Si de verdad desborda —la Pista B tiene diez sesiones—
  el canto derecho se apaga con una máscara, y el script trae el paso activo a
  la vista cuando la fila está corrida. La clase de la máscara sólo se pone si
  hay desbordamiento: una pista que cabe no se difumina.
- **Las tres salidas:** sin `IntersectionObserver` sigue siendo un índice de
  anclas que funciona y sólo se pierde el encendido; el desplazamiento suave se
  anula bajo `prefers-reduced-motion` desde `tokens.css`; y el observador no
  gasta nada mientras no se cruce una sesión.
- **`--cinta` mide las dos filas** (6,25rem). De ese token cuelgan el
  `scroll-margin-top` de las sesiones, el raíl pegajoso y la marginalia: si la
  cinta cambia de alto, se cambia ahí y no en cinco sitios.

### El raíl de sesión (componente firma)
Numeral romano en la serif sobre rótulo en versalitas de latón, colgado del hilo
por un travesaño horizontal.
- **Forma:** columna de 9rem, sin caja; padding izquierdo de 24px que es
  exactamente el ancho del travesaño.
- **Reposo:** numeral en latón, travesaño en latón apagado al 66% de su ancho.
- **Vivo (`.sesion--viva`):** numeral y travesaño en `var(--live)`, travesaño al
  100%. Transición de 320ms con `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Estado:** lo decide el `IntersectionObserver`, no el hover ni el clic. Es un
  indicador de lectura, no un control.

### La marginalia
Nota curatorial en cursiva, tinta queda, en la columna exterior.
- **≥ 72rem:** columna 3, 12rem, borde izquierdo de 1px en latón tenue, `sticky`.
- **< 72rem:** bajo el cuerpo de su sesión, con filete superior de 1px.
- Se declara por `slot="margen"`; si el slot está vacío el `<aside>` no se emite.

### El campo medido (componente firma)
Una serie de trazos verticales de 1px en latón; **un trazo es una unidad**.
- **Forma:** trazos de 1px a 3,25rem de alto (2,5rem < 52rem), con `flex-wrap`.
- **El paso es compartido:** 10px entre ejes en escritorio, 5px en móvil, igual
  para todos los campos de la página. Por eso 58 trazos y 3 trazos se comparan de
  un vistazo sin leer la cifra.
- **El componente sólo dibuja trazos.** `<Campo trazos={n} />` no toma ninguna
  otra propiedad: la escala no es asunto del dibujo, es asunto de la lectura.
- **La escala se declara cuando no es 1:1, y se declara desde dentro del texto.**
  5.800 líderes se dibujan con 58 trazos y la página cierra el bloque con «Cada
  trazo · 100» al final de `.cifra__texto`, en `--t-micro`; 30, 12 y 3 se dibujan
  trazo a trazo y no llevan nada. El rótulo nunca se interpone entre el campo y
  su lectura.
- **El orden es campo → lectura → texto.**
- **Movimiento:** cada trazo crece desde `scaleY(0.08)` en 560ms, escalonado 11ms
  por índice. Anulado bajo `prefers-reduced-motion`.

### Las entradas no impresas (componente firma)
La sesión «En preparación» de la Pista B imprime lo que **falta** con la misma
retícula que lo que existe: numeral romano generado
(`counter(hueco, upper-roman)`, para que la numeración de los huecos hable el
mismo idioma que el raíl), título en tinta queda (no en tinta: se ve que no está
escrito todavía), qué se requiere, y el formato de entrega esperado en nota al
margen. Debajo, tres renglones de 1px en latón tenue al 100%, 88% y 47% de ancho:
los renglones que aún no se han impreso.

### El logotipo
Imagen del activo oficial, altura `var(--marca-alto, 1.75rem)`, ancho
automático, `line-height: 0` en el contenedor para que no arrastre interlineado.
Opacidad 0,94 en reposo y 1 en hover — ese es todo su estado. En la cinta es un
enlace a la portada con texto alternativo «Spot — volver a la portada»; en la
portada es un `<span>` con alternativo «Spot».

### La cinta (navegación)
Cabecera `sticky` en cartulina con filete inferior, tres elementos en línea:
logotipo, pista actual, y el enlace a la otra pista.
- **Rótulo de pista:** `.medida` en latón **en línea** con el nombre, alineados
  por la base — nunca apilado encima.
- **Hover:** el enlace a la otra pista pasa de tinta queda a `var(--live)`.
- **< 52rem:** los rótulos «Pista A / Pista B» se esconden y el enlace cruzado se
  reduce a su letra. **< 34rem:** el nombre de pista baja de `--t-sub` a
  `--t-nota`.
- El `view-transition-name: anillo` vive aquí sobre `.cinta .marca img`: el
  anillo gigante de la portada aterriza en el logotipo de la cinta.

### Las mitades de la portada
La acción es media pantalla, no un botón: enlace que ocupa su mitad completa,
con el marcador de pista (letra en `--t-rail-letra`, `opsz` 30, + «PISTA» en
vertical a `--t-micro`) en el **margen exterior**, no encima del nombre.
- **Reposo:** nombre en tinta a `--t-portada` (`opsz` 55), línea en tinta queda,
  «ENTRAR» en tinta a `--t-rotulo` con un filete de 5,5rem al 45% de su ancho.
- **Hover / focus:** se enciende el campo de media página (`#07211B` o `#211A0E`,
  520ms), la letra y «ENTRAR» pasan al color de su pista, el filete se estira al
  100% desde su borde exterior, y la mitad correspondiente del anillo se
  enciende.
- **< 52rem:** las dos pistas se apilan separadas por un filete, el campo pasa al
  fondo del propio enlace y ambos marcadores vuelven a la izquierda.

### Enlaces
- **En texto:** heredan color; subrayado en latón apagado a `0.22em` de la base,
  grosor `from-font`. En hover, texto y subrayado pasan a `var(--live)` en 180ms.
- **De display** (contacto, práctica cruzada): la serif a `--t-entrada` con
  `opsz` 21, sin `text-decoration`, con `border-bottom` de 1px en latón apagado.
  En hover, texto y borde a `var(--live)`.
- **Foco:** `outline: 2px solid var(--live)` a 3px de distancia, con 1px de
  radio. `:focus:not(:focus-visible)` no dibuja nada. Hay enlace «Saltar al
  contenido» fuera de pantalla que aparece en la esquina superior izquierda con
  fondo menta sobre cartulina.

**No hay botones en el build.** Ninguna de las tres páginas tiene un `<button>`
ni un control con forma de botón: todas las acciones son enlaces del programa.
Tampoco hay campos de formulario, chips, tarjetas ni diálogos. Si algún día
aparece un formulario, debe construirse con esta misma gramática — filete
inferior en lugar de caja, foco en menta, radio cero.

### Movimiento
Una curva para el sistema: `cubic-bezier(0.16, 1, 0.3, 1)`. Duraciones
observadas: 180–260ms para color de enlace, 320ms para el estado vivo del raíl,
380–420ms para filetes y mitades del anillo, 520ms para el campo de la portada,
560ms para los trazos del campo medido, 900ms para la aparición de la bruma.

**La entrada de la portada.** La puerta se abre una vez: el filete de cabecera se
tiende, el anillo enfoca desde `blur(22px)`, el pliegue baja, el lema enfoca, las
dos pistas escalonan su texto y su marcador, y el pie llega. ~2,4s en total.
- **Un solo mando:** todo cuelga de `--entrada-escala` declarada en `.portada`
  (1 = 2,4s; 4 ≈ 10s). Es el único número que hay que tocar.
- **La única excepción de easing del sistema:** el enfoque del anillo usa
  `cubic-bezier(0.4, 0.05, 0.2, 1)` propio, porque con la curva compartida el
  desenfoque se cerraba en 250ms y el gesto no se leía. Está justificada y
  aislada; no la extienda a otros elementos.
- **Nada se esconde:** cada animación corre `backwards` desde el estado visible,
  así que sin JS, sin animaciones o con `prefers-reduced-motion` la portada ya
  está puesta. El bloque entero se anula bajo movimiento reducido.
- **Una vez por sesión:** un script `is:inline` síncrono pone `data-entrada` en
  el elemento raíz antes del primer pintado, guardado en `sessionStorage`.
  Volver a la portada desde un mundo no vuelve a hacer esperar.

**El programa se imprime al bajar.** Desde el 18/09/2026 las entradas de lista
—prácticas, cifras, territorios, principios, pasos y huecos de la Pista B— no
están puestas de antemano: llegan desde 20px abajo y se asientan mientras cruzan
la ventana. Es la clase `.entra` de `base.css`, y el movimiento va atado a
`animation-timeline: view()`, no a un reloj: nada se mueve si el visitante no se
mueve. Nace de un encargo explícito — «que no se sienta tan plano en algunos
espacios», «quisiera un poco más de movilidad en algunos otros lugares».
- **Las tres salidas:** sin animaciones ligadas al scroll no se declara ni un
  fotograma y todo está impreso desde el principio; el bloque entero vive dentro
  de `@supports` y de `@media not (prefers-reduced-motion: reduce)` —el corte
  global a 1ms de `tokens.css` **no** neutraliza una animación de timeline,
  porque ahí la duración no se usa—; y `view()` no gasta fuera de pantalla.

**El cotejo ocurre.** En «El diagnóstico», la cadena muerta ya está puesta cuando
el visitante llega y la viva se traza delante de él, eslabón a eslabón, con el
hilo que los une bajando al mismo paso (`animation-range` escalonado por
`nth-child`). Es la frase de la sesión dicha con el único recurso que el impreso
no tiene: el tiempo del lector.

**El anillo al pie del principio.** Cada principio lleva el anillo bajo su
numeral, girando ±150° mientras cruza la ventana. Es el mismo criterio de la
brújula, aplicado a la única forma del sistema, y responde a lo que el cliente
señaló como lo que más le funciona de la página: «esa o que está girando me
encanta».

**El viaje entre páginas** usa transiciones de documento nativas
(`@view-transition { navigation: auto }`): la hoja saliente se va 10px arriba en
260ms, la entrante sube 22px en 460ms, y el anillo — compartido por nombre entre
la portada y el logotipo de la cinta — hace el viaje en 620ms. Donde el navegador
no las soporte, la navegación sigue siendo una navegación.

`prefers-reduced-motion` está atendido en cuatro sitios: globalmente en
`tokens.css` (toda animación y transición a 1ms), y explícitamente en el campo
medido, en las view transitions, en la entrada de la portada y en el bucle de la
bruma.

### Named Rules
**La regla del campo honesto.** Un campo que miente deja de ser un dato. Un trazo
es una unidad, el paso es el mismo en toda la página, y toda escala distinta de
1:1 se declara dentro del texto de la cifra, nunca entre el campo y su lectura.

**La regla de la ausencia dibujada.** Lo que falta se imprime, no se rellena ni
se esconde. Cada hueco declara qué va en su sitio y en qué formato se entrega.
Nunca se escribe una capacidad, una certificación, un caso o un cliente que no
exista, ni siquiera como texto de relleno verosímil.

**La regla del marcador al margen.** Los rótulos de categoría (pista, sesión,
rubro del cotejo) viven en el margen exterior o en línea con su título. Jamás
apilados encima de un titular.

**La regla de las tres salidas.** Todo efecto que dependa de una capacidad del
navegador declara sus tres salidas antes de entrar: qué se ve sin la capacidad,
qué hace bajo `prefers-reduced-motion`, y cuándo deja de gastar. La bruma las
tiene; la entrada de la portada las tiene. Un efecto sin las tres no entra.

## Do's and Don'ts

### Do:
- **Do** usar `var(--live)` para lo que está vivo y dejar que la pista decida el
  color: el mundo Industrial ya remapea esa variable al rojo `#FF5A4A`.
- **Do** construir cualquier sección nueva como una `<Sesion>` con numeral
  romano y rótulo: es lo que engancha el bloque al hilo y le da estado vivo.
- **Do** tomar todo tamaño de texto de la escala (`var(--t-…)`) y buscar primero
  el oficio que ya existe antes de pensar en un token nuevo.
- **Do** declarar `font-variation-settings: 'opsz' N` dentro del eje 8–60 en
  todo uso de la serif, proporcional al tamaño de lectura.
- **Do** medir cualquier color nuevo de los primeros 92svh contra el punto más
  claro de la bruma, no contra la cartulina limpia.
- **Do** darle a todo efecto sus tres salidas: sin la capacidad, con movimiento
  reducido, y fuera de pantalla.
- **Do** separar con un filete de 1px y espaciar con el compás (8/16/24/40/64/104).
- **Do** acotar el texto corrido con una medida explícita (`--measure` = 34rem, o
  un `max-width` en `ch` por bloque).
- **Do** hacer que la marginalia caiga bajo su sesión por debajo de 72rem en vez
  de ocultarla.
- **Do** declarar la escala de un campo medido, desde dentro del texto de la
  cifra, cuando un trazo no vale una unidad.
- **Do** imprimir lo que falta como entrada del programa, con su requisito y su
  formato de entrega.
- **Do** colocar el logotipo como imagen y darle su margen por CSS.

### Don't:
- **Don't** escribir un literal de `font-size`. La escala está cerrada y vive en
  `tokens.css`; un literal nuevo es una regresión, no una excepción.
- **Don't** volver a una didone ni a ninguna cara cuyo trazo delgado se rompa
  sobre `#0A0A0A`. La legibilidad sobre el fondo real manda sobre el espécimen.
- **Don't** recomponer el logotipo con las fuentes del sitio, recortarle la caja
  o teñirlo. Es un activo entregado, no un dibujo del sistema.
- **Don't** encender luz en el centro de la página ni bajo un bloque de texto. La
  luz entra arriba y muere abajo.
- **Don't** usar tarjetas, cajas, fondos de bloque ni bordes completos para
  agrupar. La agrupación se hace con filete superior y rejilla.
- **Don't** añadir sombras, `text-shadow`, `backdrop-filter` ni ningún efecto de
  elevación: el build no tiene ni uno.
- **Don't** poner un kicker o rótulo en versalitas apilado encima de un titular.
  El marcador va al margen exterior o en línea con el título.
- **Don't** usar el menta como color decorativo, de fondo de bloque, de icono o
  de acento permanente. Si no marca un estado, no es menta.
- **Don't** poner más de una cláusula viva por página: sólo `h1.titular em`. La
  cursiva del `h2` va en tinta.
- **Don't** introducir un segundo grosor de regla, un radio de esquina en
  superficies, una tercera familia tipográfica o una segunda curva de easing —
  la del anillo de la portada es la única excepción, y está justificada.
- **Don't** escribir un hex de marca dentro de un componente; use el token.
- **Don't** numerar sesiones en cifras arábigas: el programa se numera en romanos.
- **Don't** usar iconos de glifo o fuentes de iconos. La única forma del sistema
  es el anillo, y es un vector propio.
- **Don't** inventar contenido para la Pista B: capacidades, proyectos, clientes
  o herencia ALW se publican sólo cuando el cliente los entrega.

---

## Dónde el sistema es delgado

Registro honesto de lo que el build **no** resuelve, para que quien lo recoja no
lo confunda con una decisión:

- **La bruma no generaliza.** Es un componente, no un sistema de fondos: una
  instancia por página de mundo, siempre al tope, siempre 92svh, y su forma
  (dirección del haz, centro de la viñeta, umbrales del `smoothstep`) está escrita
  a mano en el shader. No hay manera de pedir «una bruma más tenue» ni de ponerla
  en otro sitio sin editar GLSL.
- **El shader duplica la paleta fuera del sistema de tokens.** Cartulina, menta y
  latón viven además como `vec3` literales dentro del fragment shader, y los dos
  colores del degradado de reserva (`--bruma-tenue`, `--bruma-borde`) son propios
  del componente. CSS no llega ahí: **si un token de color cambia, hay que
  cambiarlo a mano en el shader también.** Es el único punto del build donde un
  color no tiene una sola fuente de verdad.
- **La bruma sólo conoce dos pistas.** El uniforme es un `0` o un `1` y el color
  se interpola entre menta y latón. Un tercer mundo no tiene sitio sin reescribir
  esa mezcla.
- **La entrada es de la portada y sólo de la portada.** Las páginas de mundo no
  tienen secuencia de llegada, y no existe una gramática de entrada reutilizable:
  `--entrada-escala` y sus keyframes viven dentro de `index.astro`.
- **Hay una segunda curva de easing.** El enfoque del anillo usa la suya porque la
  compartida no servía para un desenfoque. Está aislada y justificada, pero el
  sistema ya no puede decir «una sola curva» sin matizar.
- **El logotipo es un raster.** Al ser `.webp` y no SVG, no hereda `currentColor`
  como el anillo: su único estado es la opacidad, no puede imprimirse en menta ni
  en latón, y no escala a tamaño de portada. Conviven por eso dos representaciones
  de la misma marca — imagen para el logotipo, vector para el símbolo.
- **`--marca-alto` existe y nadie la declara.** El logotipo siempre sale a su
  valor de reserva de 1,75rem. El mando está puesto pero no se usa.
- **Dos tokens de la escala tienen un solo consumidor.** `--t-portada` y
  `--t-rail-letra` existen únicamente para la portada. Tienen oficio declarado y
  por eso están en la escala, pero son los candidatos a revisar si la portada
  cambia.
- **La escala es de tamaño, no de ritmo.** Los tokens fijan `font-size`; la
  altura de línea, el tracking y el `opsz` siguen escritos componente a
  componente. Un cambio de escala no arrastra el interlineado con él.
- **El subset cierra el repertorio.** Source Serif 4 no tiene `latin-ext`: un
  carácter por encima de `U+00FF` en display cae a Georgia. Es aceptable para el
  contenido actual y hay que rehacer el subset antes de aceptar otro.
- **No hay folio, ni titulillo, ni índice.** Ocho sesiones en la Pista A y
  ninguna tabla de contenidos: la orientación depende por completo del hilo y del
  scroll. Es el punto más frágil del sistema en páginas largas.
- **La marginalia colapsa por debajo de 72rem.** No desaparece — cae bajo su
  sesión —, pero deja de ser marginalia: pierde el paralelo con el cuerpo que le
  da sentido. En móvil, la nota se lee como un epílogo.
- **Un solo peso de filete.** Todo el sistema divide con 1px; la jerarquía
  descansa en el color, y no hay un peso mayor para una división de rango
  superior si alguna vez hace falta.
- **No hay formularios.** El contacto es `mailto:` y `tel:`. Cuando exista un
  formulario habrá que inventar la gramática de campo, error y estado
  deshabilitado desde cero.
- **No hay imágenes de contenido.** La única imagen del sitio es el logotipo. Por
  decisión de producto no existe material fotográfico propio con derechos
  confirmados, y los clientes se listan en tipografía porque no hay logotipos
  vectoriales. El sistema no tiene todavía reglas de tratamiento de imagen.
- **Un solo esquema.** `color-scheme: dark` y fondo negro fijo. No hay modo claro
  ni lo contempla ninguna regla.
