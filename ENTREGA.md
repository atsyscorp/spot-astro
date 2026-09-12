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
| `/industrial/` | `src/pages/industrial/index.astro` | Pista B. Dos sesiones con contenido real, cuatro declaradas en preparación. |

Todo el texto vive en `src/data/`, no en las plantillas:

- `src/data/spot.ts` — **todo procede de `Spot · Portafolio.pdf`**. Nada inventado.
- `src/data/pendiente.ts` — los huecos de la línea Industrial, declarados en vez
  de rellenados. Cambiar este archivo cambia lo que el sitio pide.

El símbolo de marca está en `brand/`, con su geometría medida documentada en
`brand/README.md`.

## Lo que falta, por orden de urgencia

Estas son las únicas cosas que impiden publicar. Ninguna se puede resolver desde
el código: todas dependen de material del cliente.

### 1. Contenido de la línea Industrial

La página existe y está completa como estructura, pero cuatro de sus sesiones
dicen «En preparación» porque no hay material. Cada una declara en el sitio qué
necesita y en qué formato:

1. **Capacidades** — la lista de servicios industriales que Spot presta hoy.
   Entre cuatro y ocho entradas: nombre del servicio y una frase de alcance.
2. **Proyectos** — dos o tres proyectos reales: sector, problema, intervención y
   resultado verificable. Un párrafo por proyecto, más el nombre del cliente si
   autoriza aparecer.
3. **Clientes industriales** — confirmación de qué clientes pertenecen a esta
   línea, y sus logotipos en vectorial. En el sitio de pruebas aparecen DHL
   Global Forwarding, Teclogi, Aerosan y Caribe Cargo; falta confirmar si son de
   esta línea o de Experiencias.
4. **Herencia ALW Colombia** — decisión de sí o no sobre comunicar en abierto la
   trayectoria previa, y si es sí, el párrafo aprobado. **No se publica nada
   sobre la marca anterior sin ese visto bueno.**

Mientras tanto el sitio no inventa nada: enseña la forma del hueco. Es honesto y
además le dice al cliente exactamente qué entregar.

### 2. Logotipos de cliente en vectorial

Los trece logotipos del portafolio están incrustados como imagen dentro del PDF,
a resolución de pantalla: no sirven para web. La sesión VII de Experiencias los
compone hoy en tipografía, que se ve nítida a cualquier tamaño y no necesita un
recuadro blanco sobre el fondo negro. Cuando lleguen los SVG se decide si
conviene cambiarlo.

### 3. Fotografía

No hay ninguna imagen propia: ni de experiencias dirigidas ni de la línea
Industrial. El diseño no la necesita para funcionar, pero una fotografía real y
con derechos confirmados por cliente daría peso a las sesiones de territorios y
proyectos.

### 4. Decisiones de producto todavía abiertas

- Formulario de contacto y a dónde van los leads. Hoy el cierre es correo y
  teléfono directos.
- Analítica.
- Versión en inglés. Spot opera desde Cambridge y el portafolio ya mezcla
  títulos en inglés, pero el sitio está sólo en español.
- Si el cliente necesitará editar el contenido por su cuenta. Hoy el texto vive
  en el repositorio; si hace falta autonomía, se conecta un CMS.
- Dominio final de producción.

## Lo que el sitio no hace, a propósito

- **No inventa.** Cada cifra, cliente y afirmación sale del portafolio 2026.
- **No usa un reel de eventos.** La categoría entera ship eso; esta dirección lo
  rechaza explícitamente.
- **No tiene barra de navegación interna.** La orientación vive en el hilo de
  latón del raíl: la sesión que se está leyendo enciende su numeral.
