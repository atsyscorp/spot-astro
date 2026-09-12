---
name: Spot — Programa de Sala
description: El programa de mano de un summit, impreso sobre cartulina negra con lámina de latón; el menta sólo marca lo vivo.
colors:
  cartulina: "#0A0A0A"
  cartulina-honda: "#060606"
  tinta: "#EDE9E1"
  tinta-anillo: "#B5B0A6"
  tinta-cuerpo: "#C9C4BA"
  tinta-queda: "#948E82"
  laton: "#B8935A"
  laton-apagado: "#6A5436"
  laton-tenue: "#2E2519"
  menta-viva: "#10E6B3"
  laton-vivo: "#CDA96E"
  campo-pista-a: "#07211B"
  campo-pista-b: "#211A0E"
  filete: "#2A2724"
typography:
  display:
    fontFamily: "'Bodoni Moda', Didot, 'Bodoni MT', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 5.2vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.022em"
    fontVariation: "'opsz' 96"
  headline:
    fontFamily: "'Bodoni Moda', Didot, 'Bodoni MT', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.5rem, 3.1vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.012em"
    fontVariation: "'opsz' 48"
  title:
    fontFamily: "'Bodoni Moda', Didot, 'Bodoni MT', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.35rem, 2.5vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.012em"
    fontVariation: "'opsz' 28"
  numeral:
    fontFamily: "'Bodoni Moda', Didot, 'Bodoni MT', Georgia, 'Times New Roman', serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.06em"
    fontVariation: "'opsz' 28"
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
    fontFamily: "'Bodoni Moda', Didot, 'Bodoni MT', Georgia, 'Times New Roman', serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
    fontVariation: "'opsz' 16"
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
reimprime esa misma luz en latón `#CDA96E`: el sistema no cambia, cambia la tinta
que vive.

La arquitectura es un divisor puro en `/` y dos mundos con tono propio en
`/experiencias/` y `/industrial/`. El rechazo declarado y observado por el build:
el reel de eventos a sangre con titular serif encima que domina esta categoría.
Aquí no hay hero de vídeo, ni tarjetas, ni sombras, ni iconos de glifo.

**Key Characteristics:**
- Fondo negro cartulina `#0A0A0A` en las tres páginas; sin modo claro.
- Una sola familia de display (Bodoni Moda variable, `opsz` declarada en cada uso)
  y una sola de texto (Archivo, cifras tabulares).
- Dieciséis tamaños con nombre y oficio; **ni un solo literal de `font-size` en
  todo `src/`**.
- Un único peso de filete (1px) para todas las divisiones del sistema.
- Cero sombras, cero radios (salvo 1px en el anillo de foco y 50% en un punto de
  7px de la metodología).
- El menta reservado a lo vivo; el latón para toda la estructura.
- La ausencia se dibuja: los huecos de contenido se imprimen como entradas del
  programa, nunca se rellenan.

## Colors

Una cartulina, cuatro tintas y una luz. El contraste está medido sobre el fondo
`#0A0A0A`: tinta 16,35:1, cuerpo 11,40:1, tinta queda 6,08:1, latón 6,94:1,
menta 12,25:1 — todo el sistema pasa AA, y el cuerpo y los titulares pasan AAA.

### Primary
- **Menta viva** — la única luz del sistema. Marca la sesión que se está leyendo
  (el travesaño y el numeral del raíl), el lado vivo del cotejo, el anillo de
  foco, `::selection`, el hover de cualquier enlace, y exactamente una cláusula
  en cursiva del `h1` de cada página. Nunca se usa como relleno, ni como fondo de
  bloque, ni para decorar.
- **Latón vivo** — el mismo papel, reimpreso para la Pista B. `[data-pista='b']`
  remapea exactamente dos variables — la luz (`--live`) y el latón estructural
  (`--foil`, que baja a `#9C8358` para no confundirse con ella) — y nada más. Es
  un remapeo de token, no un segundo sistema: ningún componente conoce la pista.

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
- **Cartulina** — el fondo de las tres páginas, el `theme-color` del navegador y
  el relleno de los puntos de la metodología (para que la línea pase por detrás).
- **Cartulina honda** — sólo el pie y el canal de la barra de scroll. Es la única
  variación tonal de superficie del sistema.
