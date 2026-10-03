---
target: industrial (/industrial/)
total_score: 27
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/user/iCloud Drive (Archive)/Documents/atsys/spotlatam.com/src/pages/industrial/index.astro"
target_fingerprint: "sha256:c8222e2cafa9342080c9502d34eeeb05968b1b0bce13223105f56ee703291f06"
target_path: /Users/user/iCloud Drive (Archive)/Documents/atsys/spotlatam.com/src/pages/industrial/index.astro
timestamp: 2026-10-01T14-04-30Z
slug: src-pages-industrial-index-astro
---
Method: dual-agent (A: a1b4d17cff068bb83 · B: aed043d1f10fac13c)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | El hilo de capítulos se queda fijo en "I QUÉ HACEMOS" durante las dos galerías (18 fotos), el tramo más largo de scroll de la página — cero feedback de orientación justo donde más se necesita. |
| 2 | Match System / Real World | 4/4 | Vocabulario propio del sector (ONAC, nomenclatura de catálogo, ciudades reales), sin jerga de marketing genérica. |
| 3 | User Control and Freedom | 3/4 | Sin trampas de navegación, pero el hilo se recentra solo horizontalmente en cada scroll — es cromo moviéndose sin acción directa del usuario. |
| 4 | Consistency and Standards | 3/4 | Sistema interno riguroso, pero la alternancia clara/oscura (motor, Sesión I, corchete) no sigue ninguna regla legible para quien la nota. |
| 5 | Error Prevention | 4/4 | Sin formularios; sólo `tel:`/`mailto:`/anclas. Sin estado vacío ambiguo. |
| 6 | Recognition Rather Than Recall | 3/4 | Buena persistencia de identidad, pero la tesis y el método se repiten verbatim en dos sesiones sin ninguna señal de que es intencional. |
| 7 | Flexibility and Efficiency | n/a | Página de Persuadir, visita única; no aplica un flujo de uso repetido. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Disciplina de filetes consistente; la Sesión V ("software/demarcación") es la única rejilla del programa que queda descompensada en dos columnas. |
| 9 | Error Recovery | 4/4 | No hay superficie donde producir un error. |
| 10 | Help and Documentation | n/a | La página se explica a sí misma; no corresponde un sistema de ayuda en un scroll único. |
| **Total** | | **27/32** | **Good (84%)** |

## Design Specificity Verdict

**Evaluación de diseño (Assessment A):** Pasa. No se podría trasplantar a otra industrial sin reescribir: nueve familias de catálogo con nomenclatura real, el descargo "la acreditación es del laboratorio aliado, no de la casa", el listado real de ciudades, el conteo de 34 clientes, fotografía propia de instalación (furgón DHL, cerramientos de seguridad, estaciones de pesaje) y la herencia ALW son todos específicos y están cargando peso real. El único fragmento intercambiable es la frase de pie de página ("Pensamos como consultores...") compartida sin cambio con la Pista A.

**Escaneo determinístico (Assessment B):** El escáner mecánico sobre `index.astro` + `tokens.css` + `base.css` salió limpio salvo dos avisos (`advisory`, no error) de `font-size` fuera de la escala declarada de DESIGN.md — ambos preexistentes a esta ronda (`.motor__afirmacion` línea 345, `.subtitular--grande` línea 706), no introducidos hoy.

El overlay de `detect.js` inyectado en vivo reportó 26 hallazgos. Verifiqué varios personalmente contra el DOM renderizado después de recibir los dos informes, porque el detector tiene un punto ciego conocido con esta página: las tres bandas claras nuevas (`.claro`/`.sesion--claro`) pintan su fondo con un `::after` a sangre completa — un **hermano** en el DOM, no un ancestro — y el detector (igual que un script naive que camina ancestros buscando `background-color`) no lo ve, así que reporta el fondo real como el negro del `<body>` en vez del papel crema que el visitante ve. Confirmé en vivo (computed styles + captura de pantalla) que esto afecta **más** de lo que Assessment B le atribuyó: de los ~14 hallazgos de `low-contrast`, sólo **3 son reales** (no ~6):