- **Tinta** — titulares, subtitulares, nombre de la marca, cifras.
- **Tinta del anillo** — un punto exacto por debajo de la tinta, y sólo para el
  anillo en reposo de la portada. El símbolo es la pieza más grande de la página:
  a tinta plena se adelanta al titular, y un escalón de gris lo devuelve a su
  sitio sin apagarlo. No lo use para texto.
- **Tinta cuerpo** — todo el texto corrido y el color por defecto del `body`.
- **Tinta queda** — notas al margen, líneas de apoyo, títulos de las entradas
  todavía no impresas. Es cálida a propósito: `#948E82`, nunca un gris neutro.
- **Filete** — la división estándar entre sesiones, entradas de lista y bloques.
- **Campo de pista A / campo de pista B** — los dos únicos fondos de color del
  sistema, y sólo en la portada: la media pantalla entera se enciende al posarse
  sobre su pista. No existen fuera de ese gesto.

### Named Rules
**La regla de la luz.** El menta no es un color de marca: es el estado *vivo*. Se
usa para lo que está ocurriendo ahora (sesión en pantalla, foco, selección,
hover, el lado vivo del cotejo) y para una sola cláusula del `h1`. Si un elemento
puede estar en menta permanentemente sin cambiar de estado, no debe estar en
menta.

**La regla de un mundo, una tinta.** Un mundo tiene una sola luz. La Pista B no
añade una paleta: remapea `--live` y `--foil` bajo `[data-pista='b']`. Un
componente nuevo que necesite el color vivo usa `var(--live)` y hereda la pista
automáticamente. Nunca escriba `#10E6B3` en un componente.

**La regla de la cláusula viva.** Un `h1` por página lleva exactamente una
cláusula en cursiva menta (`h1.titular em`). El `h2` lleva cursiva, pero en tinta
(`h2.subtitular em`), no en menta. Dos cláusulas vivas en una página rompen la
regla de la luz.

**La regla del latón estructural.** Si un elemento organiza (numera, rotula,
divide, mide), va en latón. Si informa, va en tinta. Si vive, va en menta. No hay
cuarta categoría.

## Typography

**Display Font:** Bodoni Moda variable, eje `opsz` (con Didot, Bodoni MT, Georgia,
Times New Roman como reserva)
**Body Font:** Archivo (con Helvetica Neue, Helvetica, Arial como reserva)
**Label Font:** Archivo en versalitas con tracking abierto. **No hay tercera
familia**: el sistema no tiene monoespaciada, y no debe adquirir una sin un
oficio que la pida.

Ambas familias se sirven desde el propio dominio en woff2 (`public/fonts/`), con
cortes `latin` y `latin-ext` separados por `unicode-range`, pesos `400 700`,
`font-display: swap`, y los dos ficheros romanos precargados en el `<head>`.
`font-synthesis: none` en el `body`: no hay cursivas ni negritas falsas — si una
variante no existe, no se finge.

**Character:** un Didone de altísimo contraste contra un grotesco de rejilla
apretada. El Bodoni pone la voz del impreso; el Archivo pone el dato, siempre con
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
| `--t-marca` | `1.5rem` | Logotipo y numeral de raíl; numeral de práctica |
| `--t-sub` | `1.125rem` | Rótulo de la cinta, numeral de principio y de hueco, numeral de raíl en móvil |
| `--t-lead` | `1.1875rem` | Entradilla (`.plomo`) |
| `--t-cuerpo` | `1.0625rem` | Cuerpo global y lista de clientes |
| `--t-nota` | `1rem` | Nota curatorial (`.nota`); el rótulo de la cinta bajo 34rem |
| `--t-chico` | `0.9375rem` | Cuerpo menor: marginalia, enlace cruzado, datos del pie, línea de pista |
| `--t-menudo` | `0.875rem` | Apoyo: numeral de estación, nombres de territorio, contacto de portada |
| `--t-rotulo` | `0.6875rem` | Rótulo en versalitas (`.medida`), unidad de cifra, «ENTRAR», cruce de pista |
| `--t-micro` | `0.625rem` | Escala declarada del campo, marcador vertical, raíl y territorios en móvil |

Varios oficios comparten token a propósito: los cuatro títulos de entrada
(principio, territorio, enlace de contacto, cierre del pie) caen todos en
`--t-entrada`, y las tres estaciones (paso de metodología, paso de cotejo,
entrada no impresa) en `--t-menor`. Esa convergencia es la decisión: un tamaño
por oficio, no un tamaño por componente.

### Hierarchy
- **Display** (`--t-display`, 400, alt. 1,04, tracking −0,022em, `opsz` 96): el
  `h1` de cada mundo y el remate «Let's work together» / «Hablemos». Uno solo por
  página. En la portada su papel lo hace `--t-lema`, más contenido, porque allí
  quien manda es el anillo.
- **Headline** (`--t-titulo`, 400, alt. 1,14, `opsz` 48): la apertura de cada
  sesión, el título de práctica (`opsz` 44) y la cifra del peso en cursiva
  (`opsz` 32).
- **Title** (`--t-entrada`, 400, alt. 1,15–1,16): las entradas del programa. El
  primer principio sube a `--t-lema` porque manda sobre los otros dos; las
  estaciones bajan a `--t-menor`.
- **Numeral** (`--t-marca`, Bodoni 400, tracking 0,06em, `opsz` 28): el número de
  sesión en el raíl, que comparte tamaño con el logotipo. Siempre romano. Bajo
  40rem cae a `--t-sub`.
- **Lead** (`--t-lead`, alt. 1,58, ancho máximo 34rem ≈ 68 caracteres): el primer
  párrafo de una sesión.
- **Body** (`--t-cuerpo`, alt. 1,62, tabular): texto corrido. Las medidas de
  lectura se acotan por bloque con `ch` (44ch en principios, 48ch en prácticas,
  52ch en metodología y cifras, 54–56ch en territorios y huecos).
- **Note** (`--t-nota`, Bodoni cursiva, alt. 1,5, `opsz` 16, tinta queda): las
  glosas del impreso. En la marginalia baja a `--t-chico` con `opsz` 14.
- **Label** (`--t-rotulo`, Archivo, tracking 0,22em, versalitas, latón): rótulos
  de sesión, de pista y de cotejo. En el raíl abre a 0,24em, en la portada a
  0,26em, y en móvil baja a `--t-micro` con 0,14em.

### Named Rules
**La regla de un papel por oficio.** La escala es cerrada y está en `tokens.css`.
Todo `font-size` de `src/` es un `var(--t-…)`; un literal nuevo es una regresión,
no una excepción. Antes de añadir un token, busque el oficio: si el tamaño que
necesita ya tiene uno, use ese — que dos componentes compartan token es la
intención del sistema, no una colisión.

**La regla de la óptica declarada.** Bodoni Moda es variable en `opsz`: todo uso
de display declara su `font-variation-settings` (96 en el titular, 48 en el
subtitular, 44 en prácticas, 36 en el cierre del pie, 32 en la cifra, 28 en
enlaces de contacto y entradas, 24 en el cotejo, 14–18 en notas y numerales
menores). Un display sin `opsz` declarado hereda 72 del `h1..h4` global y llega
con el grosor equivocado.

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

**El hilo.** Una lámina de latón tenue de 1px recorre el programa entero por la
línea del medianil (`.programa::before`), de la primera sesión al final del
contenido. Cada sesión se cuelga de él con un travesaño horizontal
(`.sesion__rail::before`) que en reposo mide el 66% de su ancho, en latón
apagado. Un `IntersectionObserver` con `rootMargin: -45% 0px -45% 0px` marca como
`.sesion--viva` la sesión que ocupa la banda central del viewport: su travesaño
se estira al 100% y pasa a la luz, y su numeral se enciende. Ese hilo es toda la
orientación de la página: **no hay barra de navegación de sección, ni índice, ni
migas**.

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
apagan y el encendido pasa al fondo del propio enlace.

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
impreso, y se consigue con tres recursos:

1. **El filete.** 1px de `#2A2724` divide; 1px de latón apagado jerarquiza (el
   pliegue de la portada, el borde superior del pie); 1px de latón tenue insinúa
   (el hilo, los renglones sin imprimir).
2. **La variación de cartulina.** Una sola: el pie y el canal de scroll bajan a
   `#060606`. No hay «superficie elevada» en el sistema.
3. **El orden de tinta.** Tinta → anillo → cuerpo → queda es la escala de
   profundidad real del sitio. Lo que está más lejos no se oscurece con una capa:
   se imprime con menos tinta.