- **Real, y nuevo de esta ronda:** `.motor__pasos b` (los numerales "I/II/III/IV/V" de Escuchar-Concebir-Curar-Construir-Trascender en el panel claro del motor) en `#7F5F35` sobre `#E2DCCC` mide **4.27:1** — por debajo del 4.5:1 que exige texto normal. Lo calibré contra el papel puro (`#EDE9E1`, 4.83:1) al escribir el token, pero no contra `--placa` (el tono ligeramente más hondo que usa ese panel específico), donde cae justo debajo del piso.
- **Falsos positivos confirmados (el mismo punto ciego), ~11 instancias:** incluyendo los numerales "II"/"III" de la barra de pestañas (`.pestanas b`), que Assessment B había clasificado como fallo real a 3,0:1 sobre negro — los inspeccioné en vivo (computed style + captura) y están sobre el papel crema de la Sesión I, no sobre negro: miden 5,40:1, pasan AA de sobra. El resto —títulos y párrafos del corchete y de "Qué hacemos"— ya los había identificado Assessment B como el mismo punto ciego.

El resto del escaneo (texto de 10px bajo el piso de legibilidad en los enlaces de la tira del hero, 8 instancias de texto en mayúsculas —una de ellas en un span `sr-only` inerte—, y un `line-height` de 1,20 en el pie del muro de clientes) son hallazgos reales por la letra de la regla, todos preexistentes a esta ronda, no introducidos hoy.

## Overall Impression

La página tiene convicción y especificidad de producto genuinas — no es una plantilla con el logo cambiado. El mayor problema no es de superficie: es que la pieza más cara del cambio de hoy (la alternancia clara/oscura calcada de picklerobot.com) se ejecutó con buen oficio en cada banda individual, pero no llega a leerse como un sistema con una regla — y el tramo más largo de la página (las dos galerías) es exactamente donde la navegación deja de dar señal. Hay además un bug real, chico y mío de hoy: un token de contraste que no pasé por el fondo correcto en un solo componente.

## What's Working

1. **El vídeo del hero es ingeniería real, no decoración.** `Vitrina.astro` sólo carga y reproduce cuando no hay `prefers-reduced-motion`, viewport angosto, `saveData` ni conexión lenta — con poster de respaldo. Es el tipo de disciplina que no se ve en una captura.
2. **El hilo de capítulos (`Hilo.astro`) es un solo componente haciendo el trabajo a cualquier ancho.** Colapsa a numerales bajo 72rem salvo el activo, se recentra sobre overflow real (no asumido), sin nav de escritorio + menú de móvil por separado.
3. **Los descargos de honestidad son específicos y cargan peso real,** no son copy de confianza genérico: "la acreditación es del laboratorio aliado, no de la casa" y "se publican cuando existan confirmados, no antes" protegen activamente al cliente de sobreprometer — raro en una página de Persuadir.

## Priority Issues

**[P1] El hilo de navegación se apaga durante el tramo más largo de la página.**
Por qué importa: ni `Sala` ni `Galeria` (18 fotos entre las dos) tienen su propio ancla observada por el `IntersectionObserver` del hilo — el nav se queda fijo en "I QUÉ HACEMOS" durante todo ese scroll. El cliente pidió este nav explícitamente para que el visitante "sepa dónde está sin abrir nada"; falla justo donde más scroll hay.
Fix: dar a las galerías su propio estado observado (aunque sea un sub-estado "I · Fotografía"), o acortar/paginar el tramo para que la zona muerta no domine el scroll.
Comando sugerido: `/impeccable polish`

**[P1] Copy duplicado verbatim en el mismo scroll continuo.**
Por qué importa: el párrafo completo de la tesis (`tesis.cuerpo`) se imprime idéntico en el `plomo` del hero y otra vez en `afirmacion__cuerpo`; la frase del método se imprime idéntica en el panel oscuro del motor y otra vez en la Sesión VIII. Sin recarga de página entre ambas — un lector atento registra "esto ya lo leí" a mitad de scroll, lo que lee como resto de plantilla y no como refuerzo deliberado.
Fix: escribir una segunda frase distinta para cada reuso — el corchete debería cerrar la promesa en registro imperativo, no repetir la apertura; la Sesión VIII debería referenciar el panel del motor ("como se dijo arriba...") en vez de repetir su frase.
Comando sugerido: `/impeccable clarify`

**[P1] Fallo de contraste real, nuevo de esta ronda: los numerales del panel claro del motor.**
Por qué importa: `.motor__pasos b` ("I Escuchar", "II Concebir"...) en `#7F5F35` sobre el fondo `--placa` (`#E2DCCC`) mide 4,27:1 — por debajo del piso AA de 4,5:1 para texto normal. Es mi propio token, calibrado contra el papel equivocado.
Fix: oscurecer `--foil` dentro de `.claro`/`.sesion--claro` (en `tokens.css`) a un valor que pase 4,5:1 también sobre `--placa`, no sólo sobre `--stock`; o usar `--foil-dim` (ya mide 5,91:1) para este rol específico.
Comando sugerido: `/impeccable audit`

**[P2] La alternancia clara/oscura no tiene una regla legible.**
Por qué importa: tres bandas (panel derecho del motor, "Qué hacemos" completa, el corchete) pasan a claro mientras otras diez sesiones se quedan en negro, sin ninguna señal visual de por qué esas tres. Cada banda está bien ejecutada por separado, pero un lector que note el patrón (el cliente pidió explícitamente "calcar la alternancia" de picklerobot.com) buscará lógica y no la encontrará.
Fix: atar la luz a un significado consistente (por ejemplo, "claro siempre marca una afirmación demostrable o un CTA"), o reducir a una sola banda clara para no invitar a buscar un patrón que no existe.
Comando sugerido: `/impeccable critique` de seguimiento tras decidir la regla, luego `/impeccable polish`

**[P2] "Más de 50 años" vs. "setenta y cinco años" sin puente.**
Por qué importa: el hero dice "Más de 50 años al servicio de la industria"; la Sesión VII dice "setenta y cinco años de tradición." Ambas cifras son intencionales, pero nada en la página las conecta — un visitante de primera vez ve ambas dentro de un mismo scroll y lo lee como contradicción, no como simplificación de titular, justo cuando se está construyendo credibilidad.
Fix: una línea puente en la Sesión VII ("la cifra de portada redondea a la baja; esta es la exacta de catálogo"), o usar una cifra de portada que anide visiblemente en 75 (p. ej. "70+").
Comando sugerido: `/impeccable clarify`

## Persona Red Flags

**Jordan (primera vez):** llega, cruza las dos galerías y ve el nav de capítulos congelado en "I QUÉ HACEMOS" todo ese tramo — puede concluir que el nav está roto, no que funciona así a propósito. También lee "50+ años" en el hero y "75 años" en la Sesión VII sin ningún puente — sin el contexto interno de la casa, puede leerlo como descuido justo en la primera impresión.

**Riley (estrés):** notará que la barra de capítulos se reposiciona sola horizontalmente en cada scroll (recalculado dentro del callback del `IntersectionObserver`) y probablemente dispare un salto izquierda-derecha visible cerca de los límites entre sesiones. También presionará "Ver el método completo" y "Ver el catálogo" esperando contenido nuevo y llegará a sesiones que repiten texto ya leído arriba — la respuesta honesta a "¿esto lleva a algo nuevo?" es "lleva de vuelta a lo que ya leíste."

**Casey (móvil):** dos filas pegajosas (marca + pestañas de capítulo) reclaman una porción fija grande del primer viewport antes de que aparezca el hero. Luego, 18 fotos consecutivas a ancho completo (ambas galerías apiladas en una columna en móvil) con sólo dos líneas de pie de foto en total para romper el tramo.

## Minor Observations

- Texto de 10px en los enlaces de la tira del hero (`.tira span`), por debajo del piso de legibilidad de 11px — preexistente, no de esta ronda.
- 8 instancias de texto en mayúsculas detectadas; una es un `span.visualmente-oculto` (skip-link para lector de pantalla, 1×1px, nunca visible) — hallazgo inerte, no hace falta tocarlo.
- `figcaption.prueba__pie` con `line-height: 1.20` (el piso recomendado es 1.3) — cosmético, preexistente.
- La Sesión V (software/demarcación) es la única rejilla de dos columnas del programa que queda descompensada: una entrada es un párrafo completo, la otra una frase de ocho palabras.
- La frase de pie de página ("Pensamos como consultores...") es el único fragmento genérico de marca, compartido sin cambio con la Pista A.
- El vídeo del hero muestra la marca DHL en movimiento (37s en loop) — misma categoría de derecho de uso sin confirmar ya señalada para los logos del muro de clientes; más visible por ser vídeo, no un hallazgo nuevo.
- Los contactos de la Sesión X (Mauricio/Fabio, teléfonos y correos personales) y los del pie de página (gerencia@/contacto@) son dos listas separadas sin ninguna señal de cuál usar cuándo.

## Questions to Consider

1. Si la alternancia clara/oscura calca el ritmo de picklerobot.com, ¿debería esa luz significar siempre lo mismo (por ejemplo, "claro = donde probamos algo"), en vez de confiar en que el lector note un patrón no declarado?
2. La Sesión VII ya trae la cifra exacta y verificable del catálogo ("75 años") — ¿la versión simplificada "50+" del hero le compra algo real al cliente, dado que ambas viven dentro del mismo scroll?
3. La tesis de apertura y la frase del método se repiten palabra por palabra en dos sesiones distintas — ¿es un eco deliberado, o quedó de construir una sesión sobre otra antes de terminar el contenido?