### Named Rules
**La regla del filete único.** El sistema tiene un solo grosor de regla: 1px.
Toda la jerarquía de una división se expresa con el *color* del filete, nunca con
su peso. No introduzca reglas de 2px ni bordes dobles.

**La regla del plano.** Nada se levanta del papel. Si un elemento necesita
destacarse, se le da luz (menta), se le da aire (compás) o se le da un filete —
jamás una sombra.

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

**El logotipo** es «spot» en Archivo 400 con el anillo ocupando el lugar de la o,
a 0,62em de la caja tipográfica y desplazado 0,035em hacia abajo para sentarse en
la línea de las minúsculas.

### Named Rules
**La regla sin tarjetas.** Un programa de sala no tiene tarjetas. Las entradas de
lista — prácticas, principios, territorios, cifras, huecos — se separan con un
filete superior y una rejilla de dos columnas (numeral + cuerpo). Nunca con una
caja, un fondo, un borde completo ni un radio.

**La regla del corte recto.** Los extremos del anillo son cortes rectos. Cualquier
reproducción con `stroke-linecap: round` está mal dibujada.

## Components

### El raíl de sesión (componente firma)
Numeral romano en Bodoni sobre rótulo en versalitas de latón, colgado del hilo
por un travesaño horizontal.
- **Forma:** columna de 9rem, sin caja; padding izquierdo de 24px que es
  exactamente el ancho del travesaño.
- **Reposo:** numeral en latón, travesaño en latón apagado al 66% de su ancho.
- **Vivo (`.sesion--viva`):** numeral y travesaño en `var(--live)`, travesaño al
  100%. Transición de 320ms con `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Estado:** lo decide el `IntersectionObserver`, no el hover ni el clic. Es un
  indicador de lectura, no un control.

### La marginalia
Nota curatorial en Bodoni cursiva, tinta queda, en la columna exterior.
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
- **El orden es campo → lectura → texto:** el campo arriba, la cifra en Bodoni
  cursiva debajo, la unidad en versalitas de latón a su lado, y el texto (con su
  escala si la hay) al final.
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

### La cinta (navegación)
Cabecera `sticky` en cartulina con filete inferior, tres elementos en línea:
logotipo (enlace a la portada), pista actual, y el enlace a la otra pista.
- **Rótulo de pista:** `.medida` en latón **en línea** con el nombre, alineados
  por la base — nunca apilado encima.
- **Hover:** el enlace a la otra pista pasa de tinta queda a `var(--live)`.
- **< 52rem:** los rótulos «Pista A / Pista B» se esconden y el enlace cruzado se
  reduce a su letra. **< 34rem:** el nombre de pista baja de `--t-sub` a
  `--t-nota`.
- El anillo del logotipo lleva `view-transition-name: anillo`, declarado una sola
  vez.

### Las mitades de la portada
La acción es media pantalla, no un botón: enlace que ocupa su mitad completa,
con el marcador de pista (letra en `--t-rail-letra` + «PISTA» en vertical a
`--t-micro`) en el **margen exterior**, no encima del nombre.
- **Reposo:** nombre en tinta a `--t-portada`, línea en tinta queda, «ENTRAR» en
  tinta a `--t-rotulo` con un filete de 5,5rem al 45% de su ancho.
- **Hover / focus:** se enciende el campo de media página (`#07211B` o `#211A0E`,
  520ms), la letra y «ENTRAR» pasan al color de su pista, el filete se estira al
  100% desde su borde exterior, y la mitad correspondiente del anillo se
  enciende.
- **< 52rem:** las dos pistas se apilan separadas por un filete, el campo pasa al
  fondo del propio enlace y ambos marcadores vuelven a la izquierda.

### Enlaces
- **En texto:** heredan color; subrayado en latón apagado a `0.22em` de la base,
  grosor `from-font`. En hover, texto y subrayado pasan a `var(--live)` en 180ms.
- **De display** (contacto, práctica cruzada): Bodoni a `--t-entrada`, sin
  `text-decoration`, con `border-bottom` de 1px en latón apagado. En hover, texto
  y borde a `var(--live)`.
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
Una sola curva en todo el sistema: `cubic-bezier(0.16, 1, 0.3, 1)`. Duraciones
observadas: 180–260ms para color de enlace, 320ms para el estado vivo del raíl,
380–420ms para filetes y mitades del anillo, 520ms para el campo de la portada,
560ms para los trazos del campo medido.

**El viaje entre páginas** usa transiciones de documento nativas
(`@view-transition { navigation: auto }`): la hoja saliente se va 10px arriba en
260ms, la entrante sube 22px en 460ms, y el anillo — compartido por nombre entre
la portada y la cinta — se contrae de los 58vh de la portada al logotipo de la
cinta en 620ms. Donde el navegador no las soporte, la navegación sigue siendo una
navegación.

`prefers-reduced-motion` está atendido dos veces: globalmente en `tokens.css`
(toda animación y transición a 1ms) y explícitamente en los dos bloques con
movimiento propio (campo medido, view transitions).

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

## Do's and Don'ts

### Do:
- **Do** usar `var(--live)` para lo que está vivo y dejar que la pista decida el
  color: el mundo Industrial ya remapea esa variable a latón `#CDA96E`.
- **Do** construir cualquier sección nueva como una `<Sesion>` con numeral
  romano y rótulo: es lo que engancha el bloque al hilo y le da estado vivo.
- **Do** tomar todo tamaño de texto de la escala (`var(--t-…)`) y buscar primero
  el oficio que ya existe antes de pensar en un token nuevo.
- **Do** declarar `font-variation-settings: 'opsz' N` en todo uso de Bodoni Moda,
  proporcional al tamaño (96 en titulares, 14–28 en notas, numerales y enlaces).
- **Do** separar con un filete de 1px y espaciar con el compás (8/16/24/40/64/104).
- **Do** acotar el texto corrido con una medida explícita (`--measure` = 34rem, o
  un `max-width` en `ch` por bloque).
- **Do** hacer que la marginalia caiga bajo su sesión por debajo de 72rem en vez
  de ocultarla.
- **Do** declarar la escala de un campo medido, desde dentro del texto de la
  cifra, cuando un trazo no vale una unidad.
- **Do** imprimir lo que falta como entrada del programa, con su requisito y su
  formato de entrega.
- **Do** dibujar el anillo con cortes rectos (`butt`), apertura de 16,8° centrada
  a 180° exactos, y `currentColor`.

### Don't:
- **Don't** escribir un literal de `font-size`. La escala está cerrada y vive en
  `tokens.css`; un literal nuevo es una regresión, no una excepción.
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
  superficies, una tercera familia tipográfica o una segunda curva de easing.
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

- **Un solo peso de filete.** Todo el sistema divide con 1px. La jerarquía
  descansa en el color del filete; no hay un peso de regla mayor para una
  división de rango superior si alguna vez hace falta.
- **No hay folio ni titulillo.** Un programa de sala impreso lleva número de
  página y encabezado corrido; aquí no existe ninguno de los dos. La cinta lleva
  el nombre de la pista, pero no el de la sesión en curso.
- **No hay índice.** Ocho sesiones en la Pista A y ninguna tabla de contenidos:
  la orientación depende por completo del hilo y del scroll. Funciona, pero es el
  punto más frágil del sistema en páginas largas.
- **La marginalia colapsa por debajo de 72rem.** No desaparece — cae bajo su
  sesión —, pero deja de ser marginalia: pierde el paralelo con el cuerpo que le
  da sentido. En móvil, la nota se lee como un epílogo.
- **Dos tokens de la escala tienen un solo consumidor.** `--t-portada` y
  `--t-rail-letra` existen únicamente para la portada. Tienen oficio declarado y
  por eso están en la escala, pero son los candidatos a revisar si la portada
  cambia: hoy no prueban nada más que a sí mismos.
- **La escala es de tamaño, no de ritmo.** Los tokens fijan `font-size`; la
  altura de línea, el tracking y el `opsz` siguen escritos componente a
  componente. Un cambio de escala no arrastra el interlineado con él.
- **No hay formularios.** El contacto es `mailto:` y `tel:`. Cuando exista un
  formulario habrá que inventar la gramática de campo, error y estado deshabilitado
  desde cero; el sistema actual no la contiene.
- **No hay imágenes.** Ni una fotografía en el build, por decisión de producto
  (no existe material propio con derechos confirmados). Los clientes se listan en
  tipografía porque no hay logotipos vectoriales. El sistema no tiene todavía
  reglas de tratamiento de imagen.
- **Un solo esquema.** `color-scheme: dark` y fondo negro fijo. No hay modo claro
  ni lo contempla ninguna regla.
